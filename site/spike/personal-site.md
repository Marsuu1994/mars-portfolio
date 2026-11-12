# Spike: 个人网站——portfolio 的入口

**Status: awaiting owner review** · 第 1 轮 2026-11-11，第 2 轮修订 2026-11-12 · Mockup：[claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5](https://claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5)（私有页面，源文件 `site/mockup/mockup-personal-site.html`）· 起因和 owner 的原话：`sessions/2026-11-06-media-lab-fit.md` Round 7、8

> 语言约定：叙述用中文；站点自己的文案、产品名词、论文和代码标识保留英文。三个设计词：**scene** 是 A 方案里的一段故事，**leaf** 是一件作品的卡片（B 方案），**plate** 是卡片或故事旁边那张图。**n = 1** 指只有一个用户，而且就是设计者本人。

这份 spike 是这一轮的唯一依据。Mockup 只画方案和视觉语言；调研、排序和问题以这里为准。

## Trigger · 起因

Owner 要一个个人网站作为 portfolio 的入口（Round 7 原话）：

> visual style方面的话我想你直接去搜mit media lab的page，不是说布局而是typography，颜色使用这一类，淡雅，而且我希望融进我想要的山水画禅意风格。……个人网站兼portfolio做什么，放什么内容，每个内容的话有什么用，怎么展示既有engineering的一面和researcher的一面还有甚至artist的一面—这也是最近挖掘出来的，工作中我把每一个pr当成艺术品来polish，对我产品也是精修细致打磨，engineering部分agent workflow也是同样理念。

基调是 `mars-workbench` [PR #115](https://github.com/Marsuu1994/mars-workbench/pull/115) 里的 design principles（[Principles，在 PR 分支上，未合并](https://github.com/Marsuu1994/mars-workbench/blob/claude/board-tap-to-complete-mockup/design/design-language/README.md)）。只做产品和设计，不考虑代码。

第 2 轮（Round 8）：owner 给了自己的申请素材粗稿（PDF，2026-11-05，14 个工作故事加 Mars Workbench 一节），要求重新 review 上一轮。PDF 的项目部分不全，和本仓库冲突时以本仓库为准；工作经历以 PDF 为准。

## 范围

- 做：站上放什么，怎么组织，长什么样，三个首页方案，作品页的结构，拍板之后的内容准备顺序。
- 不做：技术栈、部署、域名；作品页和其他内页的完整 mockup；正式文案。

## 谁来读，给多少时间

| 读者 | 怎么来 | 给的时间和他们要的东西 | 来源 |
| --- | --- | --- | --- |
| 导师、招生 | 套瓷邮件的链接；申请表的 portfolio URL；搜名字 | 一位教授：“I'll spend 3 to 5 minutes per app”，感兴趣的话 “will immediately search for your name on the web” | [Philip Guo](https://pg.ucsd.edu/PhD-application-tips.htm)（另一所学校的一位教授，不是 Media Lab 的数据） |
| 同上 | 同上 | 官方：“Recommended formats: URL or PDF”；“curated to highlight relevant works”；“highlight who you are, and what projects are relevant to the group(s)”；“provide context around your work” | [MAS portfolio requirements](https://www.media.mit.edu/posts/academics-portfolio-requirements/) |
| Fluid Interfaces | 同上 | 每个项目写清 “what your role was … (concept, implementation, evaluation, etc)”、“what was interesting or innovative”、“some documentation of the results”。注意：一个缓存的组页面写着暂不招新学生，applicant 页还写着 2025，招生状态待核对 | [applicant information](https://www.media.mit.edu/groups/fluid-interfaces/applicant-information/) |
| Cyborg Psychology 的 PI | 同上 | “being concise is more effective than providing too much detail”；“if you want to come here just to create something flashy for social media, you'll need to aim higher”；被拒的常见原因是 “only vaguely related … to the group's vision” | [Pat Pataranutaporn](https://www.media.mit.edu/posts/my-media-lab-experience/) |
| Engineering hiring manager | 简历上的链接 | 有经验的工程师主要靠简历和面试里的 case；网站加分有限，做差了减分。能找到的证据都不针对有经验的工程师：NN/g 两篇讲 UX designer 的 portfolio，dev.to 那份调查面向找第一份工作的人（待核对） | [NN/g](https://www.nngroup.com/articles/ux-design-portfolios/) · [dev.to](https://dev.to/profydev/this-survey-among-60-hiring-managers-reveals-don-t-waste-your-time-on-a-react-portfolio-website-17ge) |
| 同行 | 文章、GitHub | 怎么做出来的 | [Matuschak：work with the garage door up](https://notes.andymatuschak.org/Work_with_the_garage_door_up) |

把网站本身当评估对象的是 Tangible Media：“we want to evaluate the aesthetics and usability of their website design”（[来源](https://tangible.media.mit.edu/contact-admission)）。不是目标组，但说明站点的做工在这里会被看。

两类读者要的东西不同，首页先服务谁是 owner 的取舍（Q1），后面的推荐按它分情况。

## 调研

### 1. Media Lab 的字和颜色

- **字**：Media Lab 的 Brand Portal 写主字体是 Neue Haas Grotesk（Helvetica 的数字复刻），通过 Adobe Fonts 提供，fallback 是 Helvetica 和 Arial。这一条只有[搜索摘要](https://www.media.mit.edu/posts/MLBrandPortal/)，待核对。[MIT brand](https://brand.mit.edu/typography) 和 [MIT Admissions](https://mitadmissions.org/blogs/entry/fonts-of-mit/) 讲的是全校的字。
- **识别系统**：Pentagram 2014：“Helvetica, so central to MIT's communications when the Media Lab was new, has been reinstated to support the overall system.”（[Pentagram](https://www.pentagram.com/work/mit-media-lab)）
- **颜色**：Brand Portal（搜索摘要）：“primary colors are black, white, and grey. Most designs should stick to this palette”，辅助色 “one color at a time with black and white”。
- **没读到**：media.mit.edu 对抓取一直返回 503，网站 CSS 的字号和色值没有核实；owner 在浏览器里看一眼就能补上。

**借什么**：一种 grotesk 做主声；黑白灰为主；一次只用一个颜色。Mockup 的 grotesk 是 Geist，同一路的瑞士系无衬线，也是 Mars Workbench 自己的字。

### 2. 山水画的概念，对应到版面

| 概念 | 出处 | 在页面上 |
| --- | --- | --- |
| 留白 · 计白当黑 | 包世臣《艺舟双楫》引邓石如：“常计白以当黑，奇趣乃出。”（[wikisource](https://zh.wikisource.org/zh-hans/藝舟雙楫/05)） | 一屏一个主体；山水只占一角或一条，不垫在正文下面 |
| 三远 | 郭熙《林泉高致》：“高遠之色清明，深遠之色重晦；平遠之色有明有晦。”（[wikisource](https://zh.wikisource.org/wiki/林泉高致)） | A 的开篇是高远，段间是平远；C 整页从远到近，墨色跟着变深 |
| 墨分五色 | 张彦远《历代名画记》：“運墨而五色具。”（[wikisource](https://zh.wikisource.org/wiki/歷代名畫記/卷第二)）焦浓重淡清是后来的说法，各家不同 | 一种墨的五个深浅做全部灰阶 |
| 手卷 · 册页 · 立轴 | The Met：手卷 “shoulder-width section by section”，“an intimate experience”（[The Met](https://www.metmuseum.org/essays/chinese-handscrolls)，经转载读到） | A 一段一段往下展开；B 一张一张翻；C 从上到下一幅。都是竖向滚动 |
| 印 | 作者的印 “representing the artist's signature”，也用来平衡构图（[香港艺术馆](https://hk.art.museum/en/web/ma/resources/archive/education-resources/resources/vermillion-impressions-chinese-painting-and-calligraphy-seals.html)） | 印作为署名放在页尾，全页唯一的一块红 |
| 浅绛 | 以赭石为主的淡彩；花青那一半只见于通俗来源，未核实 | 两个淡彩只用在最远的山和 plate 的小标记上 |

要避开的坑：横向滚动 “consistently generate negative responses from users”（[NN/g](https://www.nngroup.com/articles/horizontal-scrolling/)）；scrolljacking “leads to more user pain than benefits”（[NN/g](https://www.nngroup.com/articles/scrolljacking-101/)）；米色纸上的灰字，WCAG 要正文 4.5:1（[W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)），常见的 `#767676` 在白底上过线，在纸色上只有 4.1；纹理背景（[W3C F83](https://www.w3.org/WAI/WCAG22/Techniques/failures/F83)）；把毛笔字体当「亚洲感」的速记（[CNN](https://amp.cnn.com/cnn/style/article/chop-suey-fonts-hyphenated)，搜索摘要）。

### 3. 别人的站

打开了 12 个横跨 engineer、researcher、artist 的个人网站：

- 首页那句话是「动词 + 主题」，不是 job title。Matuschak：“I'm an applied researcher, focused on creating user interfaces that expand what people can think and do.”
- 一件作品是图、标题、一句话；researcher 再加 venue 和年份。Role 一般只在作品页里，而 Fluid Interfaces 明确要它。
- 少数置顶，其余收起；按主题或问题分组，不按媒介。
- Art 那一面要么混在同一张表里，要么由站点的做工来说；只有 Joanne Leong 单开了一栏。
- 完成的和进行中的分开放：Essays 和 Notes，Projects 和 Working notes。

| 首页原型 | 谁 | 对应方案 |
| --- | --- | --- |
| Statement-first 的单页，按年代一卷到底 | [Bret Victor](https://worrydream.com/)、[Andy Matuschak](https://andymatuschak.org/)、[Linus Lee](https://thesephist.com/) | A |
| 作品索引 | [Cathy Fang](https://cathy-fang.com/)、[Joanne Leong](https://www.joanneleong.com/)、[Pat Pataranutaporn](https://www.patpat.world/) | B |
| 先说在想什么，再按主题给作品 | [Geoffrey Litt](https://www.geoffreylitt.com/)、[Amelia Wattenberger](https://wattenberger.com/) | C |

Annotated portfolio（Gaver & Bowers 2012，全文没读到，待核对）：用简短的注释点出一组作品里反复出现的关切（[Bowers](https://research.gold.ac.uk/id/eprint/14819)）。下面「三面」的标记就是这样一层注释。

## 手里的内容

### 工作经历

来源：owner 的申请素材粗稿（PDF，2026-11-05）。约 5 年都在 WePay → JPMorgan Chase 一条线上：WePay 风控团队的内部工具、Partner Center、Project Janus（WePay 并入 JPMC）、Chase Commerce Center（面向各类商户的统一门户，从小商户到大型企业）；团队 2025 年逐步解散，之后独立做 Mars Workbench。下表按「对站点有什么用」挑了七个，名字一律用泛称（原因见「公开前要处理的」）。

| 故事（PDF 编号） | 一句话 | 站上的位置 | 撑起哪一面 |
| --- | --- | --- | --- |
| Merchant onboarding 编排层（#11） | 把散在各团队服务里的开户状态聚成一个入口，「始终告诉商户你在哪一步、下一步做什么」；从首页横幅演进成强制入口，从 UI owner 到前后端 owner | Work 的一件，作品页按 PDF 的四段写 | Engineer；也是和 Mars Workbench 同一个问题（见下） |
| 商户门户的 micro-frontend shell 和组件库（#10） | 门户至今在用的 shell MVP；追到 Module Federation 共享作用域的初始化时序；用 Zod 在运行时校验跨部署的契约 | Work 或 Engineering 区块 | Engineer，钻研 |
| Design token 主题化（#12） | 和一位设计师一起，把「换主题」变成「换一份样式表」；全门户的提案因法务原因叫停 | Work 的一件：**Design systems & tokens**，并上 Mars Workbench 的三个主题和 `check:themes` | Artist / 磨；设计和工程之间的人 |
| 前端组织的第一个 BFF（#9） | 选 Spring Boot 而不是团队熟的 Flask，选 ECS 而不是每个前端一个 Lambda；让一个没碰过 AWS 的前端组织把它当日常 | Engineering 区块；「没走的路」的范例 | Engineer，赋能他人 |
| 静默丢数据之后的一条规则（#14） | 从此每条失败路径至少一条带 offset 的日志和一个告警 | Process：教训变成机制 | 磨 |
| 遗留系统的渐进迁移框架（#1） | 让 React 在旧 Angular 应用里从叶子面板往上替换，零停机；20 多个面板分给队友并行 | Engineering 区块 | Engineer |
| 一个没走通的方案（#8） | 方向不清时摸透已有生态，方案技术上可行但因优先级被搁置，后被别的项目采用 | About 或作品页的「没走的路」 | 探索 |

PDF 里还有 RBAC 和与 PM 的三次沟通（#2）、P0 事故（#3）、没有头衔的领导（#4）等，更适合面试和 Personal Statement，不建议上站。

**一条可以连起来的线**：CTA 的核心是「始终告诉商户你在哪一步、下一步做什么」，Mars Workbench 是给自己做的同一件事。Round 7 记的是「是否进叙事由 owner 定」，现在 A 方案的开篇用了它；用不用见 Q9。

**Owner 自己的说法**（PDF p25–27），可以直接给 Process 和 About 用：先设计后实现（17 份归档 spike）；文档是产品的一部分；把教训变成机制；敢于删掉自己做过的东西。四个核心品质：钻研、Ownership、探索精神、出错就改。

### Mars Workbench（以本仓库为准）

| 作品 | 一句话 | 证据 | 缺什么 |
| --- | --- | --- | --- |
| Mars Workbench | 每天在用的周计划工具，只有 owner 一个用户 | [仓库](https://github.com/Marsuu1994/mars-workbench) | 截图、60 秒 demo |
| Plan with Claude | Claude 通过 MCP 和你一起排一周，先问再写 | [PR #39](https://github.com/Marsuu1994/mars-workbench/pull/39)–[#45](https://github.com/Marsuu1994/mars-workbench/pull/45)；app 内 wizard 下线：[PR #69](https://github.com/Marsuu1994/mars-workbench/pull/69)；[`src/mcp/prompts/`](https://github.com/Marsuu1994/mars-workbench/tree/main/src/mcp/prompts) | 一段对话的录屏 |
| Loud wins | 完成的交互，和起点的文献相反；**设计已定，还没实现** | [PR #115](https://github.com/Marsuu1994/mars-workbench/pull/115) 和它的 [review log](https://github.com/Marsuu1994/mars-workbench/blob/claude/board-tap-to-complete-mockup/reviews/pr-115.md)（2026-11-12 是 29 轮，还在变，站上不写死） | 实现；可交互的 demo |
| Serial vs. parallel agents | 十个 run、盲审的对照实验 | [try2 report](https://github.com/Marsuu1994/mars-workbench/blob/main/experiments/page-structure-parallel/try2/report.md) | 英文摘要 |
| The review log | CI 漏掉、review 抓到的问题，存成数据集 | [`reviews/`](https://github.com/Marsuu1994/mars-workbench/tree/main/reviews) | 分类统计 |
| Design system（并入上面的 Design systems & tokens） | 三个主题一套变量契约，`check:themes` 在 CI 里守着；Design Console 渲染每个页面的每种状态 | [design language](https://github.com/Marsuu1994/mars-workbench/tree/main/design/design-language) | 截图 |

PDF 还提到一个在做的 3D 蛋白质结构查看器，本仓库没有记录；上不上站见 Q10。

## 三面怎么放在一起

不分 Engineering、Research、Art 三个栏目：范例站点里几乎没人这样分；分了之后每栏只有两三件；owner 的原话是「工作中我把每一个pr当成艺术品来polish，对我产品也是精修细致打磨，engineering部分agent workflow也是同样理念」，三面是同一种做事方式的三个角度。

做法：

1. **每件作品同一个结构，标出它用了哪几面。** 标记是状态不是按钮，按 Principle 6.1 画成文字或 pill 都可以，不画成圆圈或方框。用什么词见 Q5。
2. **三种字对应三面。** Serif 说问题和故事，grotesk 说做了什么，mono 只用在量出来的东西上：日期、数字、角色。
3. **Artist 那一面有三个住处，都要有硬证据：**
   - **Design systems & tokens** 作为一件作品：JPMC 和设计师一起做的主题化，加上 Mars Workbench 的三个主题和变量契约。这个站自己的纸墨 token 也是同一种做法。
   - **Process**：一轮 review 的前后对比和它留下的规则；静默丢数据之后的那条规则。
   - **站点本身的做工**和 Colophon。

## 视觉语言

**纸、墨、印。** 数字是对纸色的 WCAG 对比度，按 `mars-workbench` design language 的做法量。

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

色值为了对比度调暗过，不是颜料本色。夜间版把纸和墨对调，跟随系统主题。

**字**：Geist、Source Serif 4 配思源宋体、Geist Mono；不用毛笔字体。

**母题**：

- 山是代码画的：几层带噪声的山脊，上浓下淡，淡到纸色就是雾；每种远法一组参数。
- 印：页尾的署名，读到时轻轻落下一次（420 ms，`prefers-reduced-motion` 时不动）。现在是占位的闲章「磨」。
- Mars：山顶天上一颗小红点，产品主题叫 “dawn on Mars”（Q12）。

**Principles 在站点外壳上的样子。** 站点外壳没有「完成一件事」的时刻，所以 Loud wins（原则 3）不用在外壳上：外壳整体走 Calm，响的东西留在 Loud wins 的作品页里，放真的交互。

| Principle | 在这个站上 |
| --- | --- |
| 1 Minimal | 一屏一个主体；没有图标、卡片阴影、渐变 |
| 2 Calm ahead | 还没读到的用淡墨；Selected work 不超过 6 件；数字小 |
| 4 Hierarchy | 墨色的深浅就是层级 |
| 5 Consistent | 一个 leaf、一个 plate、一个 scene 骨架；手机和桌面同一条路 |
| 6 Honest controls | 链接有下划线或箭头；状态标记不长成按钮；hover 只加下划线；交互不改变尺寸 |

## 方案

三张首页共用上面的语言，区别在首页先给什么。Mockup 里各有一张完整的首页。

### A · 手卷：story first

- **先给**：一条从 WePay / JPMC 到现在的路，七个 scene，约四分钟；过去是淡墨远山，现在是浓墨近山。页尾是接下来的问题和印。
- **结构**：Home（一卷）· Works · 作品页 · Notes · CV。
- **好处**：叙事完整，是 Personal Statement 的可视版本；三面在同一个故事里出现；山水气质最足。
- **代价**：3–5 分钟的读者可能停在前两个 scene，研究问题在页尾；找某一件作品要翻；文案要求最高；最依赖还没定的个人经历（白板和朋友、team 解散后那一年）。

### B · 册页：works first

- **先给**：一句身份，六件作品，每件同一个 leaf。下面是 Notes 和 Engineering（文字版 case）。
- **结构**：Home（索引）· 作品页 · Research · Notes · About。
- **好处**：三十秒看到全貌；加作品不用改版；最接近 Pentagram 2014 的黑白加 grotesk；两类读者都不用学怎么读；PDF 的工作故事直接成为 Engineering 区块。
- **代价**：和多数 portfolio 长得像；六件里四件出自同一个产品，要靠文案说清它们是同一件事的不同切面；研究问题不在首页。

### C · 远山：questions first

- **先给**：三个研究问题，每个下面三行：Built、Seen、Open。然后是作品清单（The ground I stand on）和 about。整页像一幅立轴。
- **结构**：Home（三问）· Work · 作品页 · About（故事）· Notes。
- **好处**：一眼是 researcher；回答 Fluid Interfaces 的 “What novel ideas would you bring”；套瓷时能把导师带到他关心的那一问；Open 一行把 n = 1 的局限写在明处。
- **代价**：hiring manager 要滑过三问才看到做过什么；整页依赖三个研究问题，而 README 里的总论点还没定（Q3）；研究方向一变首页要重写；每一问证据的厚薄会被看出来。

### 怎么比

按 Principles 排，三个方案只在两处拉开：B 一屏见全部（Minimal），A 一次只给一个 scene（Calm ahead）。Hierarchy 取决于什么最重要，5、6 打平。所以真正能分出高下的是下面三条：

| | A 手卷 | B 册页 | C 远山 |
| --- | --- | --- | --- |
| 导师 30 秒看到 | 第一个 scene：工作经历 | 一句身份和六件作品 | 想研究什么，和做了什么来问 |
| Hiring manager 30 秒看到 | 同上 | 作品和 Engineering 区块 | 三个研究问题 |
| 内容什么时候能备齐 | 最晚：七段文案，加个人经历的决定 | 最早：缺截图和三个作品页 | 中间：缺三个研究问题的定稿 |
| 研究方向变了 | 改结尾 | 改 Research 页 | 改首页 |

### 推荐（按 Q1 分情况）

- **首页先给导师**：C 做首页骨架，B 的 leaf 做 Work 页，A 的故事放进 About。前提是三个研究问题在提交前能定稿（Q3）；定不下来就退到 B。
- **首页先给 hiring manager，或两者并重**：B 做首页，Research 页用 C 的三问，About 用 A。
- **按时间分**：申请截止前用 C，之后换成 B。三个方案共用一套 leaf、plate 和作品页，换首页不用重做内页。

## 作品页的结构（三个方案共用）

1. 标题 + 一句话：是什么，给谁用。
2. 一行事实（mono）：年份 · 角色 · 状态 · 链接。
3. 60 秒 demo，或一张图。
4. 起因：哪一处摩擦引出了它。
5. Built：做出了什么，最难的那一处。
6. Asked：问的是什么，看到了什么，数字，局限。
7. Polished：一轮 review 的前后对比，和它留下的规则。
8. 没走的路：放弃的方案和原因。
9. 接下来：还开着的问题。

第 2 段对上 Fluid Interfaces 要的 role，第 5 段对上 innovative，第 6 段对上 results。第 8 段是 owner 自己的工作方法：每个 spike 都记下被否决的方案和理由。PDF 的工作故事是「背景 / 我做的 / 结果 / 品质落点」四段，对上第 4、5、6、9 段，工作作品可以只用文字。

## 公开前要处理的

PDF 自己列了待确认的项，加上这一轮的发现：

- **内部名称**：PDF 里的内部系统名和一家合作银行的名字，一律换成泛称（「风控团队的内部看板」「一家大型银行合作伙伴」）。上一轮的 mockup 没有用到这些名字。
- **待 owner 确认的事实**：
  - **年数**：PDF 说约 5 年，简历只从 2021 年算。站上暂时不写年数。
  - **职位**：PDF 里只有 Commerce Center 那一段是 Lead Software Engineer，何时开始待确认。站上暂时写 software engineer。
  - **数字**：「数千家商户」能不能公开；简历里组件库「约少 40%」和「5 个以上的服务」的来源，PDF 说组件库那个故事没有数字。站上暂时不写数字。
- **内部架构图**：重画之前要对照雇主的保密规定。
- **个人信息**：全名加城市；白板和朋友；team 解散后的那一年；正在申请或在找工作。逐项问，见 Q9。
- **会过期的数字**：review 轮数、commit 数这类会变的，站上不写死。

## 拍板之后

申请材料是 URL 的话，站点要在提交前公开。Apply 页写 2026 年 12 月 15 日截止，FAQ 写 12 月 1 日，以当期页面为准。

**最小版本**（提交前上线）：首页；三个作品页（Mars Workbench 与 Plan with Claude、Serial vs. parallel agents、Design systems & tokens）；About；CV。

**顺序**：

1. 答 Q1–Q3 和 Q9：决定首页和要公开的个人信息。
2. 确认事实，换掉内部名称。
3. 录 60 秒 demo，截真截图。
4. 写三个作品页的英文文案。
5. 第 3 轮 mockup：画作品页和 About，换上真内容。
6. 实现。

## 待拍板 · Open questions

| # | 问题 | 选项 | 推荐 |
| --- | --- | --- | --- |
| Q1 | 首页先服务谁 | 导师 · hiring manager · 两者并重 · 按时间分 | Owner 定；推荐跟着它走 |
| Q2 | 首页走哪条路 | A · B · C · 组合 | 见「推荐」 |
| Q3 | C 的三个研究问题 | 用 mockup 里那三问：何时介入何时放手、不用分数让完成有感觉、agent 写出属于我的代码 · 改 · 等 README 的总论点定了再写 | 和 README 的总论点一起定 |
| Q4 | 字 | A 由 serif 领衔 · B 纯 grotesk · C 两种并用；grotesk 用 Geist 还是 Neue Haas Grotesk（要 Adobe Fonts 授权） | C 的用法；先用 Geist |
| Q5 | 三面怎么标 | build · ask · polish · 造 · 问 · 磨 · 不标 | 卡片上用英文 build · ask · polish：读者读英文；汉字只留在印上 |
| Q6 | 印 | 闲章「磨」· 名章（要中文名用字）· 不要 | Owner 定 |
| Q7 | 山水的量 | A 最多 · B 最少 · C 居中 | 跟着 Q2 |
| Q8 | 首页那句话 | 见下 | Owner 选或改 |
| Q9 | 个人经历，逐项 | 白板和朋友 · 城市 · team 解散后的那一年 · 正在申请或在找工作 · 那条连起来的线（CTA 和 Mars Workbench） | Owner 逐项定；事实：导师和 hiring manager 看到的是同一句话 |
| Q10 | 工作经历上站多少 | 「手里的内容」那七个 · 更少 · 另加 3D 蛋白质结构查看器 | 先上三件：onboarding、shell、design tokens |
| Q11 | 中文版 | 全英文 · 加中文版 | 先全英文 |
| Q12 | Mars 那一点红 | 留 · 让印做唯一的红 | Owner 定 |
| Q13 | Students Offering Support（11 月 13 日关表） | 申请，给 portfolio · 申请，给 Statement of Objectives · 不申请 | Owner 定。事实：一位在读学生给一轮反馈；站点到 13 日来不及，Statement of Objectives 有草稿的话可以给它（[来源](https://www.media.mit.edu/posts/students-offering-support-program/)） |

Q8 的候选（mockup 里的三句是同一句的变体，这里换成三个不同方向）：

- 做的事：“I build tools that help people follow through on their own plans.”
- 想研究的事：“I build and study AI that helps people follow through, then steps away.”
- 怎么做事：“Engineer. I design before I code, and turn every lesson into a rule.”

## 风险

- **山水变成装饰**：不用毛笔字体和纸纹；山是抽象的几层墨；汉字只在有意思的地方出现。
- **一个产品撑起大半作品**：文案直说它们是同一件事的切面；工作经历的三件把面撑开。
- **n = 1**：C 的 Open 一行和作品页的局限一节写在明处。
- **说过头**：Loud wins 还没实现，只能写「设计已定，正在实现」，不能写「daily use said loud」。Pat 的文章提醒过 “flashy”。
- **图是占位**：每张 plate 是墨线小图，内容取自真数据；正式版每件作品至少一张真截图或一段视频。
- **英文文案是草稿**：mockup 里的句子是 agent 写的，包括 About 里的比喻，正式文案要 owner 过一遍。

## Considered, not proposed · 考虑过但不提议

- **横向滚动的真手卷**：NN/g 的证据是负面的，手机上更糟。
- **Engineering / Research / Art 三个栏目**：见「三面怎么放在一起」。
- **毛笔字体、宣纸纹理、水墨晕染动画**：刻板，伤可读性。
- **占满一屏的山水 hero**：把内容推出第一屏。
- **Balatro 式的 juice 用在站点外壳上**：外壳没有完成的时刻；juice 留在 Loud wins 的作品页。

## 调研的局限

- media.mit.edu 没有直接读到：对抓取返回 503，Media Lab 的页面是通过翻译代理读的，引用前要对原文；Brand Portal 只有搜索摘要。
- lingdong.works 和 rauno.me 的内容没渲染出来；valdemardanry.com 打不开。
- Gaver & Bowers 2012 全文没读到。
- 评审在 Media Lab portfolio 上花多久没有数据；3–5 分钟来自另一所学校的一位教授。
- The Met 和 Smarthistory 的原页没读到，留白和印的位置没有博物馆来源的引文。

## 修订记录

- **第 2 轮（2026-11-12）**：按 owner 的申请素材粗稿和一次冷读 review 修订。
  - 工作经历改以 PDF 为来源，加了 Design systems & tokens 和 Engineering 区块。
  - 改正职位、年数、客户范围；数字待确认。
  - 推荐改成按 Q1 分情况，用读者和内容就绪度来比，不再拿 Loud wins 给外壳排序。
  - 新增「公开前要处理的」「拍板之后」两节，Q1、Q3、Q9、Q10、Q13，以及 Q8 的三个不同方向。
  - 链接改成完整 URL，并定义了 scene、leaf、plate 和 n = 1。
  - 调研、排序和问题只留在 spike，mockup 总览不再重复。
