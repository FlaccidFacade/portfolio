# Dependabot PR Labeling

This repository uses [actions/labeler](https://github.com/actions/labeler) to
automatically label pull requests created by [Dependabot](https://github.com/dependabot).

## How it works

There are two key pieces:

### 1 .github/labeler.yml

```yaml
dependabot:
  - "dependabot/**"
```

dependabot: → the name of the label to apply.

dependabot/** → a pattern that matches Dependabot branch names, such as
dependabot/npm_and_yarn/lodash-4.17.21.

When a PR comes from a branch matching this pattern, the dependabot label is applied.


### 2 .github/workflows/labeler.yml


Runs whenever a pull request is opened.

Uses the actions/labeler action to read rules from .github/labeler.yml.

Applies the dependabot label if the PR branch name matches dependabot/**.

## Why this is useful

Makes Dependabot PRs easier to filter and triage.

Enables automation (for example, requiring fewer reviewer approvals or
auto-merging once CI passes).

Keeps the pull request list organized by highlighting automated dependency updates.
