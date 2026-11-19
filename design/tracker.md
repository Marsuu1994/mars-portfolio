# Tracker

Open items only. Finished work lives in the git history and PR descriptions.

## Conventions

- One item per thing still to do, with its spike, mockup or PR when it has one; delete it in the PR that finishes it (AGENTS.md › Version Control).
- Items sit under the area they belong to, most important first.

## Site

- **Home page and the first case page.** Thumbnail home, one image and one hook per project, desktop first ([mockup](https://claude.ai/artifact/784YrxKCtc3g7iDGbKPgpy), `design/mockup/mockup-site-thumbnails.html`); waits on the owner's pick of the hook version and approval of the thumbnails (`design/spike/personal-site.md` Q11, Q12). Then its spec, then the build.
- **Case page body format.** MDX recommended, so a case can embed its complexity figure (`design/spike/archived/site-scaffold.md` Q3); decide before the first case page.
- **The other three case pages, About, a domain.** After the first case page.
- **Mobile layout of the home page.** Desktop is designed first; the phone width only has to not break until then.

## Harness

- **Copy `check:spec`.** `mars-workbench`'s `scripts/checkSpec.ts` also compares legacy docs with `main`; take only the part that checks spec v2 IDs against test titles, once the first spec exists.
- **Interactive components use Radix Primitives** (AGENTS.md › Styling); install the first one with the first widget that needs it (a theme toggle, the phone menu, a figure zoom).
- **Keep the copied harness in sync.** Files copied from `mars-workbench` say which commit they came from; when the product's harness improves, port what applies here.

## Open questions

- **Public or private repository.** Private today; making it public needs `design/brainstorm/` moved out first, since it holds the application material (`design/spike/archived/site-scaffold.md` Q2).
