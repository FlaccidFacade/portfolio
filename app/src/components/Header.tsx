import React, { useState } from 'react';
import ExternalLink from './ExternalLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Menu is open by default

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-col justify-center items-center bg-red-800 relative">
      <div className="text-3xl text-grey-200 m-2 lg:mb-8">FlaccidFacade</div>
      <nav className="w-full flex flex-col items-center">
        <div
          className={`flex flex-col items-center space-y-4  ${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:flex-row lg:space-y-0 lg:space-x-4`}
        >
          <div className="w-full text-gray-200 hover:text-black border border-gray-400 lg:border-0">
            <ExternalLink
              id="external-link-linkedin"
              link="https://www.linkedin.com/in/zachary-turner-1b4237181/"
            >
              LinkedIn
            </ExternalLink>
          </div>
          <div className="text-gray-200 hover:text-red-500 border-b border-gray-400 lg:border-0">
            <ExternalLink
              id="external-link-github"
              link="https://github.com/FlaccidFacade"
            >
              GitHub
            </ExternalLink>
          </div>

          <div className="text-gray-200 hover:text-red-200 border-b border-gray-400 lg:border-0">
            <ExternalLink
              id="external-link-github-portfolio"
              link="https://github.com/FlaccidFacade/portfolio"
            >
              Source
            </ExternalLink>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 lg:hidden text-grey-200"
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
