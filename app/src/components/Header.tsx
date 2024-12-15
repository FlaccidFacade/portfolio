import React from 'react';
import ExternalLink from './ExternalLink';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center bg-white border-gray-200 py-2.5 dark:bg-gray-900 relative text-3xl">
      <nav className="w-full flex flex-col sm:flex-row justify-center items-center">
        <div
          data-tooltip-target="tooltip-default"
          className="pl-3 flex text-purple-500 font-bold shadow relative whitespace-nowrap"
          onMouseEnter={() => {
            const tooltip = document.getElementById('tooltip-default');
            if (tooltip) {
              tooltip.classList.remove('invisible', 'opacity-0');
            }
          }}
          onMouseLeave={() => {
            const tooltip = document.getElementById('tooltip-default');
            if (tooltip) {
              tooltip.classList.add('invisible', 'opacity-0');
            }
          }}
        >
          <span>
            <Link href="/aboutMe">Zachary Turner</Link>
          </span>
          <div
            id="tooltip-default"
            role="tooltip"
            className="absolute z-10 inline-block invisible px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700 mt-5"
          >
            <a
              href="https://github.com/FlaccidFacade"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/FlaccidFacade
            </a>
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
        <div
          className={`w-full justify-center flex flex-row space-y-0 space-x-4`}
        >
          <div className="text-gray-200 hover:text-blue-400">
            <ExternalLink
              id="external-link-linkedin"
              link="https://www.linkedin.com/in/zachary-glenn-turner/"
            >
              <div className="flex items-center hover:text-blue-400">
                <Image
                  data-testid="imageLinkedInLogo"
                  src="/linkedIn.png"
                  alt=""
                  width={10}
                  height={10}
                  priority
                />
                <div className="pl-1">LinkedIn</div>
              </div>
            </ExternalLink>
          </div>
          <div className="text-gray-200 hover:text-purple-500">
            <ExternalLink
              id="external-link-github"
              link="https://github.com/FlaccidFacade"
            >
              <div className="flex items-center hover:text-purple-500">
                <Image
                  data-testid="imageGithubLogo"
                  className="dark:invert"
                  src="/github-symbol.png"
                  alt=""
                  width={20}
                  height={20}
                  priority
                />
                <div className="">GitHub</div>
              </div>
            </ExternalLink>
          </div>

          <div className="text-gray-200 hover:text-yellow-600">
            <ExternalLink
              id="external-link-github-portfolio"
              link="https://github.com/FlaccidFacade/portfolio"
            >
              Source
            </ExternalLink>
          </div>
          <div className="text-gray-200 hover:text-red-500">
            <Link href="/album">Album</Link>
          </div>
          <div className="text-gray-200 hover:text-green-500">
            <Link href="/aboutMe">About Me</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
