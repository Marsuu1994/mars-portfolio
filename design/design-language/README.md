# Design Language

The site's visual language: two themes over one variable contract, its type and its few motifs, and the owner's Principles that every design is judged by. Implemented in `src/app/globals.css`. How it was chosen, with its research: `design/spike/personal-site.md` › 视觉语言.

## Themes

Two themes, **paper** (light) and **ink** (dark), declaring the same variables (`npm run check:themes`). With no `data-theme` on `<html>`, the page follows the system. Colour is by role, never by palette: the body text is `ink-strong`, a note is `ink-mid`, a rule is `ink-faint`.

| Variable | paper | contrast on paper | ink | contrast on ink | Role |
| --- | --- | --- | --- | --- | --- |
| `--paper` / `--paper-2` | `#f5f4ef` / `#eceae3` | — | `#13161b` / `#1b1f26` | — | the page; a plate behind a figure |
| `--ink` | `#1b1f26` | 15.0 | `#e9e6de` | 14.5 | titles; the finished part of a figure |
| `--ink-strong` | `#42454a` | 8.7 | `#c3c0ba` | 10.0 | body text |
| `--ink-mid` | `#606266` | 5.5 | `#a09f9b` | 6.8 | notes, meta, a figure's lines |
| `--ink-light` | `#a8a8a6` | 2.2 | `#606161` | 2.9 | rules and marks; never text |
| `--ink-faint` | `#d7d6d2` | 1.3 | `#313336` | 1.4 | hairlines, far mountains; never text |
| `--indigo` | `#3d5a6c` | 6.6 | `#9dbccd` | 9.1 | far mountains; a figure's direction |
| `--umber` | `#8a5a3c` | 5.3 | `#d1a283` | 7.9 | the messy side of a figure |
| `--seal` | `#b8322a` | 5.4 | `#e8695a` | 5.7 | the seal, the one red on a page |

The five ink tones are 墨分五色 (焦 浓 重 淡 清); indigo and umber are the two tints of 浅绛. The values are darkened for contrast; they are not the pigments' own colours.

## Type

- **Source Serif 4** (`font-serif`): questions, stories, headings.
- **Geist** (`font-sans`): what was built; body text.
- **Geist Mono** (`font-mono`): only what is measured or labelled: dates, numbers, roles, kickers.
- No brush faces. Chinese characters appear only where they mean something (chapter numerals, the seal), set in a Song face.

## Motifs

- **Mountains drawn by code**: layered ridges, dark at the top fading to paper; one set of parameters per distance (高远, 平远). Never behind running text.
- **The seal**: the page's signature at its foot, the only red.
- **Complexity figures**: one per case, Before → After, drawn in the same ink as the page (React SVG components, not images, so they follow the theme and the fonts).

## Principles

> Copied as is from `mars-workbench`@`3f741cc` `design/design-language/README.md`. They are the owner's, written on the product: the examples are the product's, and a citation such as `(#115 R14)` points to that repository's `reviews/`. They judge this site's designs the same way.

How a screen should feel, whatever the theme. An agent checks a design against
these before proposing it, and ranks its options by them. Each came from a call the
owner made on a real design — most from PR #109's backlog grouping and PR #115's
board — and an example's citation says where: `(#115 R14)` is round 14 of
`reviews/pr-115.md`, which quotes the owner and names the commit that drew it; a PR
from before the review log is cited by its number alone, `(#58)`; an example with
nothing to cite is left out. The product's core, in one line: **take resistance away, amplify feedback** —
the work still to do stays calm and small, the work done is celebrated loudly. Under
it runs one habit of craft: **one structure, reused** — what reads as the same thing
is built as the same thing (group 5). The principles fall into six groups; the items
in a group pull the same way.

### 1. Minimal — fewer elements, smaller changes, fewer steps

