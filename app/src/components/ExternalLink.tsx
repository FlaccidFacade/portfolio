import React, { isValidElement, ReactNode } from 'react';

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
  const shouldWrapInSpan = containsAnchor(children);

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
