# Mars Chu Site Agent Guide

The shared rulebook every agent session loads (Claude Code imports it through `CLAUDE.md`). It holds the rules every task needs, plus an index of where the rest live (Workflow › Where the rules live).

> Adapted from `mars-workbench`@`3f741cc` `AGENTS.md`. The site is front-end only: the product's Layers, Data & State and i18n rules are left out, and come back from there if the site ever gets data. Every file copied from `mars-workbench` says so at its top; `package.json`, `tsconfig.json`, `.prettierrc.json` and `.nvmrc`, which can't hold a comment, are copied too.

## Project Overview

Mars Chu's personal site and portfolio: a few case studies, each a problem, what made it hard, and how it was solved, plus the product Mars Workbench. A static Next.js site, deployed on Vercel.

## Tech Stack

- Framework: Next.js 16 (App Router), React Compiler on; every page static
- UI: React 19, Tailwind CSS 4 over the site's own theme variables (`design/design-language/`)
- Interactive components: Radix Primitives (Styling), none installed yet
- Tests: Vitest (unit) + Playwright (e2e, both widths, both themes)
- Language: TypeScript

## Project Structure

Directory responsibilities only — for concrete file and component names, read the code.

```text
src/
├── app/                           # Routes, the root layout, globals.css (the two themes)
└── components/                    # Two layers (Component placement), added with the first component
    ├── ui/                        # Primitives with no content types: the seal, the mountains, a figure's frame
    └── site/                      # Blocks that take the site's content: cards, a case page's sections
e2e/                               # Playwright specs, one per page
test/                              # Test conventions (README) and helpers
scripts/                           # Repo checks run in CI: the theme contract, the review log
reviews/                           # The owner's code reviews, one file per PR — README for people, rules in its AGENTS.md
.claude/                           # Claude Code skills (ui-design, write-spec, implement-spec), subagents and their shared context
design/                            # Design docs — index in design/README.md
├── design-language/               # The two themes, type, motifs, and the owner's Principles
├── specs/                         # One spec per page, spec v2
├── spike/                         # Spikes for open questions; archived/ = implemented
├── mockup/                        # Self-contained HTML mockups of designs not yet built
├── tracker.md                     # Open items only
└── brainstorm/                    # The application brainstorm: not part of the site (design/README.md)
```

## Workflow

### Session start

Read the design docs only when the task involves a page's content, layout or behaviour; skip them for a copy or style tweak the owner described exactly.

- `design/specs/<page>.md`: what the page shows and does
- `design/design-language/README.md`: themes, type, visual rules, and the Principles
- `design/tracker.md`: what is open

Next.js APIs outrun training data: before using a routing, rendering or `next.config` API you haven't checked for this version, read its page in `node_modules/next/dist/docs/`, the docs of the installed version.

A fresh checkout runs `npm install`. Every machine runs the npm that `package.json` pins (`devEngines`), the one CI runs, so the lockfile reads the same everywhere: when npm stops with `EBADDEVENGINES`, run `npm install -g npm@<that version>`, then rerun the command. `design/brainstorm/` is never read for a site task unless the owner points to it.

### Where the rules live

A rule that only one kind of file needs lives with that file. Read it before you edit:

| Before you edit… | Read first |
| --- | --- |
| a test (`*.unit.test.ts`, `e2e/`, `test/`) | `test/README.md` |
| a spike (`design/spike/`) | `design/spike/README.md` |
| `design/tracker.md` | its Conventions section |
| a spec (`design/specs/`) | `design/specs/README.md` |
| a mockup (`design/mockup/`) | `design/README.md` › Mockups |
| `reviews/`, or addressing the owner's review on a PR | `reviews/AGENTS.md` |
| themes, `globals.css`, visual patterns, how copy reads | `design/design-language/README.md` |
| `design/brainstorm/` | `design/brainstorm/AGENTS.md` |

### Adding a rule

Every rule has one home, and everything else points to it: code taste and the rules every task needs live in this file, and a rule only one kind of file needs lives where the table above says. A skill, a subagent or a `.claude/context/` file points to a rule's home and never restates it. A rule a linter or script can check goes into the tool, with at most one line here. A rule that overlaps an existing one rewrites that rule instead of adding a second.

