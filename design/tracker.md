# Tracker

Open items only. Finished work lives in the git history and PR descriptions.

## Conventions

- One item per thing still to do, with its spike, mockup or PR when it has one; delete it in the PR that finishes it (AGENTS.md › Version Control).
- Items sit under the area they belong to, most important first.

## Site

- **Page skeleton, v1.** The whole page's frame from the v1 mockup, decided on 2026-11-24 ([v1 mockup](https://claude.ai/artifact/6ouKG7ihv9DbuUNAdVK95b), kept as a private artifact): a header with the five section links and the theme seal, five full-screen sections with only their titles, the clickable scroll rail on the right, the `paper` and `ink` themes, the background fireworks, at desktop and phone width, built at `/v1`. The spike is decided (`design/spike/page-skeleton.md`). The skeleton has a mockup of its own, with the owner's deviations from v1 drawn in, decided on 2026-11-26 (`design/mockup/mockup-home-skeleton.html`, [private view](https://claude.ai/artifact/J6ZMbhqDTJyentz9suEHpp)). Next, once the spike's PR has merged, the spec in a PR of its own from `main`, written from that mockup, then the build, each approved by the owner.
- **Replace the stopgap home page.** `/` serves a static page (`public/home.html`, the rewrite in `next.config.ts`), put up on 2026-11-20 so the site shows something. It stays live and unchanged until the v1 page is done; then that page moves to `/` and this one goes: delete the file, its rewrite, its line in `.prettierignore`, `e2e/home.spec.ts` and `HOME_HEADLINE`. The design it came from was dropped on 2026-11-25.
- **Case page body format.** MDX recommended, so a case can embed its complexity figure (`design/spike/archived/site-scaffold.md` Q3); decide before the first case page.
- **The other three case pages, About, a domain.** After the first case page.

## Harness

- **Interactive components use Radix Primitives** (AGENTS.md › Styling); install the first one with the first widget that needs it (a theme toggle, the phone menu, a figure zoom).
- **Keep the copied harness in sync.** Files copied from `mars-workbench` say which commit they came from; when the product's harness improves, port what applies here.

## Open questions

- **Public or private repository.** Private today; making it public needs `design/brainstorm/` moved out first, since it holds the application material (`design/spike/archived/site-scaffold.md` Q2).
