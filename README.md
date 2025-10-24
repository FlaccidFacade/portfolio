# portfolio

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/github/license/FlaccidFacade/portfolio)
![Version](https://img.shields.io/badge/version-alpha.echo-blue)

This is Zachary Turner's portfolio source code used to explore Next.js by [Vercel](./vercel.info). Currently, this project is a static page to host some basic layout with site links. The objectives are rapid implementation, cost-efficiency, simplicity, and Test-Driven Development (TDD) using containerization and automated testing. The project is designed to scale efficiently while minimizing code duplication through a nano-component approach. The ultimate goal is to practice, explore some new frameworks, familiarize myself with alternative solutions, and enable others.

## project plan

- [x] zed : create a simple static app with links to similar profile pages and text.
- [x] alpha.zed : test running.
- [x] alpha.alpha : test automation with gh actions.
- [x] alpha.beta : ensure documentation for replication.
- [x] alpha.charlie : ensure coverage
- [x] alpha.delta : enhance page layout
- [/] alpha.echo : add content to page.
- [ ] beta.zed : enable readme badge automation.
- [ ] beta.alpha : add hosting free tier fail safes.
- [ ] beta.beta : production hosting.
- [ ] release : v0.0.0 launch
- [ ] vTBD : enable i18 translations
- [ ] vTBD : practice french - 100% translation in fr
- [ ] vTBD : practice tailwind css - pop up and auto fadeout alerts
- [ ] vTBD : practice 3rd party integration - instagram feed view. (put load on client end to save server cost)
- [ ] vTBD : practice 3rd party integration - spotify view
- [ ] vTBD : streak tracking (github, duolingo,...) to exemplify continuous learning and data pipelines

## prerequisites

unix based OS (or WSL), docker, and git

> ℹ️ **Note:** Ensure that all OS, Docker, and Git-SCM packages used are stable and free from known vulnerabilities.

> ℹ️ **Note:** The build runtime versions should be managed and specified within the Docker configuration files to maintain consistency and security.

## build steps

```bash
docker compose up
```

## Design Decisions

### Selenium in a separate directory from next.js

We place our selenium tests separately to ensure loose coupling between our system tests and app source code. For example we can adjust our runtime in selenium to python, and since this adjustment is in a separate container we can ensure no adverse affects on our app. This also makes it easier to avoid unnecessary code deployments.
