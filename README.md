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

- **Home**: a stopgap, so the site has something to show. `/` serves `public/home.html`, the home page of the 山水 Helvetica mockup copied out as one static file (`next.config.ts` rewrites `/` to it): an ink landscape with the headline in its sky, a diagram for every section, faint water under the whole page, following the system's light or dark setting. It is not built from the site's components. Its design was dropped on 2026-11-25; the page stays live, unchanged, until the v1 page replaces it (`design/tracker.md`).
