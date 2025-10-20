# Dependabot PR Labeling

This repository uses [actions/labeler](https://github.com/actions/labeler) to
automatically label pull requests created by [Dependabot](https://github.com/dependabot).

## How it works

There are two key pieces:

### 1. .github/labeler.yml

```yaml
dependabot:
  - "dependabot/**"
```

dependabot: → the name of the label to apply.

dependabot/** → a pattern that matches Dependabot branch names, such as
dependabot/npm_and_yarn/lodash-4.17.21.

When a PR comes from a branch matching this pattern, the dependabot label is applied.


### 2. .github/workflows/labeler.yml


Runs whenever a pull request is opened.

Uses the actions/labeler action to read rules from .github/labeler.yml.

Applies the dependabot label if the PR branch name matches dependabot/**.

## Why this is useful

Makes Dependabot PRs easier to filter and triage.

Enables automation (for example, requiring fewer reviewer approvals or
auto-merging once CI passes).

Keeps the pull request list organized by highlighting automated dependency updates.

---

# CodeQL Security Scanning

This repository uses [CodeQL](https://codeql.github.com/) for automated security vulnerability scanning.

## How it works

### 1. .github/workflows/codeql.yml

The CodeQL workflow runs on:
- Every push to the `main` branch (when app code or Docker configs change)
- Every pull request to `main` (when app code or Docker configs change)
- Weekly schedule (Mondays at 00:00 UTC)

The workflow analyzes JavaScript/TypeScript code and Docker configurations for:
- Security vulnerabilities
- Code quality issues
- Best practice violations

### 2. .github/codeql/codeql-config.yml

Custom configuration that specifies:
- **Paths to scan**: Application source code (`app/src`, `app/public`) and Docker configuration (`compose.yml`)
- **Paths to ignore**: Test files, node_modules, build artifacts
- **Queries**: Security and quality queries from the CodeQL standard library

## Why this is useful

- Automatically detects security vulnerabilities before they reach production
- Scans Docker configurations for misconfigurations and security issues
- Provides detailed reports in GitHub Security tab
- Runs on every code change and weekly for new vulnerability discoveries
- Helps maintain security compliance and best practices
