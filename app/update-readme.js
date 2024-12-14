const fs = require('fs');
const path = require('path');

const resultsPath = path.join(__dirname, '../test-results.json');
const readmePath = path.join(__dirname, '../README.md');

const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

const totalTests = results.numTotalTests;
const passedTests = results.numPassedTests;
const failedTests = results.numFailedTests;
const coverage = results.coverageMap ? results.coverageMap.total.pct : 'N/A';

const readmeContent = fs.readFileSync(readmePath, 'utf8');
const updatedReadmeContent = readmeContent.replace(
  /!\[Coverage\]\(.*\)/,
  `![Coverage](https://img.shields.io/badge/coverage-${coverage}%25-brightgreen)`
);

fs.writeFileSync(readmePath, updatedReadmeContent, 'utf8');