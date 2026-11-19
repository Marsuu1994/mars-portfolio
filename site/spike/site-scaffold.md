# Spike: 站点的工程骨架——从 mars-workbench 复制 harness

**Status: awaiting owner review** · 2026-11-19 · 起因和 owner 的原话：`sessions/2026-11-06-media-lab-fit.md` Round 13–15 · 设计本身见 [`personal-site.md`](./personal-site.md)

> 语言约定：叙述用中文；文件名、命令和代码标识保留英文。**harness** 指让 agent 按规则把活干好的那一整套东西：规则文件、设计文档的结构、spike 和 mockup 流程、skills 和 agents、CI 检查、review log。

## Trigger · 起因

Owner 先问能不能把作品集放进 `mars-workbench`（Round 13），然后提了另一条路（Round 14）：

> 或者我们copy现在mar-workbench里面关于harness那些部分，比如design这些，然后page structure，只是不要db那些因为本身就是个纯前端工程，之后有需要再连db

又指定了仓库（Round 15）：

> https://github.com/Marsuu1994/mars-portfolio 仓库已经有了啊

所以：站点的代码放进这个仓库，纯前端，harness 从 `mars-workbench` 复制并改写，数据库以后要用再接。这份 spike 定三件事：代码放在仓库的哪里；复制什么、改什么、不要什么；第一个 PR 做到哪一步。不写代码。

复制的来源固定为 `mars-workbench` 的 `main` @ `3f741cc`（2026-11-19）。

## 代码放在哪

这个仓库现在有两类东西：根目录的 brainstorm（`README.md`、`sessions/`、`materials/`），和 `site/` 下的设计（`spike/`、`mockup/`）。

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · `site/` 就是站点工程的根 ✓ | `site/package.json`、`site/src/`、`site/AGENTS.md`；现有的 `site/spike/`、`site/mockup/` 挪到 `site/design/spike/`、`site/design/mockup/`，和 `mars-workbench` 的 `design/` 一个结构。Vercel 的 Root Directory 设成 `site`；CI 用 `working-directory: site`，只在 `site/**` 变化时跑 | brainstorm 和工程分开，各有各的规则文件；以后要把站点拆成独立仓库，整个 `site/` 搬走就行 | 一次 `git mv`，要改 spike、README、AGENTS.md 里的链接 |
| B · 仓库根就是站点工程 | `package.json`、`src/` 放在根目录，和 `sessions/`、`materials/` 并排 | 少一层目录 | 工程配置和 brainstorm 混在一起；以后拆仓库要挑文件 |

**推荐 A。**

## 公开还是私有

这是 owner 的决定，下面是事实：

- 仓库现在是私有的。Vercel 能部署私有仓库，站点本身照样公开。
- 评审要「看到 harness」（规则、spike、review log、一轮轮的 PR），仓库就得公开。
- 仓库里有不适合公开的东西：`materials/` 里的申请素材 PDF 带内部系统名和合作方名字；`sessions/` 有个人经历和申请策略；`site/spike/personal-site.md` 有读者是导师、套瓷之类的内容。
- 所以如果以后要公开，要先把站点拆成独立仓库（A 让这一步很简单），或者把 brainstorm 挪走。

## 复制什么、改什么、不要什么

### 直接复制，小改

