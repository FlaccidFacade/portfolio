import React, { isValidElement, ReactNode } from 'react';
import { useAnchorContext } from './AnchorContext';

interface ExternalLinkProps {
  id: string;
  link: string;
  children: ReactNode;
}

const containsAnchor = (children: ReactNode): boolean => {
  let hasAnchor = false;

  React.Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === 'a') {
      hasAnchor = true;
    }
  });

  return hasAnchor;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ id, link, children }) => {
  const { isInsideAnchor } = useAnchorContext();
  const shouldWrapInSpan = containsAnchor(children) || isInsideAnchor;

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (isInsideAnchor) {
    throw new Error('ExternalLink cannot be used inside an anchor tag');
  }

  return shouldWrapInSpan ? (
    <span data-testid={id} onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </span>
  ) : (
    <a data-testid={id} href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
