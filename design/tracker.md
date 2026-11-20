# Tracker

Open items only. Finished work lives in the git history and PR descriptions.

## Conventions

- One item per thing still to do, with its spike, mockup or PR when it has one; delete it in the PR that finishes it (AGENTS.md › Version Control).
- Items sit under the area they belong to, most important first.

## Site

- **Home page, 山水 Helvetica.** One long page: an ink landscape hero with the headline in its sky, Helvetica, a diagram per section, faint water under everything ([mockup](https://claude.ai/artifact/JAc5q3WqeCEXKFXF2VhfTh), `design/mockup/mockup-site-shanshui.html`). The owner decided the direction on 2026-11-20; its content is being polished round by round. Then its spec, then the build.
- **Replace the stopgap home page.** `/` serves a static copy of the mockup's page (`public/home.html`, the rewrite in `next.config.ts`), put up on 2026-11-20 so the site shows something. The build above replaces it: delete the copy, its rewrite and its line in `.prettierignore`. Until then a mockup change that should go live is copied into it, and its two captions keep the general names (“Internal tool”, “Merchant platform”) until the owner settles them (`design/spike/personal-site.md` Q14).
- **Home page, thumbnail home, and the first case page.** One image and one hook per project, desktop first ([mockup](https://claude.ai/artifact/784YrxKCtc3g7iDGbKPgpy), `design/mockup/mockup-site-thumbnails.html`); waits on the owner's pick of the hook version and approval of the thumbnails (`design/spike/personal-site.md` Q11, Q12), and on how it relates to 山水 Helvetica: the two stand side by side until the owner says (Q13).
- **Case page body format.** MDX recommended, so a case can embed its complexity figure (`design/spike/archived/site-scaffold.md` Q3); decide before the first case page.
- **The other three case pages, About, a domain.** After the first case page.
- **Mobile layout of the home page.** Desktop is designed first; the phone width only has to not break until then.

## Harness

- **Copy `check:spec`.** `mars-workbench`'s `scripts/checkSpec.ts` also compares legacy docs with `main`; take only the part that checks spec v2 IDs against test titles, once the first spec exists.
- **Interactive components use Radix Primitives** (AGENTS.md › Styling); install the first one with the first widget that needs it (a theme toggle, the phone menu, a figure zoom).
- **Keep the copied harness in sync.** Files copied from `mars-workbench` say which commit they came from; when the product's harness improves, port what applies here.

## Open questions

- **Public or private repository.** Private today; making it public needs `design/brainstorm/` moved out first, since it holds the application material (`design/spike/archived/site-scaffold.md` Q2).