| 来源（`mars-workbench`） | 到（`site/`） | 改什么 |
| --- | --- | --- |
| `.prettierrc.json`、`.prettierignore` | 同名 | 不改 |
| `eslint.config.mjs` | 同名 | 去掉 server-only 的 `no-restricted-imports`（没有 services、DAL、Prisma）；保留命名、单组件一文件、arrow-function 组件 |
| `tsconfig.json`、`.nvmrc`、`postcss.config.mjs` | 同名 | 不改（路径别名 `@/` 照用） |
| `next.config.ts` | 同名 | 保留 `reactCompiler`；去掉 next-intl 插件、`/oauth` 的安全头和开发时检查本地 Supabase 的 `assertLocalServices` |
| `knip.jsonc` | 同名 | 去掉 Prisma 生成客户端的忽略项和 `public/sw.js` |
| `.github/actions/setup`、`.github/actions/chromium` | 同名 | `working-directory` 指到 `site` |
| `scripts/check-theme-vars.mjs` | `site/scripts/` | 主题名换成站点的两个：`paper`（日间）和 `ink`（夜间） |
| `scripts/check-review-log.mjs`、`scripts/githubApi.mjs`、`.github/workflows/review-log.yml` | 同名 | 仓库名、路径换成 `site/reviews/` |
| `.github/workflows/ci.yml` | `.github/workflows/site-ci.yml` | 留 format、lint、typecheck、knip、themes、单元测试、Playwright；去掉 Prisma generate、Postgres service、integration、spec coverage（见 Q5） |
| `.claude/skills/ui-design/SKILL.md` | `site/.claude/skills/` | mockup 的托管从 raw.githack 换成私有 artifact（这个仓库私有，见 AGENTS.md 第 8 条） |
| `.claude/agents/ui-verifier.md` | `site/.claude/agents/` | 从 Design Console 换成直接打开站点的页面 |
| `.claude/skills/write-spec`、`implement-spec`，`.claude/agents/*-spec-reviewer.md`，`.claude/context/*` | 同名 | 路径和页面名 |
| `design/README.md`、`design/spike/README.md`、`design/design-language/README.md`（Principles、对比度的量法）、`design/specs/README.md`（spec v2 的写法） | `site/design/` | 产品专属的例子换成站点的；Principles 原样保留，它们是 owner 的判断标准 |
| `reviews/README.md`、`reviews/AGENTS.md` | `site/reviews/` | 不改 |
| `test/README.md` | `site/test/` | 去掉 integration 和数据库的部分 |

每个复制来的文件开头写一行来源：`Adapted from mars-workbench@3f741cc <path>`。

### 改写

**`site/AGENTS.md`**：按 `mars-workbench` 的 AGENTS.md 一节一节过：

| 章节 | 怎么处理 |
| --- | --- |
| Project Overview、Tech Stack、Project Structure | 重写成站点的 |
| Workflow（spike first、where the rules live、subagents） | 保留 |
| UI Workflow | 保留思路：mockup 先行、照 mockup 实现；Design Console 那几条换成「站点的页面就是 console」 |
| Documentation Style | 原样保留 |
| Layers | 删掉 actions、services、DAL、MCP、data rules；留一句：以后要数据，照 `mars-workbench` 的 Layers 加回来 |
| Component placement | 改写：`ui/`（和内容无关的原件：Seal、Scape、Figure 的框）· `site/`（用到内容类型的区块：卡片、案例页的节） |
| Page structure | 删掉写操作和 optimistic 那部分；留「route 读内容 → 纯函数整理 → 渲染页面」 |
| Coding Conventions（General、Enums、Styling、JSX） | 原样保留 |
| Themes | 保留「一页一个主题」和「一个变量契约」，主题换成 `paper` 和 `ink` |
| i18n 那一条 | 改成：站点只有英文，正文放内容文件（Q3）；要做中文版时再引入 next-intl |
| Data & State | 删掉 |
| Version Control、Tooling、Commands | 保留，命令换成站点的 |

### 不要

`prisma/`、`supabase/`、`src/proxy.ts`、`src/mcp/`、`src/actions/`、`src/services/`、`src/lib/`；数据库和登录的脚本（`localDb`、`localAuth`、`localEnv`、`seed`、`devSession`、`setup.mjs` 的数据库部分）；`test/integration/`、`test/factories.ts`、`test/seed*.ts`；依赖里的 Prisma、Supabase、`pg`、MCP、`@hello-pangea/dnd`、`zustand`、`next-intl`、`daisyui`（Q4）。Design Console 先不要：站点只有三种页面，页面本身就是 console。`check:mockup-links` 不要：它检查 raw.githack 链接，这个仓库的 mockup 用私有 artifact。