### Spike first for complex tasks

A complex task — several PRs, a new kind of page or content, a new dependency, or a choice with real tradeoffs — starts with a spike in `design/spike/`, not code. Lifecycle and shape: `design/spike/README.md`.

### Subagents

Delegate to a subagent only work whose tool output would outgrow the brief and the report, or, for a reviewer, a read that isn't anchored on the session's own work. Each agent's description says what its brief needs.

- `ui-verifier`: the browser check (UI Workflow).
- `write-spec-reviewer`: a spec change written from a design, by the `write-spec` skill.
- `implement-spec-reviewer`: a change that builds spec items, by the `implement-spec` skill, before the push.

## UI Workflow

- **The pages are the source of truth for built UI.** There is no separate console: `npm run dev` shows every page as it is.
- **Verification is CI's and the owner's; a browser check is the exception.** CI runs the e2e suite on every push — every page, both widths, both themes — and the owner accepts UI on the Vercel preview. A layout change (wrapping, overflow, breakpoints), a new figure, or the owner's request gets one browser check, delegated to the `ui-verifier` subagent with a brief; read its verdict, and open a screenshot only when it says UNSURE.
- **New UI goes design, spec, implementation.**
  - Design: a design that isn't built yet is drawn as a self-contained HTML mockup in `design/mockup/` and reviewed by the owner until it is decided (`design/README.md` › Mockups). The `ui-design` skill walks it.
  - Spec: the `write-spec` skill writes the design's items into the page's spec, marked *(pending)* (`design/specs/README.md`), and the `write-spec-reviewer` agent checks them.
  - Implementation: the `implement-spec` skill builds the items and their tests, and the `implement-spec-reviewer` agent checks them before the push.
- **Build it exactly.** Implement the approved mockup exactly (layout, spacing, text, colours, figures, states); if something can't be built as-is, raise it and update the mockup first. Once the design is fully built, delete its mockup.

## Documentation Style

- **Living docs are for the owner to re-orient, not the agent's work record.** README Current State, `design/tracker.md` and everything under `design/` say what the site is now and what's still open. Write at the doc's altitude; length doesn't scale with diff size; rewrite the sentence that is now wrong instead of appending a paragraph. Completeness lives in PR descriptions and the git history.
- **Docs and code comments are written for a person.** Whole sentences: say who does what and when, not noun phrases or shorthand; give a term its meaning the first time it appears. When a description runs long and splits along its own structure, make it a list with `name: description` per item.

## Page structure

