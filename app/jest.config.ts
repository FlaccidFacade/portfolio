// /**
//  * For a detailed explanation regarding each configuration property, visit:
//  * https://jestjs.io/docs/configuration
//  */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  preset: 'ts-jest',
  /**
   *
   */
  coverageProvider: 'babel',
  /**
   * jsdom is a pure-JavaScript implementation of many web standards, notably the DOM and HTML Standards, for use with Node.js.
   * this dependency is included in the jest package
   */
  testEnvironment: 'jsdom',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  /** collectCoverageFrom is an array of glob patterns that are used to match the files that coverage info needs to be collected from.
   * the ! symbol is used to exclude files from the coverage collection.
   */
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/fonts/**',
    // '!src/pages/_app.tsx',
    // '!src/pages/_document.tsx',
  ],
  /**
   * coverageDirectory is the directory where the coverage information will be stored.
   * this is relative to the root of the project. in this case the root of our next.js app is portfolio/app/
   * so the coverage information will be stored in portfolio/app/coverage and not version controlled
   */
  coverageDirectory: 'coverage',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