## 站点的结构

```text
site/
├── AGENTS.md / CLAUDE.md      # 站点的规则（改写自 mars-workbench）
├── design/                    # spike/、mockup/、design-language/、specs/
├── reviews/                   # owner 的 review log
├── src/
│   ├── app/                   # /、/work/[slug]、/about
│   ├── components/
│   │   ├── ui/                # Seal、Scape（代码画的山）、Figure 的框
│   │   └── site/              # 缩略图卡片、案例页的节、页脚
│   ├── figures/               # 复杂度图和缩略图，一张一个 React SVG 组件
│   ├── content/               # 每个案例一个内容文件（Q3）加它的元数据
│   └── styles/                # paper / ink 两个主题的变量
├── e2e/                       # Playwright：每页能渲染、没有 console error、两种宽度、两种主题、不横向滚动
└── scripts/                   # check-theme-vars、check-review-log
```

技术栈和 `mars-workbench` 一致：Next.js 16（App Router、React Compiler）、React 19、TypeScript、Tailwind 4、Vitest、Playwright。字体用 `next/font` 加载 Geist、Geist Mono、Source Serif 4、Noto Serif SC。动手前按 `mars-workbench` 的规则，先读本地 `node_modules/next/dist/docs/` 里用到的 API（MDX、静态生成）。

## 第一个 PR 做到哪

`mars-workbench` 的规则是「新 UI 先有设计 PR，mockup 定了再实现」。缩略图首页还在等 owner 定（`personal-site.md` 的 Q11、Q12），所以：

1. **PR 1 · 骨架**（这份 spike 定了之后）：`site/` 的工程、改写后的 `AGENTS.md`、复制来的工具和 CI、两个主题的变量、三个空页面、一条 Playwright 冒烟测试；现有的 `site/spike/`、`site/mockup/` 挪到 `site/design/`。
2. **PR 2 · 首页和一个案例页**：缩略图首页的版本定了之后，照 mockup 实现首页和第一阶段的案例页；先写 spec。
3. **之后**：其余三个案例页、About、域名。

## 以后要接数据库

照 `mars-workbench` 的 Layers 加回来：actions（`'use server'`，薄）→ services → DAL；数据规则放在每条写路径都经过的地方。现在不预留空目录，用到时再加。

## 风险

- **两份规则会各自演变。** 每个复制来的文件写明来源 commit；哪边改进了，手动同步，在 tracker 里记一条。
- **案例页跑不了产品的真组件。** Loud wins 用录屏或另做一个小 demo。
- **CI 的分钟数。** 站点的 CI 只在 `site/**` 变化时跑，brainstorm 的提交不触发。

## 待拍板 · Open questions

| # | 问题 | 选项 | 推荐 |
| --- | --- | --- | --- |
| Q1 | 代码放在哪 | A `site/` 是工程根 · B 仓库根 | A |
| Q2 | 仓库公开还是私有 | 私有 · 以后公开（要先拆仓库或挪走 brainstorm） | Owner 定 |
| Q3 | 案例正文的格式 | MDX · TypeScript 数据 · Markdown 加一个小 loader | MDX：正文是长文，里面要嵌复杂度图 |
| Q4 | daisyUI | 不要 · 保留 | 不要：站点用自己的纸墨变量，daisyUI 的语义色用不上 |
| Q5 | spec v2 和 `check:spec` | 先用 spec v2 的写法，脚本以后 · 一起复制 | 先只用写法：`checkSpec.ts` 依赖 `mars-workbench` 的 legacy 文档对比，要拆开才能用 |
| Q6 | 第一个 PR 的范围 | 只做骨架 · 骨架加首页 | 只做骨架：首页的设计还没定 |
| Q7 | i18n | 现在不要 · 现在就加 next-intl | 现在不要 |