**1.1 Only the necessary elements, and one element per meaning.** If the dots, the
path or another mark already says something, no text, number or second component
says it again; if removing an element loses nothing, remove it. Bad: `Weekly × 3`
and `1/3` beside a habit's dots, `Step 4/9` beside a project's path (#109 R1, R6); a
Done pane whose day groups each carry a ring, redrawing the progress row above it
(#115 R14). Good: the dots and the path carry progress (#109 R6).

**1.2 When what exists works, change it the least.** Prefer a small change to the
current screen over a new layout, and the simplest behaviour over a clever one.
Bad: five new desktop layouts to fill the room a moved Done column left (#115
R11–14). Good: the product's Todo and Done columns, each gaining only a tag — This
week, Today (#115 R15, R25); a card pulled after the day is done simply reopens the
ring grey (#115 R19).

**1.3 The fewest actions, the least friction.** Every extra step is a reason to stop
using the app; ask first whether a step can go — this is Phase 2's direction. A move
becomes a tap on the card; dragging stays only as desktop's extra. Bad: the old three
columns, a card walking Backlog → Todo → Doing → Done (#109 R11). Good: no Doing
column (#109 R11); a card is completed by tapping it, not by dragging it into Done
(#115 R7–8); a backlog card goes to the board with its `↑ Todo`, on both widths (#115
R14). The one exception: an action the user can't take back gets one confirming
state, in place — never an undo banner after it. Good: the tapped card's ✓ Complete
instead of a 5-second Undo snackbar (#115 R7–8).

### 2. Calm ahead — the work still to do never overwhelms

Calm is for what lies ahead — Todo, the backlog, the week's plan — and for the
screen at rest (#115 R23). People stall on the next step when they can see the hard
work waiting behind it, so the app keeps the user on now — what today asks — not on
everything still left to finish (#115 R32). The design is there to keep the user
going.

**2.1 Numbers serve motivation.** A big number overwhelms: small numbers are fine,
large ones discourage. A count stops at 8 and shows `8+` beyond it; the real number
stays in the accessible name (#109 R1, R11).

**2.2 A pile in plain sight is pressure.** What isn't for now stays folded away, and
no layer is added that could fill up with work nobody wants to do: plan by the week,
do by the day. Bad: the backlog always open beside Todo; a This week column between
today's cards and the backlog — a parking lot for what keeps getting put off (#115
R14). Good: the backlog folded to an edge (a pill on phones) and opened to plan (#115
R14).

**2.3 An empty list is a finish line.** When the planned work runs out, the screen says
it is done and offers what could come next without pushing it. Good: an emptied Todo
reads "All clear for the day", then "Everything you pulled for today is done" and "Pull
more from the backlog or call it a day" — both choices weighed the same (#115 R25;
the words #122).

### 3. Feedback — sized to the moment, in motion and in words

Feedback fits the moment it answers. Finishing is where the product gets loud: strong,
varied feedback borrowed from games — Balatro is the reference (#115 R23). Loud is for
that moment, not for what stays on screen: a done card at rest is quiet (6.1). The
words follow the same rule: they cheer a win, stay quiet as the day winds down, and
never claim more than the screen knows (3.5–3.8).

**3.1 Feedback is strong.** Completing is rewarded with motion, colour and particles
the user can feel. Good: the card lifts, wobbles and is tossed into today's ring (#115
R23–24).

**3.2 Variety keeps it fresh.** Several animations, picked at random and never the same
twice in a row, so the reward doesn't wear out; more kinds join over time. Good: four
Balatro-style juices before the toss — a wobble, a foil shine, a chip burst with `+1`,
a flip (#115 R23–24).

**3.3 Bigger wins, bigger feedback.** Every card gets its juice and its toss; closing
the day's plan gets the big one. Good: a card's toss, then the ring's spin and sparks
when the plan is done (#115 R2, R5).

**3.4 Feedback lands somewhere.** The reward shows where the work went. Good: the card
flies into today's ring on both widths, and the ring grows as it lands (#115 R23–24).

**3.5 Words match the moment.** A title cheers where the user has just won something,
and stays quiet where the day is winding down. Good: an emptied backlog reads
"Everything's on deck!"; an emptied Todo, mostly seen in the evening, reads "All clear
for the day", with no exclamation mark (#122).

**3.6 Words say only what the screen knows.** A line states what the data behind it
shows, in every case the screen can be in. When a design's copy, or wording the owner
asks for, claims more than the data knows, the agent says so and asks the owner before
using it. Bad: "This week's plan is done" on an emptied backlog, which only knows that
everything was pulled, while Todo may still hold the week. Good: "This week's plan is
all on the board"; Todo's "All clear for the day" shows only once something was done
today (#122).

**3.7 A description is whole sentences, without punctuation.** It states the fact,
then the next step, each a whole sentence starting on its own line (a long one may
wrap), with no commas or full stops unless one is truly needed; an exclamation mark stays where it carries strong
feeling. Bad: "Pull more from the backlog, or call it a day." Good: "This week's plan
is all on the board" / "Adjust your plan to add more or call it a week" (#122).

**3.8 Sentence case.** User-facing copy is sentence case; Title Case is for headers
only (page and section titles, nav labels). The same action keeps its casing across
states. Bad: "Sign Out" whose confirm reads "Sign out?". Good: "Sign out" / "Sign
out?" / "Create task", with headers like "Settings" keeping theirs.

### 4. Hierarchy — the important at a glance

**4.1 Order by importance.** What matters most is seen at a glance; what's secondary
folds away, sits behind a tap or comes last. Phones run from most to least important
top to bottom, desktops left to right, in the same order (#115 R12). Good: the ring
row and Todo first; a day's done list behind its ring (#115 R6, R12).

**4.2 Small visual details carry state; words don't explain it.** Good: the thin pile
under a backlog card says more wait behind it (#109 R5, R11); a Done card dims and
strikes through, so it reads settled (#109 R11).

**4.3 Don't crowd when there is room.** Where space is free, elements sit apart —
at opposite corners if need be; apart from text itself, nothing should feel
cramped. Bad: `+N more` and `↑ Todo` squeezed into one row with space left below
(#109 R11). Good: `+N more` top right, `↑ Todo` bottom right (#109 R1, R11).

**4.4 A layout holds when things fold.** Whatever can collapse, the screen still
reads well collapsed. Bad: the backlog and Done folded into one edge strip, leaving a
lone Todo column across the screen; two folded drawers side by side (#115 R14). Good:
Todo and Done as two columns, the backlog folded to an edge (#115 R14).

### 5. Consistent — one structure, reused by the eye and by the code

Consistency pays twice: parts that share one structure read calm, and the same
structure is built once — one component with slots, not a variant for each place.
When a design seems to need a second version of something, first ask whether it is
a slot of the first (#109 R11; #115 R29).

**5.1 One component, many places: a place fills slots, never reshapes the skeleton.**
Things of one kind keep one skeleton wherever they sit, and each slot keeps one job
everywhere. A card is a kind line, a title, a description, the signal bottom left
and the action bottom right: Todo puts the ✓ circle in the action, Backlog puts
`↑ Todo` there and `+N more` top right, Done leaves the action empty and dims. A
desktop column is a title with a tag beside its count: Todo · Today, Done · This week
(#115 R15, R25). Bad: three card faces — the board's, the phone's mini card, the
backlog sheet's — each laid out its own way (#115 R28); a project's `3 left this
week ⌄` in an outlined pill where a habit's count is plain text (#109 R3). Good: one card across Todo, Done
and Backlog, the quadrant inside the kind line — `ONE-OFF | DO FIRST` (#115 R28–29;
the mockup's tab K · Card).

**5.2 One journey on both widths; desktop may add, never subtract.** Everything a
phone can do, desktop does the same way, on the same card — one face on both widths;
desktop's extra room may add a view or a gesture of its own. Good: tap twice to
complete and `↑ Todo` on backlog cards on both widths, plus drag on desktop (#115
R14); desktop's Done column, where phones open a day's list from its ring (#115 R10,
R14).

**5.3 Kinds differ by colour and mark, never by layout.** Habit green, project-step
purple, one-off blue — the same on card edges, rings and sparks (#115 R2) — and a
habit's dots against a step's segmented path; the layout stays the card's. Told apart
by people with colour-vision deficiency too (tracker: one-off blue and step purple are
too close). Bad: a backlog habit card without the description its project neighbours
have (#109 R11).

### 6. Honest controls — controls look like controls, statuses don't, feedback stays small

**6.1 Status marks must not look like controls.** A state the user can't change by
clicking it is never drawn as a control shape — no hollow or filled circles or
squares that read as a radio or checkbox. Show it with what the element already
has: a tint, a border, a pill, muted text, an inline ✓ glyph beside text. Bad:
every project step row led by a circle that fills when the step is on this week —
it looks clickable and only repeats the pill (#58); a filled ✓ circle on a done card
(#115 R16). Good: this week's row is tinted with a "This week · todo" pill; a done
row reads muted with "✓ Mon, Oct 5" on the right (#58).

**6.2 Controls look tappable, and their feedback stays small.** This is a control's
own feedback — hover and press; the loud feedback belongs to wins (3.1–3.4). Hover is the least it
can be; press and selection carry the weight; hover never changes how a selected
element looks. Bad: a whole cell lighting up and lifting on hover; hover dimming a
selected day's glow (#115 R14). Good: a day cell — hover an underline, press a slight
shrink, selected a bright frame and an inner glow (#115 R6, R14–15).

**6.3 Interacting never changes size.** The layout holds still: a win's animation may
scale a card with a transform for a moment, but nothing around it moves until the card
has gone. Bad: a card that grows taller when selected (#115 R8). Good: the selected
card keeps its size and gains a confirm frame (#115 R8); rings keep one size on every
phone width (#115 R2).

## Motion

One easing: `cubic-bezier(0.2, 0, 0, 1)`. Timings: 150 ms for a control's own feedback, 240 ms structural, 420 ms for the seal. Opacity and transform only; backgrounds never move; `prefers-reduced-motion` turns motion off.

## Contrast method & bars

Every palette value is measured, never judged by eye: the WCAG contrast ratio of each colour on each paper. Bars: a colour used for text is at least 4.5:1 on both papers; `--ink-light` and `--ink-faint` are never text. A palette change re-measures and updates the table above in the same change.

## Sync points

Changing a theme's colours touches, together: `src/app/globals.css` (both theme blocks and the system-dark default), the table above, and `src/app/icon.svg` (the seal's red).
