# Specs

> Adapted from `mars-workbench`@`368bed5` `design/specs/README.md`: spec v2 only (the site has no legacy docs), and a motion is named by the component that plays it, since the site has no `fx-*` utilities. The examples below (the board, its server) are the product's; the rules hold the same here.

One spec per page: `home.md` is the home page's, its skeleton only for now. A spec says what the page shows and what a reader can do on it, item by item, so a test can hold each item.

This file is the one home of the rules for writing a spec. The `write-spec` skill and the `write-spec-reviewer` agent point here rather than restate them (AGENTS.md › Adding a rule); how a test holds an item is `test/README.md`'s.

## Spec v2

Sections, in order:

- **States** — the page's states, and what the screen shows in each.
- **One section per area of the screen** (Columns, Task cards, Backlog…) — what it shows: its parts and what each one marks. Every number says what it counts, every list its order.
- **Actions** — a table: `ID · Action · Where · Result`.
- **Rules** — the limits on the actions.
- **Journeys** — how the page is used day to day, as a chain of action IDs: the happy path only.
  - A journey runs the same steps on the same data at both widths. The desktop journey is written out in full, and the mobile one sits right after it, pointing to it and naming only the steps that differ (a panel that is a sheet on a phone). Journeys sit by what they do, never grouped by width.
  - A journey's title names its width after a dash, `A week's work - desktop`, never in brackets, which are kept for the markers. A path only one width has is a journey of its own marked `- desktop-only` (or `- mobile-only`), with no pair.
  - A design that changes how the page looks updates the journeys it touches, with data that shows it (a backlog holding piles); a new journey is only for a new path or a new state the user reaches, such as an empty column.

### Items and IDs

- Every item starts with an ID: `<AREA>-n` (`COL-2`, `BL-5`), `A` for actions, `R` for rules, `J` for journeys. A new ID is one more than the highest its area has in the doc (`BL-9` → `BL-10`), whether the item is new or replaces a changed one. IDs are never renumbered. When the highest ID of an area is deleted, the next new item takes its number again: an ID names one item in the spec as it stands, and an older PR or review that names it meant the item of its day.
- Items sit where a reader looks for them, not in ID order: the IDs only name items. A new item sits beside the one it replaces or the ones it belongs with, and an area with many items on one subject gives them a `###` heading of their own (Board › Backlog › Groups).
- One ID is one thing a test's title can state in a sentence. A card's parts are one item, not one per field. Two statements are two items, even about the same thing: Done cards locked on the board is one, the server refusing the move another.
- An item says its facts in full rather than pointing to another area's ("in Todo's order"): two areas that agree today can part later. Pointing to an action, a move or a rule is fine.
- Every item is held by at least one test that names its ID in its title (`test/README.md` › Spec IDs).
- An item's marker says where it stands, and sits before its ID, so it is the first thing a reader sees: `- *(pending)* **BL-8** …`, `| *(pending)* A8 | …`; `check:spec` reads a marker nowhere else. The markers matter most while the spec is merged and its implementation PR isn't yet:
  - no marker: built, and held by a test.
  - *(pending)*: designed but not built. No test may name it yet; the implementation PR drops the marker and writes its test.
  - *(removing)*: built and still held by its test, but the design drops it. The implementation PR deletes the item, and `check:spec` then fails until its test is deleted too.
  - *(bug)*: built but wrong, held by an `it.fails`.
- An implementation PR is done when the items its design marked *(pending)* or *(removing)* have no marker left and `check:spec` passes.
- A change to an item that's already built: when the spec and the code change in the same PR, edit the item and its test together. When the spec is merged first, mark the old item *(removing)*, say "replaced by" and the new ID, and give the new behaviour a new ID marked *(pending)*. It gets a new ID, rather than the old one marked as changing, so the implementation PR can't pass `check:spec` without deleting the old test and writing the new one.
- A section kept as it stands until a redesign is marked `> As is.` and has no IDs.

### Writing items from a design

A design's items come from its decided mockup (what counts as decided: `design/README.md` › Mockups) and from what the owner decided in words on its PR.

- **Covers the design**: everything the decided mockup shows is in the spec, in the section it belongs to (Spec v2 above):
  - each state: States;
  - what an area shows: that area's section;
  - each thing the reader can do: Actions;
  - each limit: Rules;
  - a new daily path or a new state the user reaches: Journeys (Spec v2 › Journeys).
- **Decidable**: an item states what the user can observe — what is counted, the numbers and caps, the order, what is absent — so that, given the data, anyone can say whether the screen does it, and two tests of it would assert the same thing. Bad: "A group shows a pile." Good: "A group with tasks behind its next one shows one thin sheet for each of them, at most three, and **+N more**, N being how many are behind; the last task of a group shows neither."
- **Each layout**: when desktop and mobile differ, the item says what each one does.
- **Motion**: a motion goes into an item only as far as a test can hold it. The item names the motion by the component that plays it (the fireworks) and states:
  - what sets it off, and which element it plays on;
  - that once it has ended the layout is the same as at rest;
  - that nothing plays when the system asks for reduced motion.

  Its duration, its curve and how far it moves are the design language's, not the item's (What a spec doesn't say).
- **Both sides of a limit**: when the UI stops the user from changing data in some way (a Done card can't be moved back), the server refuses it too, and that refusal is an item of its own in Rules (R4 on the board, R1 on the server): a data rule lives where every write path passes (AGENTS.md › Layers). Only the owner makes an exception, never the agent; its item says the server doesn't hold the limit and which writes stay free of it. The exceptions so far: Board R6, where only the board limits pulling to a group's next task; the server doesn't check the order, so a write path outside the board, such as a future Claude tool over MCP, wouldn't be held to it.
- **Only what was decided**: what neither the decided mockup nor the owner's words decide is a question for the owner, not an item. The mockup's options that weren't picked, its research and its ideas for the spec decide nothing, and its Before is only today's state. An item that needs the owner's answer waits for it.
- **Ordinary use first**: the items cover what a reader does in ordinary use. A case that only rare use reaches gets no item, no code and no test on the session's own judgment, however easy it is to state: the session raises it to the owner with a recommendation, and the owner decides whether it is addressed at all. Only when the owner has handed the open questions to the session does the session decide, and it then lists each such decision in the PR's description for the owner to look over. Once the owner has decided that a case isn't addressed, the item it belongs to says so in a sentence that opens with `Left open on purpose`, so that no later session or reviewer raises it again. Bad: an item saying what a press on another card does during the 0.7 s in which a completed card flies into its ring, written because a reviewer asked for it (the product's PR #132). Good: the question in the report to the owner, with what the session would do and why; then, once the owner said the case isn't worth addressing, the item naming it as left open on purpose.
- **Only what the design changes**: built items the design doesn't touch stay as they are. A built item that is simply wrong is a fix of its own, not part of the design's change.

### What a spec doesn't say

- **Which test holds an item** — the test's title does, and `npm run check:spec -- --list <page>` lists them. Which layer tests it: `test/README.md` › Which layer.
- **Copy, pixels, colours, positions** — the mockup before the design is built, the page after.
- **How a motion looks** — its duration, its curve and what moves by how much: `design/design-language/README.md` › Motion and the component's constants.
- **Implementation** — function names, callers: the code.
- **Decisions and their reasons** — the spike.
