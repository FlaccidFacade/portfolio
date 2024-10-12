import React from 'react';
import ReadNextjsDocs from './ReadNextjsDocs';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-testid="footer"
      className="bg-gray-800 text-white text-center py-4 text-sm"
    >
      <ReadNextjsDocs />
    </footer>
  );
};

export default Footer;
