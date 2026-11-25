# Spike: 整页骨架——header、五个 section 占位、滚动进度条、两套主题、背景烟花

**Status: awaiting owner review** · 第 2 轮 2026-11-25（Q1–Q3、Q6 已答）· 设计：v1 mockup（2026-11-24 定档），私有页面 [claude.ai/artifact/6ouKG7ihv9DbuUNAdVK95b](https://claude.ai/artifact/6ouKG7ihv9DbuUNAdVK95b)，还不在仓库里（Q3）

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

烟花是动效，正好落在那边新加的 *Motion* 规则上，所以 spec 之前要先同步（Q4）。

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
- **主题**：`globals.css` 有 `paper`、`ink` 两套变量和「没有 `data-theme` 就跟系统」的默认；没有切换按钮，没有 `localStorage`。
- **字体**：`layout.tsx` 加载 Geist、Geist Mono、Source Serif 4。
- **组件**：还没有，`src/components/` 不存在。交互组件按规则用 Radix Primitives，一个都没装。
- **测试**：Vitest 单元测试（还没有一个），Playwright 四个 project：`desktop` 1280×800、`mobile` 390×844，各有 dark 版（`colorScheme: 'dark'`）。
- **旧的设计文档**：上一版的 spike、四个旧 mockup 和三条 tracker 已在本 PR 移除（Q2）。

## v1 mockup 里的骨架（要照着建的部分）

从 mockup 源码读出来的，spec 会逐条写成 item：

- **版式**：一个纵向滚动，五个 section 各至少一屏高（`100svh`），`scroll-snap-type: y proximity`。桌面（≥900px）内容在居中的 sheet 上，宽 `clamp(560px, 50vw, 860px)`，比底色亮、有细边和很淡的阴影；手机 sheet 透明，铺满全宽。底色和 sheet 都有一层 SVG 噪点做纸纹。
- **Header**：`position: fixed`，高 56px（≤560px 是 50px），半透明底色加 `backdrop-filter: blur(10px)`，底边一条细线；内容和 sheet 同宽。左边品牌：8px 红点 + “Mars”；右边五个链接，13px，灰色，当前 section 变深色、下面一条 1px 红线。≤560px：品牌只剩红点，“Mars Workbench” 显示成 “Workbench”，链接放不下就横向滚动。
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
2. **「backgrounds never move」**（Motion）。烟花就是会动的背景，是 v1 定下来的。建议改成「纸面不动；背景里只有 fireworks 会动，reduced motion 下静止」（Q11）。这句是规则的改动，等 owner 点头再改。
3. **现有调色板不是 v1 的颜色**。现在的 `paper` / `ink` 是上一版方向的「墨分五色 + 浅绛」，`ink` 主题偏蓝（`#13161b`）；v1 的是暖纸色，黑主题偏暖（`#1a1917`），还多了 desk（底）和 sheet（纸）两层。怎么对上是 Q5。
4. **字体**。v1 的 header 用 Inter Tight，rail 标签用 IBM Plex Mono，section 标题用 Helvetica（About 用 Source Serif 4）；站点现在加载的是 Geist / Geist Mono / Source Serif 4。Q7。

### v1 颜色的对比度

按 `design/design-language/README.md` › Contrast method & bars 量的（WCAG 对比度；文字的线是 4.5:1）：

| 颜色 | 用在 | 在 sheet 上 | 在 desk 上 |
| --- | --- | --- | --- |
| ink `#1b1a18` / `#ebe9e4` | 标题、当前链接 | 16.7 / 13.1 | 14.2 / 14.5 |
| muted `#77726a` / `#9b968e` | 链接、rail 标签 | 4.6 / 5.4 | **3.9** / 6.0 |
| red `#b3262a` / `#d8443f` | 红点、下划线、rail | 6.2 / **3.6** | 5.3 / **4.0** |

两处不过线：

- 白主题的 muted 在 desk 上 3.9。Header 的底是半透明的 desk，链接就压在上面。改成 `#6b665e` 是 4.66（sheet 上 5.45），肉眼几乎看不出差别。
- 黑主题的红在 sheet 上 3.6。骨架里红都不是文字（点、线、填充，非文字的线是 3:1），所以这次不碍事；以后红要做文字（Work 的 “View case”、Contact 的 “05 / 05”）时用 `#e8695a`（现在的 `--seal`，5.0）。

## 技术问题

### 1. 放在哪个 route（已定：`/v1`）

骨架建在 `src/app/v1/page.tsx`，`robots: noindex`；`/` 继续是临时页。所有 section 做完的那个 PR 把页面挪到 `/`，并删掉临时页（`public/home.html`、`next.config.ts` 的 rewrite、`.prettierignore` 那一行、`e2e/home.spec.ts`、`HOME_HEADLINE`）。每个 section 的 PR 都能在 `/v1` 上看，preview 和 production 都行。下面的路径按 `/v1` 写；`page.tsx` 指 `src/app/v1/page.tsx`。

### 2. 文件结构

按 AGENTS.md › Page structure：内容在 `src/` 下的文件里，组件按「有没有 import 内容类型」分 `ui/` 和 `site/`，`'use client'` 只放在最小的需要交互的组件上。

```text
src/
├── app/
│   ├── v1/page.tsx                       # 读 sections，渲染骨架（Server Component）
│   ├── layout.tsx                        # 加 no-flash 脚本、suppressHydrationWarning
│   ├── themeScript.ts                    # 那段内联脚本，一个字符串常量
│   └── globals.css                       # 主题变量（Q5）、断点
├── content/
│   └── sections.ts                       # 五个 section：id、label、手机上的 shortLabel
└── components/
    ├── ui/
    │   ├── theme-toggle/ThemeToggle.tsx  # 'use client'：切换 paper / ink
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
| **A** · 一个 scroll 监听 ✓ | `passive` 的 scroll 事件，`requestAnimationFrame` 节流；每帧算 `scrollY / (scrollHeight − innerHeight)` 当进度，用视口 45% 高度那条线落在哪个 section 定当前（mockup 的算法）；滚到底时当前是最后一个。section 的位置在 resize、字体加载完时重算 | 一套代码管进度和当前两件事；就是 mockup 的行为，一模一样；算法是纯函数，好测 | 要记得在布局变化时重算位置（section 以后有图片、高度会变，加一个 `ResizeObserver` 看 `main`） |
| B · IntersectionObserver 管当前，scroll 管进度 | 每个 section 一个 observer，`rootMargin` 切出 45% 那条线 | 当前 section 不用自己算位置 | 进度条还是要 scroll 监听，两套机制做一件事；「滚到底算最后一个」要另外处理 |
| C · 纯 CSS | 进度用 scroll-driven animations（`animation-timeline: scroll()`），当前用 `scroll-target-group` / `:target-current` | 零 JS | `:target-current` 只有新版 Chromium 支持，Safari、Firefox 不行，还得写一套 JS 兜底；进度点的「走过 / 当前」样式也做不了 |

**推荐 A。** 两个细节：

- 进度条的填充每帧都变，直接通过 ref 改 `transform: scaleY()`，不走 React state；当前 section 只在跨过分界时变，走 state，header 和 rail 一起重渲。
- 点的位置按 section 的 `offsetTop / maxScroll` 算（mockup 的做法），而不是平均分。现在五个 section 都一屏高，两者看起来一样；以后 section 变高，点仍然和填充线对得上。

### 4. 点击跳转和滚动

- Header 的链接和 rail 的点都是 `<a href="#about">` 这样的页内链接，不是 `<button>`：语义就是导航，没有 JS 也能跳，URL 带上 hash，可以直接分享到某个 section。
- 平滑滚动用 CSS：`html { scroll-behavior: smooth }`，只在 `prefers-reduced-motion: no-preference` 时生效；reduced motion 下直接跳。
- 当前那个链接和点带 `aria-current="true"`，测试也靠它断言。
- Rail 的点没有可见文字，`aria-label` 是 “Go to About”；hover 标签只在 `(hover: hover)` 的设备上出现，手机上没有。
- Section 从页面顶开始，标题区上面留出 header 的高度（mockup 是 `padding-top: nav-h + 40px`），所以不用 `scroll-padding-top`。
- `scroll-snap-type: y proximity` 照 mockup 保留：靠近 section 开头时吸过去，滚到中间不强拽。

### 5. 主题：机制、不闪、切换按钮

**机制**沿用现有的：主题只在 `<html data-theme>` 上，`paper` 或 `ink`；没有就跟系统（`prefers-color-scheme`）。

**不闪**：静态页在服务端不知道读者选过什么，第一帧会按系统画，读者选过另一套就会闪一下。三种办法：

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 手写一段内联脚本 ✓ | `layout.tsx` 的 `<head>` 里一段几行的同步脚本：读 `localStorage`，是 `paper` 或 `ink` 就写到 `<html data-theme>`，在第一帧之前；`<html>` 加 `suppressHydrationWarning`（服务端渲染的 `<html>` 没有这个属性） | 不加依赖；页面保持全静态；行为全在眼前 | 自己写 try/catch（隐私模式下 `localStorage` 会抛错）；实现前要读一遍 Next 16 关于 root layout 里 `<script>` 的文档（AGENTS.md › Session start） |
| B · `next-themes` | 库做同一件事，外加系统主题变化的监听 | 少写几行 | 多一个依赖；它默认的属性和值要配成 `data-theme`、`paper` / `ink` |
| C · cookie + 服务端读 | 服务端按 cookie 输出 `data-theme` | 一点都不闪 | 页面变成动态渲染，违反「every page static」；Vercel 每次请求都要跑函数 |

**推荐 A。**

**记不记住**（Q9）：mockup 里点一下只对这一次浏览有效，刷新回到系统主题。站点通常会记住（`localStorage`），下次来还是读者选的那套；代价是读者点过一次以后，系统切换深浅色不再影响这个站。

**按钮**：

- 样子和位置（Q8）：沿用 mockup 的红印章，`paper` 下写「墨」（点了变黑），`ink` 下写「纸」，放在 header 最右边、链接后面。Owner 说位置还在想，所以 spec 只写「在 header 里」，不写具体在哪，以后挪位置不用改 spec 和测试。手机上 header 很挤：390px 宽，红点 + 五个链接 + 32px 的印章，链接可能要横向滚。
- 字随主题变，但服务端不知道主题：印章上的字用 CSS 按 `data-theme` 和系统主题显示（两个字都在 DOM 里，只露一个），不靠 JS，所以第一帧就对、不会 hydration 不一致；`aria-label`（“Switch to ink theme”）在 mount 之后由 JS 设。
- 组件（Q10）：AGENTS.md › Styling 说交互组件用 Radix Primitives，不手写 toggle，tracker 里也记着「第一个 Radix 组件跟着主题按钮装」。Radix 的 `Toggle`（`@radix-ui/react-toggle`）给一个带 `aria-pressed` 的按钮；这里的语义是「按下 = `ink`」。另一种读法是这只是个普通按钮，标签说点了会怎样（mockup 就是这样），不算 toggle 组件，不用装 Radix。规则是 owner 的，所以问一下。

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
- **Reduced motion**（Q11）：mockup 的做法是静止的烟花铺满整页，滚动时重画。现有 Motion 规则说 reduced motion 关掉动效，静止的画不算动效，所以两者不冲突；另一种选择是 reduced motion 下干脆不画。
- **颜色规则**：烟花的随机色相正好是 owner 说的「其他颜色只做点缀」。它们在 JS 里按 HSL 算，不是主题变量，也不是 Tailwind 类，所以不碰 `check:themes`；在 design language 里写一句「fireworks 的颜色是唯一不走主题变量的」就够。

### 7. 两个宽度和断点

v1 用了三个断点：900px（以上是 sheet 版式，以下 sheet 铺满）、560px（header 变紧凑、rail 变短）、360px（链接再缩一点）。Tailwind 默认的断点是 640 / 768 / 1024，对不上。

- **推荐**在 `globals.css` 的 `@theme` 里加两个有名字的断点：`--breakpoint-sheet: 56.25rem`（900px）和 `--breakpoint-phone: 35rem`（560px），写 `sheet:` 和 `max-phone:`。360px 那一档只有字号差一点，用 `max-[360px]:` 就地写，不单独起名。
- 测试的两个宽度用现成的 Playwright project：`desktop` 1280×800（sheet 宽 640px，两边各 320px 放烟花）和 `mobile` 390×844（紧凑 header、sheet 铺满）。900px 到 1280px 之间、560px 到 900px 之间只要「不坏」，不单独测。

### 8. 调色板和字体怎么对上 v1

**调色板**（Q5）：

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 换成 v1 的颜色 ✓ | 变量按角色重排成 v1 的：`--desk`（底）、`--sheet`（纸）、`--ink`（字和黑）、`--ink-muted`（次要的字）、`--hairline`、`--red`（强调）；值用 mockup 的，muted 加深到 `#6b665e` 过线；`--indigo`、`--umber` 留着给以后的图做点缀；`--ink-strong`、`--ink-light`、`--ink-faint` 等 section 真用到再加 | 和 v1 一模一样；名字直接对应 owner 的「黑白做背景和文字、红色强调」 | 改名要改 `globals.css` 三处、主题表、`icon.svg` 的红（Sync points）；主题表整张重量 |
| B · 保留现在的颜色 | v1 的 desk 用 `--paper-2`、sheet 用 `--paper`，红用 `--seal` | 不动现有变量 | 看起来和 v1 不一样：白主题的 sheet 更灰，黑主题偏蓝；违反 Build it exactly |

**按 v1，A。**剩下要问的只有 muted 加深到 `#6b665e`（为了过对比度线，偏离 v1，Q5）。主题名照旧叫 `paper` / `ink`（mockup 里是 `light` / `dark`，只是草稿里的名字）。

**字体**（Q7）：

| | 做法 | 好处 | 代价 |
| --- | --- | --- | --- |
| **A** · 照 v1 | header 用 Inter Tight，rail 标签用 IBM Plex Mono，section 标题用 Helvetica | 和 mockup 一样 | 再加载两个字体，页面上同时有五六种字体；mockup 自己也记着「标题风格还没统一」 |
| **B** · 用站点已有的 ✓ | header 和 section 标题用 Geist（和 Inter Tight 同类的无衬线），rail 标签用 Geist Mono；Source Serif 4 留给以后 About 的 punchline | 一家字体，正合 owner 的「主体简单、keep visual consistency」；不多加载 | 和 mockup 有细微出入，要 owner 点头才算偏离 mockup |

v1 是 source of truth，所以**默认 A**。B 和 owner 的「keep visual consistency」更合，但它偏离 v1，只有 owner 说要才换（Q7）。

**标题**：五个 section 的标题这次用同一个样式（mockup 里 Workbench、Projects、Work 共用的那个：粗体，`clamp(28px, 5vw, 48px)`），文字就是 section 名。页面的 `<h1>` 是视觉上隐藏的 “Mars Chu”，五个标题是 `<h2>`。以后 About 有了 punchline，`<h1>` 换成它。

### 9. 测试

按 `test/README.md`：纯函数是单元测试，页面行为是 e2e，四个 project（两个宽度 × 两个主题）都跑。

- **单元**：`scrollPosition.ts`（给定 section 位置和滚动位置，当前是哪个、进度多少、点在哪；滚到底是最后一个）；`fireworkGeometry.ts`（固定种子下：颜色的亮度规则、位置落在允许的区域里、不和文字块重叠、不和别的烟花挤在一起、一生的各阶段时长）。
- **e2e**（新开 `e2e/v1.spec.ts`，`e2e/home.spec.ts` 留给临时页）：header 有五个链接，顺序对，手机上是 “Workbench”；五个 section 各有标题；点 rail 的点和 header 的链接，那个 section 滚进视口，链接和点带 `aria-current`；往下滚，当前跟着变，填充变长；点主题按钮，`<html data-theme>` 变，刷新后还在（Q9 选记住的话）；读者选过 `ink` 时第一帧就是 `ink`（`addInitScript` 先写 `localStorage`，在 `DOMContentLoaded` 时读 `data-theme`）；canvas 在、`aria-hidden`；reduced motion 下（`page.emulateMedia({reducedMotion: 'reduce'})`）没有平滑滚动；不横向滚动、控制台没有报错（现有的通用断言）。
- **浏览器检查**：新的版式和断点，按 AGENTS.md › UI Workflow 交给 `ui-verifier` 跑一次。

## 实施计划

1. **本 PR**：这份 spike；`design/design-language/README.md` 加 Colour 一节（owner 的原话），改掉「唯一的红」；tracker 加一条。不动代码。
2. **Spec PR**（owner approve 本 spike 之后，从 `main` 开）：
   - 先同步 harness（Q4）：`design/specs/README.md`、`implement-spec` skill、它的 reviewer 和 context 对齐 `mars-workbench` 的 `main`，复制 `check:spec` 里检查 spec v2 ID 的那部分。
   - 把 v1 mockup 放进仓库（Q3），标上 decided。
   - 用 `write-spec` 写 `design/specs/home.md`：States（第一次来跟系统主题 / 选过主题；reduced motion）、Header、Rail、Sections、Fireworks、Actions（点链接、点点、切主题）、Rules、Journeys（桌面一条，手机一条只写不同的步骤）；全部 *(pending)*。`write-spec-reviewer` 检查。
3. **Implementation PR**（owner approve spec 之后）：`implement-spec`，测试先行；同步改 `globals.css` 和主题表、design language 的 Motion（Q11）、README Current State；`ui-verifier` 跑一次浏览器检查；删掉 mockup 里已经建好的部分（mockup 还有各 section 的内容没建，所以文件留着）。

## 待拍板 · Open questions

1. ~~骨架放在哪~~：已定，`/v1`；`/` 的静态页留到 v1 做好。
2. ~~旧的设计文档~~：已定，本 PR 已移除。
3. ~~v1 mockup 进仓库~~：已定，v1 是 source of truth，spec PR 存进仓库并标 decided。
4. **同步 harness**：spec PR 先把 `design/specs/README.md`、`implement-spec` skill、它的 reviewer 和 context 对齐 `mars-workbench` 的 `main`，并复制 `check:spec` 的 spec v2 部分？
5. **对比度**：颜色照 v1。只有白主题的 muted 灰在底色上 3.9，不过 4.5 的线：加深到 `#6b665e`（4.66，肉眼几乎看不出），还是照 v1 原样？
6. ~~红用在哪~~：已定，照 v1。
7. **字体**：默认照 v1（header Inter Tight、rail 标签 IBM Plex Mono、section 标题 Helvetica）。要不要改成站点已有的 Geist + Geist Mono，换一家字体的统一？
8. **主题按钮**：先用红印章（`paper` 下「墨」、`ink` 下「纸」），放在 header 最右边，spec 只写「在 header 里」？
9. **记住主题**：A 记住（`localStorage`，下次来还是选过的那套），还是 B 像 mockup 一样只对这一次有效？
10. **Radix**：主题按钮用 Radix 的 `Toggle`（按规则，也是第一个 Radix 依赖），还是当作普通按钮、不装 Radix？
11. **Reduced motion 和 Motion 规则**：reduced motion 下照 mockup 画静止的烟花（推荐），还是不画？Motion 里「backgrounds never move」改成「纸面不动，背景里只有 fireworks 会动」？

## 风险

- **滚动和烟花都是常驻的 JS**：一个 scroll 监听加一个一直跑的 `requestAnimationFrame`。前者是 passive 加 rAF 节流；后者在手机上持续耗电，实现时量一次再说。
- **iOS Safari 的视口**：地址栏收起展开会改视口高度。section 用 `100svh`（mockup 就是）不会跳；rail 的点位置在 resize 时重算，会有一帧的轻微移动。CI 只在 Chromium 里模拟手机宽度，真机上的效果需要 owner 截图确认。
- **`backdrop-filter`** 在低端 Android 上可能卡。Header 只有 56px 高，影响小；不行就退成不透明的底。
- **Header 在 390px 上很挤**：五个链接加印章，链接可能要横向滚动（mockup 已经允许）。印章以后换位置时这个问题会变。
