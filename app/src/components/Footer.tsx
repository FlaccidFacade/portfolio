import React from 'react';
import ReadNextjsDocs from './ReadNextjsDocs';

const Footer: React.FC = () => {
  return (
    <footer
      data-testid="footer"
      className="bg-gray-800 text-white text-center py-4 text-sm lg:absolute lg:bottom-0 lg:w-full"
    >
      <ReadNextjsDocs />
    </footer>
  );
};

export default Footer;
