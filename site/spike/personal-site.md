# Spike: 个人网站——portfolio 的入口

**Status: awaiting owner review** · 2026-11-11 · Mockup：[claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5](https://claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5)（私有页面，源文件 `site/mockup/mockup-personal-site.html`）· 起因和 owner 的原话：`sessions/2026-11-06-media-lab-fit.md` Round 7

> 语言约定：叙述用中文；站点自己的文案、产品名词、论文和代码标识保留英文（leaf / plate / scene、Built / Seen / Open、`reviews/`）。

## Trigger · 起因

Owner 要一个个人网站作为 portfolio 的入口。视觉上借 MIT Media Lab 网站的 typography 和用色（不借布局），淡雅，融进山水画的禅意。内容上要回答三件事：个人网站兼 portfolio 放什么、每一块有什么用、怎么同时呈现 engineer、researcher 和 artist 三面。基调是 `mars-workbench` PR #115 里的 design principles。这一轮只做产品和设计，不考虑代码。

交付：这份 spike，加一个 mockup，里面是三张完整的首页（A 手卷、B 册页、C 远山）和一页总览。

## 范围

- 做：站上放什么，怎么组织，长什么样，三个首页方案，作品页的结构。
- 不做：技术栈、部署、域名、CMS；作品页和其他内页的完整 mockup；正式文案。

## 谁来读，给多少时间

| 读者 | 怎么来 | 给的时间和他们要的东西 | 来源 |
| --- | --- | --- | --- |
| 导师、招生 | 套瓷邮件里的链接；申请表的 portfolio URL；搜名字 | “I'll spend 3 to 5 minutes per app”；感兴趣的话 “will immediately search for your name on the web” | [Philip Guo](https://pg.ucsd.edu/PhD-application-tips.htm)（一位教授的说法，不是 Media Lab 的数据） |
| 同上 | 同上 | 官方：“Recommended formats: URL or PDF”；“curated to highlight relevant works”；“highlight who you are, and what projects are relevant to the group(s)”；“provide context around your work” | [MAS portfolio requirements](https://www.media.mit.edu/posts/academics-portfolio-requirements/) |
| Fluid Interfaces | 同上 | 每个项目写清：“what your role was … (concept, implementation, evaluation, etc)”、“what was interesting or innovative”、“some documentation of the results”；也欢迎 “non-research interests and accomplishments” | [Fluid Interfaces applicant information](https://www.media.mit.edu/groups/fluid-interfaces/applicant-information/)（页面还写着 2025，可能过时） |
| Cyborg Psychology 的 PI | 同上 | “being concise is more effective than providing too much detail”；“if you want to come here just to create something flashy for social media, you'll need to aim higher”；被拒的常见原因是 “only vaguely related … to the group's vision” | [Pat Pataranutaporn](https://www.media.mit.edu/posts/my-media-lab-experience/) |
| Engineering hiring manager | 简历上的链接 | “Very rarely will hiring managers take the time to read your entire portfolio word for word”；一份非正式调查里多数 hiring manager 会看个人网站，做得差反而减分 | [NN/g](https://www.nngroup.com/articles/ux-design-portfolios/) · [dev.to 转述的调查](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge) |
| 同行 | 文章、GitHub | 怎么做出来的，过程 | [Matuschak：work with the garage door up](https://notes.andymatuschak.org/Work_with_the_garage_door_up) |

Media Lab 里把网站本身当评估对象的组是 Tangible Media：“We require an interactive, online internet portfolio”；“we want to evaluate the aesthetics and usability of their website design”（[来源](https://tangible.media.mit.edu/contact-admission)）。不是目标组，但说明站点的做工在这里会被看。

## 调研

### 1. Media Lab 的字和颜色

- **字**：Neue Haas Grotesk，Helvetica 的数字复刻，通过 Adobe Fonts 提供，fallback 是 Helvetica 和 Arial（[Brand Portal](https://www.media.mit.edu/posts/MLBrandPortal/)，只看到搜索摘要；[MIT brand](https://brand.mit.edu/typography)；[MIT Admissions](https://mitadmissions.org/blogs/entry/fonts-of-mit/)：“aren't in Helvetica, but Neue Haas Grotesk, which has slightly tighter spacing by default”）。
- **识别系统**：Pentagram 2014（Michael Bierut、Aron Fay）：“Helvetica, so central to MIT's communications when the Media Lab was new, has been reinstated to support the overall system.”（[Pentagram](https://www.pentagram.com/work/mit-media-lab)）
- **颜色**：“The MIT Media Lab's primary colors are black, white, and grey. Most designs should stick to this palette.” 辅助色 “may be used one color at a time with black and white.”（Brand Portal，搜索摘要）
- **没核实的**：media.mit.edu 当天对抓取返回 503，这个 session 的网络也连不上它，所以网站 CSS 里的 `font-family`、字号、hex 都没读到。Owner 在浏览器里看一眼就能补上。

**借什么**：一种 grotesk 做主声；黑白灰为主；一次只用一个颜色。Mockup 里的 grotesk 是 Geist：同一路的瑞士系无衬线，也是 Mars Workbench 自己的字。Neue Haas Grotesk 要 Adobe Fonts 授权（Q2）。

### 2. 山水画的概念，对应到版面

| 概念 | 出处 | 在页面上 |
| --- | --- | --- |
| 留白 · 计白当黑 | 包世臣《艺舟双楫》引邓石如：“字画疏处可以走马，密处不使透风，常计白以当黑，奇趣乃出。”（[wikisource](https://zh.wikisource.org/zh-hans/藝舟雙楫/05)） | 空白是版面的一部分。一屏一个主体，山水只占一角或一条，不垫在正文下面 |
| 三远 | 郭熙《林泉高致》：“自山下而仰山顛，謂之高遠；自山前而窺山後，謂之深遠；自近山而望遠山，謂之平遠。高遠之色清明，深遠之色重晦；平遠之色有明有晦。”（[wikisource](https://zh.wikisource.org/wiki/林泉高致)） | A 的开篇是高远，段间是平远；C 整页从远到近，墨色跟着变深 |
| 墨分五色 | 张彦远《历代名画记》卷二：“運墨而五色具，謂之得意。”（[wikisource](https://zh.wikisource.org/wiki/歷代名畫記/卷第二)）焦浓重淡清是后来的习惯说法，各家不同 | 一种墨的五个深浅做全部灰阶；正文只用前三档 |
| 手卷 | The Met：“unrolling the scroll from right to left … shoulder-width section by section”；“Looking at a handscroll is an intimate experience”（[The Met](https://www.metmuseum.org/essays/chinese-handscrolls)，经转载读到） | A：一段一段往下展开，一次一个 scene |
| 册页 · 立轴 | 册页是装订成册的小幅；立轴挂起来看（[The Met](https://www.metmuseum.org/essays/painting-formats-in-east-asian-art)，搜索摘要） | B：一张一张的 leaf；C：从上到下一幅 |
| 引首 · 题跋 · 印 | 引首在卷首题画名；题跋写在画后；印 “representing the artist's signature”，也用来平衡构图（[Smithsonian](https://asia-archive.si.edu/glossary/frontispiece/) · [香港艺术馆](https://hk.art.museum/en/web/ma/resources/archive/education-resources/resources/vermillion-impressions-chinese-painting-and-calligraphy-seals.html)） | 页首那句话是引首；页尾是题跋的位置；印只盖一次 |
| 浅绛 | 以赭石为主的淡彩；花青那一半只在通俗来源里见到，未核实 | 两个淡彩只用在最远的山和 plate 的小标记上 |

要避开的坑，都有出处：

- **横向滚动**：“consistently generate negative responses from users”（[NN/g](https://www.nngroup.com/articles/horizontal-scrolling/)）。所以手卷只取它的观看方式，方向仍然是竖的。
- **Scrolljacking**：“leads to more user pain than benefits”（[NN/g](https://www.nngroup.com/articles/scrolljacking-101/)）。
- **米色纸上的灰字**：WCAG 要正文 4.5:1、大字 3:1（[W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)）；常见的 `#767676` 在白底上过线，在纸色上只有 4.0。
- **纹理背景**：“features of the background image can be confused with the text”（[W3C F83](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83)）。
- **毛笔字体当符号**：拉丁的 faux-brush 字体被当作「亚洲感」的速记，是刻板印象（[CNN](https://amp.cnn.com/cnn/style/article/chop-suey-fonts-hyphenated)，搜索摘要）。

### 3. Portfolio 放什么，每一块做什么

| 内容 | 它的作用 | 给谁 | 手里有什么 | 还缺 |
| --- | --- | --- | --- | --- |
| 一句身份 | 让只看几分钟的人把你归类 | 所有人 | 三版各一句候选 | Owner 选或改（Q6） |
| Selected work，3–6 件 | 证明相关；按申请的组 curate。Munson：“2-3 projects”，“show both process and outcomes” | 导师，hiring manager | 见下一节的清单 | 每件一张真截图 |
| 作品页 | 角色、新在哪、结果、没走的路 | 看第二眼的人 | spike、PR、实验报告 | 英文版，图 |
| Research questions | 回答 “What novel ideas would you bring to the group?” | 导师 | README 的研究弧线和方向表 | 把问题磨尖 |
| 60 秒 demo | 最快证明东西能用（Litt 的 [Wildcard 页](https://www.geoffreylitt.com/wildcard/)） | 导师初筛 | 没有 | 录 |
| Notes | 证明会写 | 导师，同行 | 四个题目 | 正文 |
| Process | “Don't just show me the finished product.” | 同行，工程师 | PR #115 的 28 轮、`reviews/`、`experiments/` | 选一两轮做成前后对比 |
| About · CV · Contact | 回答搜名字的人；让申请前的对话能发生 | 所有人 | 简历 | 个人经历写多少（Q7） |
| Colophon | 把站点本身的做工说出来 | 同行，hiring manager | 山是代码画的；对比度是量过的 | — |
| Now | 现在在做什么 | 同行 | — | 取决于愿意公开什么（Q7）；优先级最低 |

来源：[Sean Munson](https://www.smunson.com/teaching/applyingmasters.php) · [NN/g research portfolio](https://www.nngroup.com/articles/ux-researcher-portfolio/) · 上一节的各页。

### 4. 别人的站

打开了 12 个横跨 engineer、researcher、artist 的个人网站，规律是：

- 首页那句话是「动词 + 主题」，不是 job title。Matuschak：“I'm an applied researcher, focused on creating user interfaces that expand what people can think and do.” Cathy Fang：“I build and study how AI… shapes human behavior, health, and connection.”
- 一件作品是缩略图、标题、一句话；researcher 再加 venue 和年份。Role 一般只在作品页里，而 Fluid Interfaces 明确要它，所以要自己加到卡上。
- 少数置顶，其余收起或归档。
- 按主题或问题分组，不按媒介。
- Artist 那一面要么混在同一张表里，要么由站点自己的做工来说；只有 Joanne Leong 单开了 Artwork 一栏。
- 完成的和进行中的分开：Essays 和 Notes，Projects 和 Working notes。

首页有三种原型，三个方案各对应一种：

| 原型 | 谁 | 方案 |
| --- | --- | --- |
| Statement-first 的单页，按年代一卷到底 | [Bret Victor](https://worrydream.com/)、[Andy Matuschak](https://andymatuschak.org/)、[Linus Lee](https://thesephist.com/) | A |
| 作品索引 | [Cathy Fang](https://cathy-fang.com/)、[Joanne Leong](https://www.joanneleong.com/)、[Pat Pataranutaporn](https://www.patpat.world/)、[Rauno Freiberg](https://rauno.me/craft) | B |
| 先说在想什么，再按主题给作品 | [Geoffrey Litt](https://www.geoffreylitt.com/)、[Amelia Wattenberger](https://wattenberger.com/) | C |

另一个相关的形式是 annotated portfolio（Gaver & Bowers 2012）：用简短的注释指出一组作品里反复出现的关切，“capturing the family resemblances that exist in a collection of artefacts”（[Bowers](https://research.gold.ac.uk/id/eprint/14819)；Gaver & Bowers 的全文没读到）。三面的标记就是这样一层注释。

## 手里的内容

工作经历来自 Drive 里的简历（2026-03 版）和 Indeed 上的 resume，这一轮按 owner 的要求读的。

| 作品 | 一句话 | 证据在哪 | 三面 | 缺什么 |
| --- | --- | --- | --- | --- |
| Mars Workbench | 每天在用的周计划工具 | 线上产品、仓库、`/design` | 造 问 磨 | 截图、demo |
| Plan with Claude | Claude 通过 MCP 和你一起排一周，先问再写 | PR #39–#45、#69、`src/mcp/prompts/` | 造 问 | 一段对话的录屏 |
| Loud wins | 完成的交互，28 轮 review，和起点的文献相反 | PR #115、`reviews/pr-115.md` | 问 磨 | 实现还没落地；可交互的 demo |
| Serial vs. parallel agents | 十个 run、盲审的对照实验 | `experiments/page-structure-parallel/` | 造 问 | 英文摘要 |
| The review log | CI 漏掉、review 抓到的问题，存成数据集 | `reviews/` | 问 磨 | 分类统计 |
| Merchant onboarding（JPMorgan Chase，2021–2025，Lead Software Engineer） | 带小商户走完 onboarding 的每个 milestone，进度来自 5 个以上的服务 | 简历 | 造 | 内部产品，只能用重画的示意图 |
| Team component library（同上） | 基于公司 design system 的组件库，重复 UI 工作约少 40% | 简历 | 造 磨 | 同上 |
| 更早 | Cerner 的任务管理 app（2021）；SLD Laser 的数据平台（2019） | 简历 | 造 | 只进 CV |

一个巧合值得用：JPMorgan 的 onboarding 是「带别人走完一个个 milestone、看得见进度」，Cerner 做的是任务管理，Mars Workbench 是给自己做的同一件事。A 的第一个 scene 用了这条线。

## 三面怎么放在一起

不分 Engineering、Research、Art 三个栏目。理由：范例站点里几乎没人这样分；owner 自己的说法是三面出自同一种态度；分栏之后每一栏都只有两三件东西。

做法是三层：

1. **每件作品同一个结构，标出它用了哪几面。** 标记是 造（build）、问（ask）、磨（polish）。它们是状态不是按钮，所以画成文字，不画成 pill。
2. **三种字对应三面。** Serif 说问题和故事（问），grotesk 说做了什么（造），mono 只用在量出来的东西上：日期、数字、角色。磨没有自己的字体，它体现在每一处都收拾干净。
3. **Artist 那一面有三个住处。** 站点本身的做工；作品页里的「磨」一节，放一轮 review 的前后对比和它留下的规则；Colophon。

## 视觉语言

**纸、墨、印。** 一种墨的五个深浅，两个浅绛的淡彩，一方朱印。数字是对纸色的 WCAG 对比度，按 `mars-workbench` design language 的做法量。

| Token | 日间 | 对 paper / paper-2 | 夜间 | 对 paper / paper-2 | 用途 |
| --- | --- | --- | --- | --- | --- |
| paper / paper-2 | `#f5f4ef` `#eceae3` | — | `#13161b` `#1b1f26` | — | 底；plate 的底 |
| 焦 | `#1b1f26` | 15.0 / 13.7 | `#e9e6de` | 14.5 / 13.3 | 标题 |
| 浓 | `#42454a` | 8.7 / 8.0 | `#c3c0ba` | 10.0 / 9.1 | 正文 |
| 重 | `#606266` | 5.5 / 5.1 | `#a09f9b` | 6.8 / 6.2 | 注、meta |
| 淡 | `#a8a8a6` | 2.2 | `#606161` | 2.9 | 线、未点亮的标记；不作文字 |
| 清 | `#d7d6d2` | 1.3 | `#313336` | 1.4 | 细线、远山 |
| 花青 | `#3d5a6c` | 6.6 / 6.1 | `#9dbccd` | 9.1 / 8.3 | 最远的山、plate 的标记 |
| 赭石 | `#8a5a3c` | 5.3 / 4.8 | `#d1a283` | 7.9 / 7.2 | plate 的标记 |
| 朱砂 | `#b8322a` | 5.4 / 4.9 | `#e8695a` | 5.7 / 5.2 | 印；天上的 Mars |

色值为了对比度调暗过，不是颜料的本色（参考表里花青是 `#2376B7`、赭石是 `#862617`，两份参考互相也对不上）。夜间版把纸和墨对调，像拓片，跟随系统主题。

**字。** Geist（grotesk）、Source Serif 4 配思源宋体（serif，两者的拉丁字本来就是一套）、Geist Mono。不用毛笔字体。

**三个母题。**

- 山是代码画的：几层带噪声的山脊，上浓下淡，淡到纸色就是雾。每一种远法一组参数。
- 印：全页唯一的一块红，只在页尾，读到的时候盖下去一次（420 ms，`prefers-reduced-motion` 时不动）。画是盖了印才算画完，这是 Loud wins 在这个站上的样子。现在是闲章「磨」，占位。
- Mars：山顶天上一颗小红点。产品的主题叫 “dawn on Mars”。留不留是 Q9。

**Principles 的对应。**

| Principle | 在这个站上 |
| --- | --- |
| 1 Minimal | 一屏一个主体；没有图标、卡片阴影、渐变；山水只在页首、段间、页尾 |
| 2 Calm ahead | 还没读到的用淡墨；Selected work 不超过 6 件；数字小 |
| 3 Loud wins | 只有印响一次，落在页尾 |
| 4 Hierarchy | 墨色的深浅就是层级，不靠字号堆 |
| 5 Consistent | 一个 leaf、一个 plate、一个 scene 骨架；手机和桌面同一条路，单列 |
| 6 Honest controls | 链接有下划线或箭头；标记不长成按钮；hover 只加下划线；交互不改变尺寸 |

动效沿用产品的一条 easing（`cubic-bezier(0.2, 0, 0, 1)`），背景不动。

## 方案

三张首页共用上面的语言，区别在首页先给什么。Mockup 里各有一张完整的首页。

### A · 手卷：story first

- **先给**：一条从 JPMorgan 到现在的路，七个 scene，约四分钟。过去是淡墨的远山，现在是浓墨的近山；章回数字的墨色一路变深。页尾是接下来的三个问题和印。
- **结构**：Home（一卷）· Works（索引）· 作品页 · Notes · CV。
- **好处**：叙事完整，是 Personal Statement 的可视版本；三面在同一个故事里自然出现；山水气质最足；读完才盖印，完成感最强。
- **代价**：只给 3–5 分钟的读者可能停在前两个 scene，而研究问题在页尾；第一个 scene 是银行的工作；找某一件作品要翻；文案的要求最高。
- **要准备的内容**：七段文字（约 500 词）、六张图、白板那一段写多少个人经历的决定。

### B · 册页：works first

- **先给**：一句身份，六张作品，每张同一个结构。下面是 Notes 和 Before this 两列。
- **结构**：Home（索引）· 作品页 · Research · Notes · About。
- **好处**：三十秒看到全貌；加作品不用改版；最像 Media Lab 自己的版式；两类读者都不用学怎么读。
- **代价**：和多数 portfolio 长得像；六张里五张出自同一个产品，要靠文案说清它们是一件事的不同切面；研究问题不在首页；六张并排是一个 pile，上限要守住。
- **要准备的内容**：六张真截图，至少三个作品页。

### C · 远山：questions first

- **先给**：三个研究问题，每个下面三行：Built、Seen、Open。然后是中景的作品清单（The ground I stand on）和近景的 about。整页像一幅立轴。
- **结构**：Home（三问）· Work（索引）· 作品页 · About（故事）· Notes。
- **好处**：一眼是 researcher；直接回答 Fluid Interfaces 的 “What novel ideas would you bring”；套瓷时能把导师带到他关心的那一问；工程作为证据出现；Open 一行把 n = 1 的局限写在明处。
- **代价**：hiring manager 要滑过三问才看到做过什么；问题要够尖，研究方向一变首页要重写；每一问证据的厚薄会被看出来。
- **要准备的内容**：三问各三行（约 300 词），三到四个作品页。

### 按 Principles 排

| | A | B | C | 排序 |
| --- | --- | --- | --- | --- |
| 1 Minimal | 到页尾七屏 | 一屏见全部 | 三问一屏半 | B › C › A |
| 2 Calm ahead | 一次一个 scene | 六张并排 | 三个问题 | A ≈ C › B |
| 3 Loud wins | 读完一卷才盖印 | 印在页脚 | 印在近景 | A › C › B |
| 4 Hierarchy | 问题在最后 | 广度在最前 | 想研究什么在最前 | C 或 B › A，看什么最重要 |
| 5 Consistent | 平 | 平 | 平 | — |
| 6 Honest controls | 平 | 平 | 平 | — |

### 推荐

**C 做首页的骨架，B 的 leaf 做 Work 页，A 做成 About 里的一页故事。** 这个站的第一批读者是导师，他们给几分钟。C 把「我是谁、想研究什么、做了什么来问」放进第一屏半。A 的故事是 Personal Statement 的材料，放进 About 不浪费，也照顾了愿意读完的人。B 的结构是 Work 页天然的样子，hiring manager 从导航的 Work 一步到。三者不互斥；这是推荐，不是决定。

## 作品页的结构（三个方案共用）

1. 标题 + 一句话：是什么，给谁用。
2. 一行事实（mono）：年份 · 角色 · 状态 · 链接。
3. 60 秒 demo。
4. 起因：哪一处摩擦引出了它。
5. 造 · Built：做出了什么，一张图，最难的那一处。
6. 问 · Asked：问的是什么，看到了什么，数字，局限。
7. 磨 · Polished：一轮 review 的前后对比，和它留下的一条规则。
8. 没走的路：放弃的方案和原因。
9. 接下来：还开着的问题，连回首页对应的那一问。

2、5–6、6 的数字分别对上 Fluid Interfaces 要的 role、innovative、results；8 是 NN/g 调查里 hiring 的人点名要的。Loud wins 的作品页可以放真的交互：点一下卡片，看它飞进 ring。响的东西住在作品里，不在站点的外壳上。

## 待拍板 · Open questions

| # | 问题 | 选项 | 推荐 |
| --- | --- | --- | --- |
| Q1 | 首页走哪条路 | A · B · C · 组合 | C 的骨架 + B 做 Work 页 + A 做 About |
| Q2 | 字 | A 由 serif 领衔 · B 纯 grotesk · C 两种并用；grotesk 用 Geist 还是 Neue Haas Grotesk | C 的用法；先 Geist |
| Q3 | 三面怎么标 | 造 · 问 · 磨 / build · ask · polish / 不标 | 看了再定：A、C 是汉字，B 是英文 |
| Q4 | 印 | 闲章「磨」/ 名章（需要中文名用字）/ 不要 | Owner 定 |
| Q5 | 山水的量 | A 最多 · B 最少 · C 居中 | C 的量 |
| Q6 | 首页那句话 | 三版各一句 | Owner 选或改 |
| Q7 | 对外说什么 | 写不写正在申请 graduate program 或在找工作；白板之外的个人经历写多少 | Owner 定。事实：导师和 hiring manager 看到的是同一句话 |
| Q8 | 中文 | 全英文、中文只作点缀 / 加中文版 | 先全英文 |
| Q9 | Mars 那一点红 | 留 / 让印做唯一的红 | Owner 定 |

## 时间上的事实

- Apply 页写申请 9 月 15 日开放、**2026 年 12 月 15 日**截止；更早读到的官方 FAQ 写 12 月 1 日。以当期页面为准。（[Apply](https://www.media.mit.edu/graduate-program/apply/)）
- Students Offering Support 的表单 “will close November 13th, 2026”：一位在读学生给 “one round of meaningful feedback on either your portfolio or statement of objectives”。（[来源](https://www.media.mit.edu/posts/students-offering-support-program/)）
- 旧版 portfolio 页写 “include portfolio URL at the end of the 'Statement of Objectives' section”；这一条当期是否还适用没有核实。Portfolio 用 URL 的话，站点要在提交前公开。

## 风险

- **山水变成装饰。** 对策已经在语言里：不用毛笔字体和纸纹；山是抽象的几层墨；汉字只出现在有意思的地方（章回、三面、印）。
- **一个产品撑起大半作品。** 这是事实，文案要直说它们是同一件事的切面，而不是装成六个项目。
- **n = 1 的结论。** C 的 Open 一行和作品页的局限一节把它写在明处。
- **JPMorgan 的材料。** 内部产品没有可公开的截图，只能用重画的示意图和简历上已有的说法。
- **Plate 是占位。** 墨线小图好看，但评审要看真的东西；正式版每件作品至少一张真截图或一段视频。
- **Loud wins 还没实现。** 站上写成「设计已定，正在实现」。

## Considered, not proposed · 考虑过但不提议

- **横向滚动的真手卷**：NN/g 的证据是负面的，手机上更糟。
- **Engineering / Research / Art 三个栏目**：见「三面怎么放在一起」。
- **毛笔字体、宣纸纹理、水墨晕染动画**：刻板，而且伤可读性。
- **占满一屏的山水 hero**：把内容推出第一屏，和 Calm、Hierarchy 都冲突。
- **把 Balatro 式的 juice 用在站点外壳上**：Pat 的文章提醒过 “flashy”；响的那一下留给印，juice 留在 Loud wins 的作品页里。

## 调研的局限

- media.mit.edu 没有直接读到：对抓取返回 503，Media Lab 的页面是通过翻译代理读的，引用前要对原文；Brand Portal 只有搜索摘要。
- 范例站点里 lingdong.works 和 rauno.me 的内容没渲染出来；valdemardanry.com 打不开。
- Gaver & Bowers 2012 的全文没读到。
- 评审在 Media Lab portfolio 上花多久，没有找到数据；3–5 分钟来自另一所学校的一位教授。
- 山水那部分没有读到 The Met 和 Smarthistory 的原页（429 / 403），留白和印的位置没有博物馆来源的引文。
