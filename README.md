# Mars Chu

Mars Chu's personal site and portfolio: a static Next.js site, deployed on Vercel. Its design, the rules agents follow and the CI checks are adapted from [Mars Workbench](https://github.com/Marsuu1994/mars-workbench).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No database, no sign-in, no environment variables.

If npm stops with `EBADDEVENGINES`, install the npm that `package.json` pins (`npm install -g npm@<that version>`) and rerun.

## Deploying

Vercel imports this repository as a project with the default Next.js settings; the repository root is the app. Pushes to `main` deploy production; every other branch gets a preview, which Vercel's default Deployment Protection keeps behind a Vercel sign-in.

## Docs

- [AGENTS.md](./AGENTS.md) — the rules every agent session follows
- [design/](./design/README.md) — the design: visual language and Principles, specs, spikes, mockups, tracker
- [test/README.md](./test/README.md) — how tests are written
- [reviews/](./reviews/README.md) — the owner's code reviews
- [design/brainstorm/](./design/brainstorm/README.md) — the owner's application brainstorm, kept here but not part of the site

## Current State

- **Home**: a placeholder page in the site's paper and ink themes, following the system's light or dark setting. The real home page waits on its design (`design/tracker.md`).
