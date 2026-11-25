# Home (/v1)

The home page is one long page that the reader scrolls from top to bottom: five sections, About, Mars Workbench, Projects, Work and Contact, each at least a screen tall. A header across the top and a rail down the right side say where the reader is and take them to any section. Faint pencil fireworks go off in the background. The page has two themes, `paper` and `ink`.

This spec covers the page's skeleton: the header, the rail, the two themes, the fireworks, and the five sections with only their titles. Each section's own content gets its items when that section is built. The page is built at `/v1`; it moves to `/` once every section is done, and the stopgap page at `/` goes then (`design/tracker.md`).

Spec v2 (`specs/README.md`): every item starts with an ID, and each test that checks it puts that ID in its title. The design is the decided mockup, `design/mockup/mockup-home.html`, with the owner's changes recorded in `design/spike/page-skeleton.md` › Decision.

Widths: *desktop* is a window 900 px wide or wider, and *phone* is anything narrower. The header has a compact form at 560 px and narrower (HD-2).

## States

The page has no data; what changes between visits is only the theme.

- *(pending)* **ST-1** Opening the page when the system is set to light shows it in `paper`, with the seal reading 墨 (TH-1).
- *(pending)* **ST-2** Opening the page when the system is set to dark shows it in `ink`, with the seal reading 纸 (TH-1).
- *(pending)* **ST-3** A theme the reader picks with the seal (A4) lasts only for that visit: a reload, or a later visit, opens the page in the system's theme again (ST-1, ST-2). Nothing about the choice is stored.

## Header

- *(pending)* **HD-1** The header stays at the top of the window while the page scrolls, over the sections, at both widths.
- *(pending)* **HD-2** The header holds, from left to right:
  - the brand: its dot and **Mars**, and only the dot at 560 px and narrower. A screen reader reads it as a link named **Mars, back to top** at every width.
  - a navigation named **Sections**, with five links in this order: **About**, **Product**, **Projects**, **Work**, **Contact**. The second link reads **Product** at both widths, though its section's title is **Mars Workbench** (SEC-1).

  The header also holds the seal (TH-1). Where in the header it sits isn't decided yet (`design/spike/page-skeleton.md` Q8), so this item says only that it is in the header.
- *(pending)* **HD-3** At any moment exactly one of the five links is marked as the current one: the current section's (R1). A screen reader hears that link as the current one. The brand is never marked.

## Sections

- *(pending)* **SEC-1** The page shows five sections, in this order: **About**, **Mars Workbench**, **Projects**, **Work**, **Contact**. Each is at least as tall as the window and shows only its title, as a heading.
- *(pending)* **SEC-2** The page's top heading is **Mars Chu**. It isn't shown on the page, but a screen reader reads it, and the five section titles are the headings under it.
- *(pending)* **SEC-3** How the sections sit:
  - desktop: the five sections are on one sheet in the middle of the window, and the desk shows at both sides of it.
  - phone: the sections fill the window's width, and the page has no desk and no sides.
- *(pending)* **SEC-4** Each section has its own address: `#about`, `#workbench`, `#projects`, `#work` and `#contact`. Opening the page at one of them shows that section's start at the top of the window, under the header, with its title clear below the header, and its link and its dot marked as current (HD-3, RL-4).
- *(pending)* **SEC-5** When a scroll stops a little way from the start of a section, as the browser judges close, the page settles at that start. A scroll that stops halfway between two sections' starts stays where it stopped.

## Rail

- *(pending)* **RL-1** A rail runs down the right side of the window, centred in its height, and stays where it is while the page scrolls, at both widths. It is a thin line with one dot for each section, in the sections' order from top to bottom.
- *(pending)* **RL-2** A fill grows down the line from its top as the page scrolls. Its length is the share of the page scrolled so far: how far the page has scrolled, out of how far it can scroll. It is empty at the top of the page and full only at the very bottom.
- *(pending)* **RL-3** Each dot sits on the line where its section starts, as a share of how far the page can scroll; the first dot is at the top end of the line and the last at the bottom end, whatever its section's start. So when a section's start is at the top of the window, the fill ends at its dot.
- *(pending)* **RL-4** Each dot looks one of three ways: the dots before the current section's (R1) are drawn as passed, the current section's is drawn as current, and the ones after it as not yet reached. A screen reader hears the current section's dot as the current one.
- *(pending)* **RL-5** Each dot is a link named **Go to** and its section's title: **Go to About**, **Go to Mars Workbench**, **Go to Projects**, **Go to Work**, **Go to Contact**.
- *(pending)* **RL-6** On a device that can hover, pointing at a dot or moving the keyboard's focus to it shows a label beside it straight away: its section's number in two digits and its title, **01 About** to **05 Contact**, with **02 Mars Workbench** for the second. On a touch screen no label shows.
- *(pending)* **RL-7** Whenever the window's size changes, the page's fonts finish loading or any section's height changes, the dots move to the sections' new starts (RL-3) and the fill to the new share (RL-2).

## Theme

- *(pending)* **TH-1** The seal is a button in the header that reads 墨 while the page is in `paper` and 纸 while it is in `ink`. It reads the right one from the first paint, before any script has run.
- *(pending)* **TH-2** Pressing the seal (A4) switches the whole page to the other theme: the header, the sheet, the desk, the rail and the fireworks (FW-4).
- *(pending)* **TH-3** A screen reader hears the seal as a toggle button, pressed while the page is in `ink`. It is named **Switch to ink theme** while the page is in `paper`, and **Switch to paper theme** while it is in `ink`.
- *(pending)* **TH-4** On a device that can hover, pointing at the seal shows the hint **Switch paper and ink**.

