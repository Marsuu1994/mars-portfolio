# Brainstorm — rules for agents

The application brainstorm: `README.md` here holds the current narrative. It has nothing to do with building the site; the site's rules are the root `AGENTS.md`.

## Rules

1. **One brainstorm session, one file** in `sessions/`, named `YYYY-MM-DD-<topic>.md` by the day the session started. A session that runs over several days adds dated rounds to the same file.
2. **Quote the owner verbatim**, in the original language; don't summarize the owner's words. The agent's findings are written as findings — what was looked at, what it says, what it changes — not as a transcript of the agent's replies.
3. **Every round ends with what changed in `README.md`.** The README is the current state: rewrite the sentence that is now wrong rather than appending; a round that changes nothing says so.
4. **Facts carry their source; recalled citations are marked 待核对** until someone reads the paper. Application facts (deadlines, requirements) link to the official page and say to check the current cycle.
5. **Decisions are the owner's.** Record options and tradeoffs; a direction becomes the narrative only when the owner states it (as with Loud wins). Don't rank the owner's priorities or guess motives.
6. **Product evidence links to `Marsuu1994/mars-workbench`** by full GitHub URL (a file on `main`, or the PR while it is open); this repository holds no product code.
7. **Language:** narrative in Chinese, drafts meant for the application in English, paper titles, product names and code identifiers as they are.
8. **The personal site's design lives in `design/`** beside this folder, by the site's own rules (root `AGENTS.md`): a spike in `design/spike/` (trigger, research with sources, options with honest costs, numbered open questions, `Status:` at the top), a mockup in `design/mockup/mockup-<area>.html` — one self-contained file, options side by side with a recommendation, ranked by the Principles in `mars-workbench`'s `design/design-language/README.md` (until PR #115 merges, they live on its branch `claude/board-tap-to-complete-mockup`). The spike is the one source for research, ranking and questions; the mockup draws the options and the visual language and points to the spike rather than repeating it. This repository is private, so a mockup is viewed through its private Claude artifact: publish the same file path to keep the link, and put the link at the top of the spike and in the PR description. A pick is not approval: a design is decided only when the owner says so.

## Session template

```markdown
# <YYYY-MM-DD> · <topic>

## Round <k> · <YYYY-MM-DD>

> <the owner's message, verbatim>

### Findings

- <what was looked at, what it says>

**README:** <what changed, or "nothing">
```
