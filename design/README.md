# Design Docs

The site's design: what it looks like, why, and what is still open. The code lives in `src/`; the design source of truth lives here until a design is built, and the site's pages after.

> **`brainstorm/` is not part of building the site.** It is the owner's application brainstorm — the narrative, the sessions, the source material — kept in this repository for convenience. Nothing in the site's code or rules depends on it; its own rules are in `brainstorm/AGENTS.md`.

## What lives where

| Path | Purpose |
| --- | --- |
| [design-language/](./design-language/README.md) | The two themes and their variables, type, motifs, and the owner's Principles every design is judged by. |
| [specs/](./specs/README.md) | One spec per page, in spec v2; how a spec is written is its README. |
| [spike/](./spike/README.md) | Point-in-time proposals for open questions; lifecycle and shape in its README. Implemented spikes move to [spike/archived/](./spike/archived/). |
| [mockup/](./mockup/) | Self-contained HTML mockups of designs **not yet built** (see Mockups below). |
| [tracker.md](./tracker.md) | Open items only; its rules are in its Conventions section. |
| [brainstorm/](./brainstorm/README.md) | The application brainstorm — not part of the site (see the note above). |

## Mockups

> Adapted from `mars-workbench`@`3f741cc` `design/README.md` › Mockups. This repository is private, so a mockup is viewed through a private Claude artifact instead of raw.githack, and has no freshness script or Mockup links check.

A file in `mockup/` is a design that isn't built yet: self-contained HTML, inline styles, no shared stylesheets.

- Name it `mockup/mockup-<area>.html` from the first draft and keep that name through every round. Publish it as a private Claude artifact from the same path each round, so its link never changes; link it from its spike, its tracker item and its PR's description.
- When the owner has to choose, draw every option side by side, each at desktop and phone width where the design needs both. Rank them by `design-language/README.md` › Principles, and say which you recommend.
- Back a choice with research: how others solve it, each point with its source.
- A mockup settles how a design looks and feels. What it implies about behaviour — an order, what a count counts, an edge case — goes into the spec, not decided on the drawing.
- Write the narrative (notes, labels, research) in Chinese with English terms, like the spikes; the site's own copy on the drawn pages stays English.
- Once the owner picks, the mockup keeps only the chosen design — the rest stay in its history. A pick is not approval: a design is decided — `final version · decided <date>` at the top — only after the owner approves it in so many words.
- New UI goes design → spec → implementation (AGENTS.md › UI Workflow), walked by the `ui-design`, `write-spec` and `implement-spec` skills.
- Once a design is fully built, its mockup is deleted: the site's pages are its source of truth from then on.

## App README

The repo-root [README.md](../README.md) holds the site's **Current State**.
