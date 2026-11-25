# Spike: 整页骨架——header、五个 section 占位、滚动进度条、两套主题、背景烟花

**Status: awaiting owner review** · 第 11 轮 2026-11-25（Q1–Q15 都已答，等 owner 批准）· 设计：v1 mockup（2026-11-24 定档），私有页面 [claude.ai/artifact/6ouKG7ihv9DbuUNAdVK95b](https://claude.ai/artifact/6ouKG7ihv9DbuUNAdVK95b)，还不在仓库里（Q3）

> 语言约定：叙述用中文；站点的文案、区块名和代码标识保留英文（header、section、rail、sheet、`data-theme`、`paper` / `ink`），和 mockup、spec、代码一一对应。**sheet** 是桌面端页面中间那张更亮的纸；**rail** 是右边的滚动进度条和它的点；**fireworks** 是背景里的铅笔烟花。

挂在 tracker 的 *Site › Page skeleton, v1* 下面。

## Trigger · 起因

Owner 2026-11-24 把整页 mockup 定档为 v1，开了 portfolio-engineering 做工程，并定了流程和第一步的范围：

> ok，我要你去看mars- workbench，按那边的标准来做，包括spec相关的那两个skill。计划是先写spike，我approve之后你写spec，我approve之后，你再implement base on spec。然后第一步咱们要做的就是写spike，这次的scope是把整个页面的骨架做出来，heading，五个section的place holder，暂时只需要文字标题，右边的可点击的scroll进度条，然后黑白两色主题，切换主题的button放heading，随便找个空位就好，我还在想位置，还有背景的烟花。这次要做desktop和mobile的两个width。然后关于design language我想你加几条，主体色是黑白红，黑白做背景和文字互为对比，红色是强调色。其他颜色只做点缀，细节可以精致比如那些role，但是主体要简单并且keep visual consistency。去做吧

所以三步，每步一个 PR，每步等 owner approve：

1. **Spike**（本 PR）：这份文档，回答技术上的开放问题；design language 加上 owner 的颜色规则。
2. **Spec**（`write-spec` skill，`write-spec-reviewer` 检查）：把骨架写进 `design/specs/home.md`，每条标 *(pending)*。
3. **Implementation**（`implement-spec` skill，`implement-spec-reviewer` 检查）：按 spec 建，测试先行。

## Owner 的回答（第 2 轮，2026-11-25）

> 首先你说的mockup到底是哪一个？我们现在主页host的那个静态html mockup是上一版，完全废弃，你再update一下，和那个有关的所有东西全部移除掉就好，包括spike，然后你把我们新做的骨架当做source of truth

> 不是我的意思是主页还是那个不变，但和它相关的设计都拿掉，计划是v1做好之前那个还留着

- 这份 spike 说的 mockup 一直是 v1（上面的 artifact 链接），不是现在 `/` 上那个静态页。
- **Q1**：`/` 上的静态页（`public/home.html`）不变，留到 v1 做好；骨架建在 `/v1`。
- **Q2**：和静态页有关的设计都已在本 PR 移除：`design/spike/personal-site.md`、`design/mockup/` 里的四个旧 mockup、tracker 里山水 Helvetica / 缩略图首页 / 首页手机版三条，以及 design language 里的「山」（Mountains motif 和表里的 far mountains）。静态页本身、它的 rewrite 和测试照旧。`design/brainstorm/` 不是站点的一部分，没动，那里还有几处指向已删 spike 的链接。
- **Q3**：v1 是 source of truth。Spec PR 把它存进仓库，标 decided。
- **Q6**：v1 是 source of truth，红照 v1 用。
- 因为 v1 是 source of truth，Q5 和 Q7 的默认都变成「照 v1」，只剩偏离 v1 的地方要问（见下）。

## Owner 的回答（第 3 轮，2026-11-25）

> 先同步

> 把mars workbench那个条目在header上改成product

- **Q4**：先同步。本 PR 已经把 `design/specs/README.md`（Motion、Ordinary use first）、`implement-spec` skill、它的 reviewer 和 context 对齐 `mars-workbench`@`368bed5`，并复制了 `check:spec` 里检查 spec v2 ID 的部分（`scripts/checkSpec.mts`，CI 的 Spec coverage）。`fx-*` 的说法改成「按播放它的组件命名，时长等交给 design language › Motion」，因为站点没有 `fx-*`。
- **Header 的 Product**：header 里 “Mars Workbench” 那个链接改叫 “Product”，两个宽度都是，手机上不再缩成 “Workbench”。这是偏离 v1 的地方，owner 定的。“Product” 比 “Workbench” 短，390px 的 header 松一点（见风险）。Section 本身的标题当时 owner 没提（Q12，第 4 轮已定）。

## Owner 的回答（第 4 轮，2026-11-25）

> 背景的话只有烟花动，对比度这个看着舒服就可以，我说黑白，但其实section的背景是类似信纸那样尤其是在desktop，中间是信纸那种颜色，两边白，workbench这个section照v1不动

- **Q11 的规则措辞**：Motion 那句改成「纸面不动，背景里只有 fireworks 会动」，本 PR 已改。Reduced motion 下画不画静止的烟花，第 10 轮定了（Q11）。
- **Q5**：对比度看着舒服就可以，4.5:1 不是硬线。Design language › Contrast method & bars 已改成「4.5:1 是参照，读着舒服由 owner 判断」。白主题的 muted 用 `#6b665e`：肉眼和 v1 的 `#77726a` 几乎一样，读着更稳，保留；黑主题的红照 v1。
- **黑白是对比，不是页面的颜色**：section 的背景像信纸，尤其桌面，中间是信纸色、两边白。已写进 design language › Colour。这和 v1 对不上，问了 Q13（第 5 轮定：照 v1）。
- **Q12**：Workbench 这个 section 照 v1 不动：标题和 rail 的 hover 标签仍是 “Mars Workbench”，锚点仍是 `#workbench`；只有 header 的链接叫 “Product”。

## Owner 的回答（第 5 轮，2026-11-25）

> 照v1来吧，手机的话就不需要两边的对比

- **Q13**：纸照 v1。桌面两边的 desk 是 `#ece8df`，中间的 sheet 是 `#fbfaf6`；黑主题照 v1 的 `#1a1917` / `#232220`。手机没有两边，整页就是 sheet 色，没有两层的对比，和 v1 一样。Design language › Colour 已改成这样。

## Owner 的回答（第 6 轮，2026-11-25）

> ok就按这个，这也是和我们的mockup里的behavior一样对吧

回的是对滚动行为的说明（技术问题 3）。是的，和 v1 的代码一样，照 v1 定：

- Header 的链接和 rail 的点是同一个跳转，都滚到那个 section 的开头。
- 红色填充是整页的进度：滚动距离 ÷ 整页可滚动的距离，只有滚到页底才满，不是每个 section 各满一次。
- 点的位置是 section 开头 ÷ 整页可滚动的距离；第一个点固定在顶，最后一个固定在底。
- 当前 section 是开头已经过了视口 45% 那条线的最后一个；离页底 2px 以内时是最后一个。
- 所以：跳到一个 section，填充正好停在它的点上；在比一屏高的 section 里往下读，填充从它的点慢慢走向下一个点；最后一个 section 比一屏高时，点亮了但填充要滚到底才连上，不到一屏高时跳过去就停在页底，填充是满的。

Section 后来变高（比如图片晚加载）时要不要重算点的位置，当时还没定（第 7 轮定了）。

## Owner 的回答（第 7 轮，2026-11-25）

> 加上

回的是「要不要比 mockup 多做一步，section 尺寸一变就重算点的位置」。

- **加上**，这是比 v1 多的一步，owner 定的：除了 v1 的窗口缩放、页面加载完、字体加载完，任何一个 section 的尺寸变了也重算点的位置和可滚动的距离（`ResizeObserver` 看每个 section）。

## Owner 的回答（第 8 轮，2026-11-25）

> 不记住，用radix，同时你看看整个骨架里面除了这个theme的toggle还有没有什么交互可以用radix组件？然后你讲讲radix你准备怎么用？其实我不是很熟我只知道这是一个几乎没有style的组件

- **Q9**：不记住，和 v1 一样。点一下只对这一次浏览有效，刷新回到系统主题；不用 `localStorage`。所以也不会闪：第一帧本来就是系统主题，不需要 `<head>` 里的脚本（技术问题 5 已改）。
- **Q10**：主题按钮用 Radix 的 `Toggle`，它是站点的第一个 Radix 依赖。
- **骨架里别的交互**（当时是提议，第 9 轮定了，见 Q14）：rail 的点在 hover 和键盘聚焦时显示 “01 About” 这样的标签，正好是 Radix 的 `Tooltip`。Header 的链接和 rail 的点本身是页内链接，Radix 没有对应的组件，照旧用 `<a>`；手机上的链接条不用 Radix 的 `ScrollArea`（第 9 轮 owner 定了手机上根本不横向滑）。
- **Radix 怎么用**：见技术问题 5 › 组件。

## Owner 的回答（第 9 轮，2026-11-25）

> ok没问题，手机哪里要横向滑？我希望手机端完全不要横向滑

回的是「rail 的标签用 Radix Tooltip」和「红印章先放 header 最右，可以吗」。

- **Q14**：rail 的 hover 标签用 Radix 的 `Tooltip`。这次装两个 Radix 包：`Toggle` 和 `Tooltip`。
- **Q8**：主题按钮是红印章，先放在 header 最右边，链接后面。
- **手机上完全不横向滑**（偏离 v1，owner 定）：v1 在 ≤560px 让 header 的链接条放不下就横向滚，这条不要了。页面任何地方在手机上都不能横向滑。
- 量过了，按现在的 header 放得下，不用改版式（技术问题 7 › Header 放不放得下）。比 360px 更窄的手机第 10 轮定了不管（Q15）。

## Owner 的回答（第 10 轮，2026-11-25）

> 不管320，然后什么叫减少动效？

> 画静止的

第一句回的是「320px 要不要管」，第二句回的是「reduced motion 下背景烟花画静止的，还是什么都不画」。

- **Q15**：只保证 360px 及以上的手机。比 360px 更窄的（比如 320px）不管，header 照 v1 不收紧，那里放不下也不改。Spec 里那条用 `Left open on purpose` 写明（`design/specs/README.md` › Ordinary use first），以后的 session 不再提。
- **Q11**：系统打开「减弱动态效果」（`prefers-reduced-motion: reduce`）时，照 v1 画静止的烟花：数量按 section 的个数铺满整页，每个一次画完、不动，跟着页面一起滚。

## Owner 的回答（第 11 轮，2026-11-25）

> 全换geist，之后做其他的再看

回的是 Q7「字体照 v1，还是全换 Geist」。

- **Q7**：骨架全用 Geist，偏离 v1（owner 定）：header 的品牌、链接和 section 标题用 Geist，rail 的标签用 Geist Mono。v1 里各个 section 自己的字体（Source Serif、Nunito、Cormorant Garamond 等）等做到那些 section 时再定。
- **唯一的例外是印章上的「墨」「纸」**：Geist 没有中文字形。Design language 本来就规定中文用宋体（Type），所以照 v1 用思源宋体（Noto Serif SC，最粗的 900），只带这两个字。做法见技术问题 8 › 印章的字。
- Geist 的 header 也量过：390px 剩 13px，360px 剩 27px，都放得下（技术问题 7）。

## 用了哪些标准

`mars-portfolio` 的 harness 本来就是从 `mars-workbench`@`3f741cc`（2026-11-19）复制改写的（`design/spike/archived/site-scaffold.md`）。这次对照 `mars-workbench` 的 `main`（`368bed5`）重读了：

| `mars-workbench` 的文件 | 这里对应的 | 一样吗 |
| --- | --- | --- |
| `design/spike/README.md`（spike 的生命周期和格式） | `design/spike/README.md` | 一样；这份 spike 按它写 |
| `.claude/skills/write-spec/SKILL.md` | 同名 | 一样 |
| `.claude/skills/implement-spec/SKILL.md` | 同名 | **落后**：那边新增「spec 没说的行为，自己定、做最小的、在报告里列出来给 owner 取舍」，reviewer 最多跑三轮 |
| `design/specs/README.md`（spec v2） | 同名 | **落后**：那边新增 *Motion*（动效写进 item 只写到测试能 hold 住的程度：什么触发、播在哪、结束后布局不变、reduced motion 下不播）和 *Ordinary use first*（少见的情况不写 item，先问 owner） |
| `.claude/agents/implement-spec-reviewer.md`、`.claude/context/implement-spec-context.md` | 同名 | **落后**：Unspecified 不再让 verdict 变 FAIL；context 多读 design-language |
| `.claude/skills/ui-design/SKILL.md` | 同名 | 落后，措辞上的；这次不用这个 skill |
| `scripts/checkSpec.ts`（`check:spec`） | 没有，tracker 里记着「第一个 spec 出现时复制」 | 缺 |

烟花是动效，正好落在那边新加的 *Motion* 规则上，所以 spec 之前要先同步（Q4）。已在本 PR 同步（第 3 轮）。

## Scope · 范围

| 做 | 不做 |
| --- | --- |
| 顶部 header：品牌（红点 + Mars）、五个 section 的链接、主题切换按钮 | About 的 punchline 和 roles、Options 面板（A/B 版式、Contact 动画）|
| 五个全屏 section：About / Mars Workbench / Projects / Work / Contact，各只有一个文字标题 | 各 section 的内容：Workbench 的卡片、Projects 的四格、Work 的三张图、Contact 的信纸表单 |
| 右边的 rail：进度线、每个 section 一个可点的点，hover 显示名字 | Case page、别的 route |
| `paper`（白）和 `ink`（黑）两套主题，可切换 | 主题按钮的最终位置（owner 还在想，这次放 header 空位） |
| 背景的铅笔烟花 | mockup 里别的涂鸦形状（只用了 fireworks） |
| 桌面和手机两个宽度 | 平板单独的版式（900px 以上按桌面，以下按手机） |

## 现在有什么

- **`/` 是一个临时页**：`public/home.html`，上一版设计拷出来的静态文件，`next.config.ts` 的 rewrite 把 `/` 指过去。它不用站点的组件，e2e（`e2e/home.spec.ts`）测的就是它。按 owner 的回答，它留到 v1 做好。
- **主题**：`globals.css` 有 `paper`、`ink` 两套变量和「没有 `data-theme` 就跟系统」的默认；没有切换按钮。
- **字体**：`layout.tsx` 加载 Geist、Geist Mono、Source Serif 4。
- **组件**：还没有，`src/components/` 不存在。交互组件按规则用 Radix Primitives，一个都没装。
- **测试**：Vitest 单元测试（还没有一个），Playwright 四个 project：`desktop` 1280×800、`mobile` 390×844，各有 dark 版（`colorScheme: 'dark'`）。
- **旧的设计文档**：上一版的 spike、四个旧 mockup 和三条 tracker 已在本 PR 移除（Q2）。

## v1 mockup 里的骨架（要照着建的部分）

从 mockup 源码读出来的，spec 会逐条写成 item：

- **版式**：一个纵向滚动，五个 section 各至少一屏高（`100svh`），`scroll-snap-type: y proximity`。桌面（≥900px）内容在居中的 sheet 上，宽 `clamp(560px, 50vw, 860px)`，比底色亮、有细边和很淡的阴影；手机 sheet 透明，铺满全宽。颜色：两边的 desk 是 `#ece8df`，sheet 是 `#fbfaf6`，手机整页是 sheet 色；照 v1（Q13，第 5 轮定）。底色和 sheet 都有一层 SVG 噪点做纸纹。
- **Header**：`position: fixed`，高 56px（≤560px 是 50px），半透明底色加 `backdrop-filter: blur(10px)`，底边一条细线；内容和 sheet 同宽。左边品牌：8px 红点 + “Mars”；右边五个链接，13px，灰色，当前 section 变深色、下面一条 1px 红线。≤560px：品牌只剩红点，“Mars Workbench” 显示成 “Workbench”，链接放不下就横向滚动。**偏离 v1（owner 定）**：这个链接两个宽度都叫 “Product”，没有手机上的短名（第 3 轮）；链接条不横向滚，手机上整页都不横向滑（第 9 轮）。
- **Rail**：固定在右边，垂直居中，高 `min(44vh, 360px)`（≤560px `min(36vh, 280px)`），一条 1px 细线，红色的填充随滚动进度从上往下长。每个 section 一个点，位置按 section 在页面里的位置算（第一个在顶、最后一个在底）；走过的点填红，当前的点大一圈带红环；点是 24px 的点击区，点了平滑滚到那个 section；有 hover 的设备上 hover 或键盘聚焦时左边出一个标签 “01 About”。
- **主题**：mockup 里是 About 角落的红印章（墨 / 纸）切换整页；这次按 owner 的话挪到 header。
- **Fireworks**：一个铺满视口的 `<canvas>`，在 sheet 后面，不接收点击。参数（mockup 的 `TUNE`）：
  - 大小都一样（桌面 9、手机 8）；同屏最多 11 个（手机 7）；大约每 260ms 补一个。
  - 一个的一生约 1.2–1.4s：一个小火星拖着铅笔线往上升 360–520ms，炸开 260ms，停 200ms，淡出 380ms。
  - 颜色每个随机一个色相（饱和度 55%；黄到青的色相亮度压到 38%，其余 47%，在纸上看得见；`ink` 下更亮）；整体透明度桌面 0.65、手机 0.45。
  - 位置是页面坐标，所以跟着页面一起滚。桌面只在 sheet 两边的空白里（离 sheet 28px，避开 header 和 rail）；手机在全宽里，但避开文字块周围 12px。
  - `prefers-reduced-motion: reduce`：不动，整页一次画好静止的烟花，滚动时重画。

## 设计语言：owner 加的规则

本 PR 已经把 owner 的话写进 `design/design-language/README.md` › Colour，原话一并附上：

- 主体色是黑、白、红。
- 黑和白做背景和文字，互为对比。
- 红色是强调色。
- 其他颜色只做点缀。
- 细节可以精致（比如 About 的那些 role），但主体要简单，保持 visual consistency。

和现有文档对不上的地方：

1. **「印章是页面上唯一的红」**（Motifs、主题表 `--seal` 那一行）。v1 里红不只在印章上：品牌红点、当前链接的下划线、rail 的填充和点、焦点框。按 owner 的「红色是强调色」，本 PR 把这两处改成「红是强调色」，不再说唯一。
2. **「backgrounds never move」**（Motion）。烟花就是会动的背景，是 v1 定下来的。Owner 第 4 轮定了措辞，本 PR 已改成「纸面不动，背景里只有 fireworks 会动」；reduced motion 下画静止的烟花（Q11，第 10 轮）。
3. **现有调色板不是 v1 的颜色**。现在的 `paper` / `ink` 是上一版方向的「墨分五色 + 浅绛」，`ink` 主题偏蓝（`#13161b`）；v1 的是暖纸色，黑主题偏暖（`#1a1917`），还多了 desk（底）和 sheet（纸）两层。按 v1 换（Q5、Q13 已定）。
4. **字体**。v1 的 header 用 Inter Tight，rail 标签用 IBM Plex Mono，section 标题用 Helvetica（About 用 Source Serif 4）；站点现在加载的是 Geist / Geist Mono / Source Serif 4。Owner 定了骨架全用 Geist（Q7，第 11 轮）。

### v1 颜色的对比度

按 `design/design-language/README.md` › Contrast method & bars 量的（WCAG 对比度；4.5:1 是参照，owner 第 4 轮定了不是硬线，读着舒服就行）：

| 颜色 | 用在 | 在 sheet 上 | 在 desk 上 |
| --- | --- | --- | --- |
| ink `#1b1a18` / `#ebe9e4` | 标题、当前链接 | 16.7 / 13.1 | 14.2 / 14.5 |
| muted `#77726a` / `#9b968e` | 链接、rail 标签 | 4.6 / 5.4 | **3.9** / 6.0 |
| red `#b3262a` / `#d8443f` | 红点、下划线、rail | 6.2 / **3.6** | 5.3 / **4.0** |

两处低于 4.5:1 的参照：

- 白主题的 muted 在 desk 上 3.9。Header 的底是半透明的 desk，链接就压在上面。改成 `#6b665e` 是 4.66（sheet 上 5.45），肉眼几乎看不出差别；按 owner 第 4 轮的话保留这个改动（Q5）。
- 黑主题的红在 sheet 上 3.6。骨架里红都不是文字（点、线、填充，非文字的线是 3:1），所以这次不碍事；以后红要做文字（Work 的 “View case”、Contact 的 “05 / 05”）时再看读着舒不舒服，`#e8695a`（现在的 `--seal`，5.0）是备选。

## 技术问题

### 1. 放在哪个 route（已定：`/v1`）

骨架建在 `src/app/v1/page.tsx`，`robots: noindex`；`/` 继续是临时页。所有 section 做完的那个 PR 把页面挪到 `/`，并删掉临时页（`public/home.html`、`next.config.ts` 的 rewrite、`.prettierignore` 那一行、`e2e/home.spec.ts`、`HOME_HEADLINE`）。每个 section 的 PR 都能在 `/v1` 上看，preview 和 production 都行。下面的路径按 `/v1` 写；`page.tsx` 指 `src/app/v1/page.tsx`。

### 2. 文件结构

按 AGENTS.md › Page structure：内容在 `src/` 下的文件里，组件按「有没有 import 内容类型」分 `ui/` 和 `site/`，`'use client'` 只放在最小的需要交互的组件上。

```text
src/
├── app/
│   ├── v1/page.tsx                       # 读 sections，渲染骨架（Server Component）
│   └── globals.css                       # 主题变量（Q5）、断点
├── content/
│   └── sections.ts                       # 五个 section：id、标题、header 里的名字（Product）
└── components/
    ├── ui/
    │   ├── theme-toggle/ThemeToggle.tsx  # 'use client'：Radix Toggle，切换 paper / ink
    │   └── fireworks/
    │       ├── Fireworks.tsx             # 'use client'：canvas、rAF 循环
    │       ├── fireworkGeometry.ts       # 纯函数：形状、颜色、能放在哪；单元测试
    │       └── constants.ts              # 大小、上限、时长（mockup 的 TUNE）
    └── site/
        ├── page-shell/
        │   ├── PageChrome.tsx            # 'use client'：一个滚动监听，渲染 header 和 rail
        │   ├── SiteHeader.tsx            # 品牌、五个链接、ThemeToggle
        │   ├── ProgressRail.tsx          # 线、填充、点
        │   ├── scrollPosition.ts         # 纯函数：当前 section、进度、点的位置；单元测试
        │   └── constants.ts
        └── sections/
            └── SectionPlaceholder.tsx    # 一个全屏 section，只有标题（Server Component）
```

- `ThemeToggle` 和 `Fireworks` 不知道有哪些 section，放 `ui/`；header、rail、section 都吃 `sections.ts` 的类型，放 `site/`。
- Header 和 rail 都要知道「现在在哪个 section」，所以由一个 client 组件 `PageChrome` 持有唯一的滚动监听，把结果传给两者；五个 section 留在 Server Component 里，作为 `page.tsx` 的直接子元素。
- 将来每个 section 有了内容，`SectionPlaceholder` 换成各自的组件（`site/about/`、`site/workbench/`……），骨架不用动。

### 3. 怎么知道在哪个 section、进度多少

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 一个 scroll 监听 ✓ | `passive` 的 scroll 事件，`requestAnimationFrame` 节流；每帧算 `scrollY / (scrollHeight − innerHeight)` 当进度，用视口 45% 高度那条线落在哪个 section 定当前（mockup 的算法）；滚到底时当前是最后一个。section 的位置在 resize、页面和字体加载完、任何 section 尺寸变化时重算 | 一套代码管进度和当前两件事；就是 mockup 的行为，只多了 section 尺寸变化时重算；算法是纯函数，好测 | 要在布局变化时重算位置：section 以后有图片、高度会变，所以加 `ResizeObserver` 看每个 section（比 v1 多的一步，第 7 轮 owner 定） |
| B · IntersectionObserver 管当前，scroll 管进度 | 每个 section 一个 observer，`rootMargin` 切出 45% 那条线 | 当前 section 不用自己算位置 | 进度条还是要 scroll 监听，两套机制做一件事；「滚到底算最后一个」要另外处理 |
| C · 纯 CSS | 进度用 scroll-driven animations（`animation-timeline: scroll()`），当前用 `scroll-target-group` / `:target-current` | 零 JS | `:target-current` 只有新版 Chromium 支持，Safari、Firefox 不行，还得写一套 JS 兜底；进度点的「走过 / 当前」样式也做不了 |

**A，照 v1（第 6 轮 owner 定）。** 两个细节：

- 进度条的填充每帧都变，直接通过 ref 改 `transform: scaleY()`，不走 React state；当前 section 只在跨过分界时变，走 state，header 和 rail 一起重渲。
- 点的位置按 section 的 `offsetTop / maxScroll` 算（mockup 的做法），而不是平均分。现在五个 section 都一屏高，两者看起来一样；以后 section 变高，点仍然和填充线对得上。

### 4. 点击跳转和滚动

- Header 的链接和 rail 的点都是 `<a href="#about">` 这样的页内链接，不是 `<button>`：语义就是导航，没有 JS 也能跳，URL 带上 hash，可以直接分享到某个 section。
- 平滑滚动用 CSS：`html { scroll-behavior: smooth }`，只在 `prefers-reduced-motion: no-preference` 时生效；reduced motion 下直接跳。
- 当前那个链接和点带 `aria-current="true"`，测试也靠它断言。
- Rail 的点没有可见文字，`aria-label` 是 “Go to About”；hover 标签只在 `(hover: hover)` 的设备上出现，手机上没有。这个标签用 Radix 的 `Tooltip`（Q14，已定）：它在 hover 和键盘聚焦时打开、触摸时不打开，正好是 v1 的行为，延迟设成 0 就和 v1 一样立刻出现。
- Section 从页面顶开始，标题区上面留出 header 的高度（mockup 是 `padding-top: nav-h + 40px`），所以不用 `scroll-padding-top`。
- `scroll-snap-type: y proximity` 照 mockup 保留：靠近 section 开头时吸过去，滚到中间不强拽。

### 5. 主题：机制、切换按钮

**机制**沿用现有的：主题只在 `<html data-theme>` 上，`paper` 或 `ink`；没有就跟系统（`prefers-color-scheme`）。

**不记住**（Q9，已定）：和 v1 一样，点一下只对这一次浏览有效；刷新或下次来，`<html>` 没有 `data-theme`，按系统主题画。所以第一帧永远是对的，不会闪，不需要内联脚本、`suppressHydrationWarning` 或 `localStorage`。

**按钮**：

- 样子和位置（Q8，已定）：沿用 mockup 的红印章，`paper` 下写「墨」（点了变黑），`ink` 下写「纸」，先放在 header 最右边、链接后面。Owner 说位置还在想，所以 spec 只写「在 header 里」，不写具体在哪，以后挪位置不用改 spec 和测试。手机上放得下，不横向滚（技术问题 7）。
- 字随主题变，但服务端不知道系统主题：印章上的字用 CSS 按 `data-theme` 和系统主题显示（两个字都在 DOM 里，只露一个），不靠 JS，所以第一帧就对、不会 hydration 不一致；`aria-pressed` 和 `aria-label`（“Switch to ink theme”）在 mount 之后由 JS 按 `matchMedia` 设。
- 组件（Q10，已定）：Radix 的 `Toggle`（`@radix-ui/react-toggle`）。
  - Radix Primitives 是什么：只管行为和无障碍的组件，几乎不带样式。它负责键盘操作、`aria-*` 属性、焦点，样子全由我们写。
  - 怎么用：`Toggle` 渲染一个 `<button>`，按下状态（`pressed`，这里「按下 = `ink`」）由组件自己管 `aria-pressed` 和 `data-state="on" | "off"`。我们只传 `pressed` 和 `onPressedChange`（点了就改 `<html data-theme>`），样式用 Tailwind 写在 `className` 上，按状态变的用 `data-[state=on]:` 这样的写法，颜色照旧用主题变量。印章的样子、「墨」「纸」两个字照 mockup。
  - 装：每个组件单独装一个包（`@radix-ui/react-toggle`，以后的 `Tooltip` 是 `@radix-ui/react-tooltip`），在第一个用到它的 implementation PR 里装。

### 6. Fireworks：怎么画、性能、reduced motion

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 一个 canvas 2D ✓ | 把 mockup 的代码搬进 `Fireworks.tsx`：一个 `fixed` 的视口大小的 canvas，`requestAnimationFrame` 每帧清空重画；形状、颜色、放在哪拆成纯函数，随机数可以注入，单元测试用固定的种子 | 和 mockup 一模一样（AGENTS.md › Build it exactly）；DOM 里只有一个元素 | canvas 里的东西测试看不到，只能测纯函数和「canvas 在、没报错」 |
| B · SVG + CSS 动画 | 每个烟花一个 `<svg>`，用 `stroke-dashoffset` 画线、CSS keyframes 淡出 | 合 Motion 里「只动 opacity 和 transform」的规矩；DOM 里看得见 | 每 260ms 增删一个 DOM 节点；铅笔的双线抖动要重新实现，和 mockup 会有出入 |
| C · 预渲染的序列帧或视频 | 设计师出图 | 最省 CPU | 没法每个随机颜色、随机位置；和 mockup 不一样 |

**推荐 A。**

- **性能**：同屏最多 11 个（手机 7），每个几十条线段，每帧重画的成本很低；canvas 按 `devicePixelRatio` 放大，但最多 2 倍；标签页切到后台时浏览器自己停掉 `requestAnimationFrame`。mockup 里动画一直在跑，手机上会持续耗一点电，实现 PR 用 Chrome 的 Performance 面板量一次，写进 PR 描述；不在 spike 里预先优化。
- **Hydration**：位置和颜色是随机的，只在浏览器里、`useEffect` 之后生成；服务端只输出一个空 canvas，不会不一致。
- **主题**：铅笔的颜色按当前主题算（`ink` 下更亮）；`data-theme` 变了（`MutationObserver`）或系统主题变了（`matchMedia`）就重算。
- **手机上避开文字**：mockup 用类名找文字块；建站时改成一个 data 属性（比如 `data-fireworks-avoid`），section 的标题区挂上它，`Fireworks` 读这些元素的位置。这个属性是组件对外的约定，不是只给测试用的。
- **Reduced motion**（Q11，已定）：照 mockup，静止的烟花铺满整页，滚动时重画，让它们跟着页面走。Motion 规则说 reduced motion 关掉动效，静止的画不算动效，所以两者不冲突。
- **颜色规则**：烟花的随机色相正好是 owner 说的「其他颜色只做点缀」。它们在 JS 里按 HSL 算，不是主题变量，也不是 Tailwind 类，所以不碰 `check:themes`；在 design language 里写一句「fireworks 的颜色是唯一不走主题变量的」就够。

### 7. 两个宽度和断点

v1 用了三个断点：900px（以上是 sheet 版式，以下 sheet 铺满）、560px（header 变紧凑、rail 变短）、360px（链接再缩一点）。Tailwind 默认的断点是 640 / 768 / 1024，对不上。

- **推荐**在 `globals.css` 的 `@theme` 里加两个有名字的断点：`--breakpoint-sheet: 56.25rem`（900px）和 `--breakpoint-phone: 35rem`（560px），写 `sheet:` 和 `max-phone:`。360px 那一档只有字号差一点，用 `max-[360px]:` 就地写，不单独起名。

**Header 放不放得下**（第 9 轮，owner 要手机上完全不横向滑）：照 v1 的手机 header 量的（16px 边距、8px 红点、五个链接、32px 印章，各部分之间 16px）。字宽用字体文件实际量，Geist 是 owner 选的字体（Q7），Inter Tight 是 v1 的，留作对照：

| 宽度 | 链接的字号和间距（v1） | 可用宽度 | 五个链接占 | 剩下（Inter Tight / Geist） |
| --- | --- | --- | --- | --- |
| 390px | 12.5px，间距 16px | 286px | 260 / 273px | 26 / 13px |
| 360px | 11.5px，间距 11px | 256px | 218 / 229px | 38 / 27px |
| 320px | 11.5px，间距 11px | 216px | 218 / 229px | **−2 / −13px** |

360px 和以上都放得下，不用改版式，也不用菜单。320px（第一代 iPhone SE 那样的老手机）放不下，owner 定了不管（Q15，第 10 轮）。e2e 里现有的「不横向滚动」断言在 390px 跑；spec 写成「360px 及以上的手机都不横向滑」。
- 测试的两个宽度用现成的 Playwright project：`desktop` 1280×800（sheet 宽 640px，两边各 320px 放烟花）和 `mobile` 390×844（紧凑 header、sheet 铺满）。900px 到 1280px 之间、560px 到 900px 之间只要「不坏」，不单独测。

### 8. 调色板和字体怎么对上 v1

**调色板**（Q5）：

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 换成 v1 的颜色 ✓ | 变量按角色重排成 v1 的：`--desk`（底）、`--sheet`（纸）、`--ink`（字和黑）、`--ink-muted`（次要的字）、`--hairline`、`--red`（强调）；值用 mockup 的，muted 用 `#6b665e`；`--indigo`、`--umber` 留着给以后的图做点缀；`--ink-strong`、`--ink-light`、`--ink-faint` 等 section 真用到再加 | 和 v1 一模一样；名字直接对应 owner 的「黑白做背景和文字、红色强调」 | 改名要改 `globals.css` 三处、主题表、`icon.svg` 的红（Sync points）；主题表整张重量 |
| B · 保留现在的颜色 | v1 的 desk 用 `--paper-2`、sheet 用 `--paper`，红用 `--seal` | 不动现有变量 | 看起来和 v1 不一样：白主题的 sheet 更灰，黑主题偏蓝；违反 Build it exactly |

**按 v1，A。**Muted 用 `#6b665e`，owner 第 4 轮定的（Q5）。desk 和 sheet 照 v1（Q13）。主题名照旧叫 `paper` / `ink`（mockup 里是 `light` / `dark`，只是草稿里的名字）。

**字体**（Q7）：

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| A · 照 v1 | header 用 Inter Tight，rail 标签用 IBM Plex Mono，section 标题用 Helvetica | 和 mockup 一样 | 再加载两个字体，页面上同时有五六种字体；mockup 自己也记着「标题风格还没统一」 |
| **B** · 用站点已有的 ✓（owner 选的） | header 和 section 标题用 Geist（和 Inter Tight 同类的无衬线），rail 标签用 Geist Mono；Source Serif 4 留给以后 About 的 punchline | 一家字体，正合 owner 的「主体简单、keep visual consistency」；不多加载 | 和 mockup 有细微出入，要 owner 点头才算偏离 mockup |

**Owner 选了 B**（Q7，第 11 轮），所以这是偏离 v1 的地方。Source Serif 4 还在 `layout.tsx` 里加载，骨架用不到；实现 PR 不动它，等以后的 section 定字体时再看。

**印章的字**：Geist 没有中文。v1 从 Google Fonts 只请求 Noto Serif SC 900 的「墨」「纸」两个字。建站时同样只带这两个字，做成站点自己的字体文件（几 KB），用 `next/font/local` 加载，不在运行时请求 Google；具体 API 实现时按装着的 Next.js 文档核对。另一种是把两个字转成 SVG 路径画在印章里（AGENTS.md 允许品牌标记自己画 SVG），完全不加载字体，但以后换字就要重新转。推荐前者。

**标题**：五个 section 的标题这次用同一个样式（mockup 里 Workbench、Projects、Work 共用的那个：粗体，`clamp(28px, 5vw, 48px)`），文字就是 section 名。页面的 `<h1>` 是视觉上隐藏的 “Mars Chu”，五个标题是 `<h2>`。以后 About 有了 punchline，`<h1>` 换成它。

### 9. 测试

按 `test/README.md`：纯函数是单元测试，页面行为是 e2e，四个 project（两个宽度 × 两个主题）都跑。

- **单元**：`scrollPosition.ts`（给定 section 位置和滚动位置，当前是哪个、进度多少、点在哪；滚到底是最后一个）；`fireworkGeometry.ts`（固定种子下：颜色的亮度规则、位置落在允许的区域里、不和文字块重叠、不和别的烟花挤在一起、一生的各阶段时长）。
- **e2e**（新开 `e2e/v1.spec.ts`，`e2e/home.spec.ts` 留给临时页）：header 有五个链接，顺序对，第二个在两个宽度都是 “Product”；五个 section 各有标题；点 rail 的点和 header 的链接，那个 section 滚进视口，链接和点带 `aria-current`；往下滚，当前跟着变，填充变长；点主题按钮，`<html data-theme>` 变，按钮的 `aria-pressed` 跟着变，刷新后回到系统主题（Q9）；canvas 在、`aria-hidden`；reduced motion 下（`page.emulateMedia({reducedMotion: 'reduce'})`）没有平滑滚动；不横向滚动、控制台没有报错（现有的通用断言）。
- **浏览器检查**：新的版式和断点，按 AGENTS.md › UI Workflow 交给 `ui-verifier` 跑一次。

## 实施计划

1. **本 PR**：这份 spike；`design/design-language/README.md` 加 Colour 一节（owner 的原话，包括「黑白是对比」和信纸），改掉「唯一的红」，Motion 改成「只有 fireworks 会动」，对比度的线改成参照；tracker 加一条；同步 harness 和 `check:spec`（Q4）。不动页面代码。
2. **Spec PR**（owner approve 本 spike 之后，从 `main` 开）：
   - 把 v1 mockup 放进仓库（Q3），标上 decided。
   - 用 `write-spec` 写 `design/specs/home.md`：States（第一次来跟系统主题 / 选过主题；reduced motion）、Header、Rail、Sections、Fireworks、Actions（点链接、点点、切主题）、Rules、Journeys（桌面一条，手机一条只写不同的步骤）；全部 *(pending)*。`write-spec-reviewer` 检查。
3. **Implementation PR**（owner approve spec 之后）：`implement-spec`，测试先行；同步改 `globals.css` 和主题表、README Current State；`ui-verifier` 跑一次浏览器检查；删掉 mockup 里已经建好的部分（mockup 还有各 section 的内容没建，所以文件留着）。

## 待拍板 · Open questions

1. ~~骨架放在哪~~：已定，`/v1`；`/` 的静态页留到 v1 做好。
2. ~~旧的设计文档~~：已定，本 PR 已移除。
3. ~~v1 mockup 进仓库~~：已定，v1 是 source of truth，spec PR 存进仓库并标 decided。
4. ~~同步 harness~~：已定，先同步，本 PR 已做。
5. ~~对比度~~：已定，看着舒服就行，4.5:1 不是硬线；muted 用 `#6b665e`。
6. ~~红用在哪~~：已定，照 v1。
7. ~~字体~~：已定，骨架全用 Geist 和 Geist Mono；印章的「墨」「纸」用只带这两个字的思源宋体。其他 section 的字体到时候再定。
8. ~~主题按钮~~：已定，红印章，先放 header 最右边；spec 只写「在 header 里」。
9. ~~记住主题~~：已定，不记住，和 v1 一样。
10. ~~Radix~~：已定，主题按钮用 Radix 的 `Toggle`。
11. ~~Reduced motion~~：已定，照 v1 画静止的烟花。
12. ~~Workbench 这个 section 的名字~~：已定，照 v1：标题、rail 标签仍是 “Mars Workbench”，锚点 `#workbench`；只有 header 链接叫 “Product”。
13. ~~纸的颜色~~：已定，照 v1：桌面两边 `#ece8df`、中间 `#fbfaf6`；手机整页是 sheet 色，不要两边的对比。
14. ~~Rail 的 hover 标签~~：已定，用 Radix 的 `Tooltip`。
15. ~~比 360px 更窄的手机~~：已定，不管；只保证 360px 及以上。

## 风险

- **滚动和烟花都是常驻的 JS**：一个 scroll 监听加一个一直跑的 `requestAnimationFrame`。前者是 passive 加 rAF 节流；后者在手机上持续耗电，实现时量一次再说。
- **iOS Safari 的视口**：地址栏收起展开会改视口高度。section 用 `100svh`（mockup 就是）不会跳；rail 的点位置在 resize 时重算，会有一帧的轻微移动。CI 只在 Chromium 里模拟手机宽度，真机上的效果需要 owner 截图确认。
- **`backdrop-filter`** 在低端 Android 上可能卡。Header 只有 56px 高，影响小；不行就退成不透明的底。
- **Header 在手机上没什么余量**：用 Geist，390px 只剩 13px（技术问题 7）。以后 header 里再加东西、链接改名变长、或者换更宽的字体，都要重新量；印章换位置时也要重量。