- **A route reads its content, shapes it with a pure function when the page needs one, and renders the page.** Content (a case's text, its metadata, its figure) lives in files under `src/`, not in components; a page component takes it as props. Whatever is derived runs on every render and never becomes state.
- **Server Components by default**; add `'use client'` only when interactivity requires it, on the smallest component that needs it.
- **Component placement** — `src/components/` has two layers, decided by imports: a component that imports a content type is **site** → `site/`; everything else — primitives reusable on any site — is **ui**. Hard rule: nothing in `ui/` imports a content type.
- **Figures are React SVG components**, not files in `public/`: drawn in the theme's variables and fonts, they follow the theme. `public/` holds photos, recordings and share images.
- **If the site ever needs data**, it brings back `mars-workbench`'s Layers (actions → services → DAL) through a spike first.

## Coding Conventions

### General

- **DRY — one definition per piece of logic, markup or type.** Markup that repeats with only data or colour differences becomes one parameterized sub-component; a colour difference comes from a `Record<Key, string>` of literal Tailwind classes (never `` `bg-${accent}` `` — Tailwind can't see it). Identical type shapes collapse to one, and shapes sharing a core extend a base.
- **Components that belong together share a kebab-case folder** named for the group, each in a file named after it (one component per file is linted; a one-off block that needs the parent's scope is a render function instead).
- **Destructure** when two or more properties of the same object are used, instead of repeating `obj.a`, `obj.b`; a single one-off access can stay.
- **Name things plainly — clear and boring beats short or clever.** A function says what it returns or does; a variable or parameter — callback parameters included — says what it holds. Full words only: `id` and `prev` (setState updater) are fine, single letters are linted (allowed ones in `eslint.config.mjs`).
- **A workaround is fine, but marked.** Code that exists only to get around someone else's bug or quirk opens its comment with `Workaround (<whose>):`, says what goes wrong without it, and links the upstream issue when there is one.

### Enums

- Use enum constants, never raw strings.
- **Maps are `Record<Enum, T>`; branching is a `switch` whose `default` asserts `never`.** Either way a new enum value fails to compile until it is handled.

### Styling

- Tailwind utility classes, no inline styles — `style` only carries dynamic values (a CSS variable, a computed width).
- Theme variables by role (`text-ink-strong`, `bg-paper`), never hardcoded colours like `text-gray-600`; what each variable is for is in `design/design-language/README.md`.
- **Interactive components use Radix Primitives**, styled with the site's variables; no hand-rolled dialog, menu, toggle or tooltip. Install each primitive with the first widget that needs it.
- Icons, when the site needs them, come from one icon package chosen in a spike; brand marks and figures draw their own SVG.

### Themes

- **One theme per page.** The theme lives only on `<html data-theme>`; with none, the page follows the system. Never nest a `data-theme` scope.
- **One variable contract.** `paper` and `ink` declare the same custom properties in `globals.css`, and so does the system-dark default; a new variable lands in all of them in the same change, named by role (`npm run check:themes`, CI).

### JSX & components

- **Keep the return statement an outline.** Conditional or complex JSX becomes a named render function with access to the component's scope; reusable pieces become sub-components.
- **No magic literals.** Fixed, non-user-facing literals — routes, numbers, durations, style tokens — go into an exported constant in a `constants.ts` next to the component. Copy that a test also reads (a page's heading) lives in a constant or the content file, so the test reads the same string.
- **The site is in English only**, with no i18n library; its copy comes from the decided mockup and reads by `design/design-language/README.md` › Principles. Copy is sentence case; Title Case is for headings only.

## Code Style

- Props are explicitly typed, preferably with an `interface`.

## Tooling

- **Prettier owns formatting** (`.prettierrc.json`; code only — Markdown and `design/` are ignored). **ESLint owns correctness**: no `any`, no `console.log` (`console.error` / `warn` allowed), named exports and `const` arrow components (Next.js convention files excepted), one component per file, no single-letter names.
- CI runs `format:check`, `lint`, `typecheck`, `knip`, `check:themes`, the Vitest suite and the Playwright suite — run all but Playwright before pushing (Version Control).

## Version Control

- **Local sessions** (on the owner's machine): never commit, push or take another outward-facing VCS action without explicit permission — make and stage the changes, summarize them, and wait for approval.
- **Remote sessions** (cloud containers): commit and push with `git push -u origin <branch>` without asking; once a PR is open, subscribe to its activity and see it through: red CI and review comments are the session's to fix.
- Never commit or push to `main`; changes land through pull requests.
- **Branch names say what the PR does**: `claude/<feature>-<change>`, kebab-case, a few words.
- **Before every push**:
  1. `design/tracker.md`: delete finished items.
  2. README Current State: rewrite the sections the change touches.
  3. AGENTS.md, or a README it indexes: only when a rule or a directory's responsibility changed.
  4. Run `npm run format`, then `lint`, `typecheck`, `knip`, `npm test` (and `check:themes` when CSS variables changed); run `npm run test:e2e` when a page changed.
- **Act on submitted reviews only.** A pending review can still change: don't reply to, resolve or push for its comments.

## Commands

```bash
npm run dev          # Start the dev server
npm run build        # Production build
npm run lint         # ESLint (CI)
npm run typecheck    # tsc --noEmit (CI)
npm run knip         # Unused files, exports and dependencies (CI)
npm run format       # Format all code with Prettier
npm run format:check # Verify formatting (CI)
npm run check:themes # Both themes declare the same CSS variables (CI)
npm run check:review-log  # Every owner review on a PR has its entry in reviews/ (CI; GITHUB_REPOSITORY and PR_NUMBER locally)
npm test             # Unit tests in UTC and Los Angeles time (CI)
npm run test:e2e     # Playwright: every page, both widths, both themes (CI); reuses a running dev server
```