## Fireworks

- *(pending)* **FW-1** The fireworks are drawn behind the sheet and the sections, on a layer that takes no pointer input and that a screen reader doesn't read, at both widths.
- *(pending)* **FW-2** Where a firework can go off:
  - desktop: only on the desk at the two sides of the sheet, clear of the header and the rail.
  - phone: anywhere across the window's width, clear of the header, the rail and each section's title.
- *(pending)* **FW-3** How many there are, counting only the ones on screen:
  - at most 11 at once on desktop, and 7 on a phone.
  - when fewer than 5 are on screen on desktop, or 3 on a phone (a part of the page just scrolled into view, or the page just opened), enough start, one right after another, to make 8 on desktop and 5 on a phone; otherwise one more starts at a steady interval while fewer than the most are on screen.
- *(pending)* **FW-4** Each firework is drawn in a colour picked at random for it, in the shade of the page's theme. When the theme changes (TH-2), the fireworks on screen take the new theme's shade at once.
- *(pending)* **FW-5** Fireworks go off at a place on the page, not on the window: scrolling moves them with the page.
- *(pending)* **FW-6** Two fireworks on screen at the same time never overlap.

## Motion

How each motion looks (what moves, how far, for how long) is `design/design-language/README.md` › Motion's and the component's constants. Each ends with the layout as it is at rest, and none plays when the system asks for reduced motion.

- *(pending)* **MO-1** Following a header link, the brand or a dot (A1, A2, A3) scrolls the page smoothly to the section's start. Under reduced motion the page jumps there at once.
- *(pending)* **MO-2** Pressing the seal (A4) plays a stamp on the seal: it presses in and springs back. Pointing at it on a device that can hover tilts it a little. Under reduced motion neither plays.
- *(pending)* **MO-3** When the theme switches (A4), the backgrounds of the desk, the sheet and the seal, the header links' colour and the rail dots' colours fade from the old theme's to the new one's; the header's background, the rail's line and fill, the section titles and the seal's character change at once. Under reduced motion they all change at once.
- *(pending)* **MO-4** Each firework plays out where it goes off (FW-2): a small spark climbs up trailing a pencil line, pops into the firework with sparks flying out, holds for a moment and fades out, and then it is gone. Under reduced motion nothing moves: the page draws still fireworks across the whole page at once instead, as many as 11 for each section on desktop and 7 for each on a phone, each drawn whole where it goes off, and they scroll with the page (FW-5). The rest of FW-2, FW-4 and FW-6 holds for them too.
- *(pending)* **MO-5** A dot's label (RL-6) comes in with a short fade as it slides a little into place beside the dot. Under reduced motion it shows at once.

## Actions

| ID | Action | Where | Result |
| --- | --- | --- | --- |
| *(pending)* A1 | Go to a section | a link in the header | the page scrolls to that section's start (MO-1), the address ends in its `#` (SEC-4), and its link and its dot are marked as current (HD-3, RL-4) |
| *(pending)* A2 | Back to the top | the brand | the page scrolls to About's start (MO-1), and the fill is empty (RL-2) |
| *(pending)* A3 | Go to a section | a dot on the rail | the same as A1 |
| *(pending)* A4 | Switch the theme | the seal | the whole page switches to the other theme (TH-2), the seal reads the other character and its pressed state follows (TH-1, TH-3), and the stamp plays (MO-2) |
| *(pending)* A5 | See a dot's name | point at a dot, or move the keyboard's focus to it, on a device that can hover | its label shows (RL-6) |
| *(pending)* A7 | See what the seal does | point at the seal, on a device that can hover | its hint shows (TH-4), and it tilts a little (MO-2) |
| *(pending)* A6 | Scroll | anywhere on the page | the fill follows (RL-2), and the current section changes as R1 says, in the header and on the rail together |

## Rules

- *(pending)* **R1** The current section is the last one whose start has passed a line 45% of the way down the window. When the page is scrolled to within 2 px of its bottom, the current section is the last one, Contact, whatever that line says.
- *(pending)* **R2** On a window 360 px wide or wider, nothing on the page makes it scroll sideways, at either width. Left open on purpose (owner, 2026-11-25): windows narrower than 360 px. The header doesn't fit on one line there, and nothing is changed to make it fit.

## Journeys

- *(pending)* **J1 Reading the page - desktop**, with the system set to light:
  - open the page (ST-1): it is in `paper` at the top, About's title shows, **About** is the current link and the first dot the current dot, and the fill is empty
  - scroll down one screen (A6): Mars Workbench is the current section, so **Product** is the current link and the second dot the current dot; the first dot is passed, and the fill has reached the second dot
  - press **Projects** in the header (A1): Projects' start is at the top of the window, the address ends in `#projects`, and **Projects** and the third dot are current
  - point at the fourth dot (A5): its label reads **04 Work**
  - press it (A3): Work's start is at the top, and **Work** and the fourth dot are current
  - press the seal (A4): the page is in `ink`, the seal reads 纸 and is pressed
  - scroll to the bottom (A6): **Contact** and the last dot are current, and the fill is full
  - press the brand (A2): About's start is at the top, and the fill is empty
  - reload: the page is in `paper` again (ST-3), at About
- *(pending)* **J2 Reading the page - mobile**: J1 on a phone, with the same steps, except:
  - open the page: the brand is only its dot, all five links and the seal fit in the header, and the page doesn't scroll sideways (R2)
  - point at the fourth dot: on a touch screen no label shows (RL-6), so this step is left out
