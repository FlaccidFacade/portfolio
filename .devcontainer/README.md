Dev Container: Attach to running compose

Quick steps

- Ensure the compose stack is running from the repository root:

```bash
docker compose up -d
```

- The devcontainer is configured to attach to the `next-app` service from `compose.yml` and use `/app` as the workspace folder.

- In VS Code: open this repository, then run **Dev Containers: Reopen in Container** (or use the Remote - Containers UI). VS Code will attach to the running `next-app` container.

- Exposed/forwarded ports: `3000` (Next.js), `9229` (debugger).

- If you need to install dependencies inside the container:

```bash
cd app && npm install
```

- To rebuild the container after changes to the compose/devcontainer config, either restart the compose service or use **Dev Containers: Rebuild Container** in VS Code.

Notes

- The devcontainer references `../compose.yml`, so open the repository root (not a nested folder) when reopening in container.
- If the compose service isn't running, VS Code can start it for you if prompted.
