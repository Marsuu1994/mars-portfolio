# Tests

> Adapted from `mars-workbench`@`3f741cc` `test/README.md`: the site has no database, so no integration layer, and no component layer until it has interactive components.

This file is the one home of the rules for writing a test. The `implement-spec` skill and the `implement-spec-reviewer` agent point here rather than restate them (AGENTS.md › Adding a rule).

| Layer | Runner | Lives in | Talks to |
| --- | --- | --- | --- |
| unit | Vitest | `src/**/x.unit.test.ts`, next to the module | nothing — pure functions (a figure's geometry, the fireworks' geometry, content helpers) |
| e2e | Playwright | `e2e/`, one spec per page | the production build, at desktop and phone width, in both themes |

## Commands

```bash
npm test               # unit tests, in UTC and Los Angeles time
npm run test:e2e       # Playwright: every page, both widths, both themes; reuses a running npm run dev
npx playwright test e2e/home.spec.ts --project=mobile  # one spec in one project
```

## Which layer

- a derivation in a pure helper: unit;
- what a page shows, and that it holds together at both widths and in both themes: e2e.

## Every test

- **Assert the outcome, not how the code reaches it**: what the reader sees — text, roles, layout measurements — not class names or internal calls.
- **See it fail**: a bug fix starts with a test that fails, and a test for behaviour not built yet fails before the code lands.
- **Wait for the change before asserting**: an assertion runs only once the page has had its chance to change.

## Unit

- **Both timezones**: every Vitest project runs once in `UTC` (Vercel) and once in `America/Los_Angeles` (the owner's machine).

## e2e

- **Every page in four projects**: `desktop`, `mobile`, `desktop-dark`, `mobile-dark` (`playwright.config.ts`).
- **Any console error fails a test**, and so does a page that scrolls sideways.
- **Locate by role and visible text**, the way a reader finds things.
- **Copy comes from the code**: a test reads a string the page shows from the same constant or content file the page does, so a copy edit doesn't break it.

## Spec IDs

A page with a spec (`design/specs/README.md`) has an ID on every item, and a test names the IDs it holds at the start of its title: `test('HOME-2 J1 …')`.

- **Name the spec** on the test file's first line: `// Spec: design/specs/home.md`.
- **Write it from the item's text**: the assertions are the outcomes the item states, read off the item, not off the code under test.
- **A title names only what the test proves**: for each ID in its title, the test has an assertion that fails when that item breaks.
- **`npm run check:spec`** (CI) fails when an item no test holds, a `(bug)` item no `it.fails` holds, a title naming an ID its spec doesn't have or one still pending, an item that isn't a `(bug)` held only by an `it.fails`, an ID used twice, or a doc in `design/specs/` with no IDs. A skipped or commented-out test holds nothing, and a `describe.skip` fails the check, since the tests inside would still count.
- **`npm run check:spec -- --list <page>`** prints the page's items, each with where it stands (held, pending, removing, bug) and the tests holding it. CI writes the same list for every spec into the job summary.
