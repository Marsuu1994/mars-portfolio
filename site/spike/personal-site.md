# Spike: 个人网站——portfolio 的入口

**Status: awaiting owner review** · 第 5 轮 2026-11-13（C 的缩略图首页） · 缩略图 mockup：[claude.ai/artifact/784YrxKCtc3g7iDGbKPgpy](https://claude.ai/artifact/784YrxKCtc3g7iDGbKPgpy)（`site/mockup/mockup-site-thumbnails.html`） · Mockup：[claude.ai/artifact/K7wABSdSQP8PJCKCFCofTn](https://claude.ai/artifact/K7wABSdSQP8PJCKCFCofTn)（私有页面，源文件 `site/mockup/mockup-site-story.html`）· 上一轮的 mockup 原样保留：[claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5](https://claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5)（`site/mockup/mockup-personal-site.html`）· Owner 的原话：`sessions/2026-11-06-media-lab-fit.md` Round 7、8、10、11、12

> 语言约定：叙述用中文；站点自己的文案、产品名词和代码标识保留英文。**Case page** 是一个案例的详情页；**complexity figure** 是每个阶段那一张表达问题复杂度的图；**claim heading** 是写成一句判断的小标题（“I chose X over Y”），不是 “Problem / Solution” 这样的标签。

这份 spike 是唯一依据；mockup 只画方案。

## Trigger · 起因

第 1、2 轮的问题是「首页先给故事、作品还是研究问题」。第 3 轮 owner 把问题换成了叙事结构本身（Round 10 原话）：

> 看看他们portfolio或者个人主页的叙事结构，先不管visual的部分吧，我想看的是框架，比如说如何present他们的work，公司里面的？自己做的东西？页面的布局长什么样？……一条叙事主线就是 context我在wepay jpmorgan是做什么？full stack 产品sde，end 2 end，internal product，merchant facing product然后最后是large scale merchang portal 0-1 platform work这样，然后work的每个stage都选一张图能表达问题的复杂程度……然后第二条叙事线就是我的app，灵感来自agile kanban……如何有机的串起来讲一个故事或者分成两部分分开呈现，这是你的任务。……不要在已经有的mockup上面修改，重新做，保留山水禅意风格

Owner 的设计师朋友的评语，作为判断标准：

> 万变不离其中的是storytelling 怎么把故事讲清楚、不要平铺直叙、需要自己去想故事线的高光点、不重要的事情少说。但是围绕的是我在解决什么问题、我中间遇到什么困难、我是怎么思考和解决的。

所以这一轮：调研别人怎么讲；把两条线写出来，每个阶段配一张复杂度的图；给出三种讲法，加一个三者共用的案例页。只做产品和设计。

## 调研：别人的作品集怎么讲

Owner 给的截图列了 8 位设计师。读到了 4 位：Chris Goodhue、Eric Sin、Oscar Nilsson、Yiqi Zhao。另外 4 位（Jiwon Lee、Yanfeng Jin、Justin Cohen、Natasha Tenggoro）没找到站点或打不开。还看了 3 个工程师的站点作对照。截图里写的任职（Goodhue 在 Stripe、Nilsson 在 Figma）和他们站上写的对不上，待核对。

| 谁 | 首页 | 公司作品和自己的东西 | 案例页 | 来源 |
| --- | --- | --- | --- | --- |
| Chris Goodhue | 名字和一句定位；6 张只有标题的卡 | 只放公司作品 | 顶部一条元数据（Role、Date、Team）；Problem → Solution → Approach → Final → Outcomes；约 700 字；用 before / after 和组件审计图讲复杂度 | [site](https://www.chrisgoodhue.com) · [case](https://www.chrisgoodhue.com/work/vimeo-viewer-experience) |
| Eric Sin | 一句自我介绍；13 个作品的索引（名字、类型、年份） | 不区分；现雇主的工作完全不放 | 小标题写成判断：“Constraint as a Design Strategy”；一个头条数字；约 250–450 字 | [site](https://ericsin.com)（经 reader 读到） |
| Oscar Nilsson | 一长页：一句定位，按公司分段 | 公司在前、side projects 在后，同一页 | 没有案例页；每家公司一段：一句话、一个问题钩子、一个规模数字、年份和角色 | [site](https://www.oscarnilsson.com) |
| Yiqi Zhao | 一句论点；Work 和 AI Lab 是两个并列的导航 | 分开：公司作品在 Work，自己的概念在 AI Lab；About 用一条弧把经历连起来 | 最强的结构：小标题是一串第一人称的决定（“I made the first result playable”“I chose AI-native over AI-assisted creation”）；难点写成一句转折：“The pipeline worked. The model wasn't ready for creators.”；约 900 字 | [site](https://yiqizhao.design) · [case](https://yiqizhao.design/work/meta-horizon-studio) · [case](https://yiqizhao.design/work/meta-worldgen) |
| Pietro Dessotti（工程师） | 案例索引：标签、写成结果的标题、三个指标 | — | Context → Problem → Approach（“Architecture Decision: Module Federation”）→ Migration → Challenges → Outcome → Learnings；公司写 “Confidential”，图只有文字流程 | [case](https://pietro-dessotti.netlify.app/case-studies/microfrontend-platform) |
| Brittany Chiang（工程师） | 一句定位；About → Experience → Projects | 经历和项目分两段 | 没有案例页 | [site](https://brittanychiang.com) |

规律：

1. **首页上方只有三样：名字、一句定位、现在在哪。** 四位设计师都这样。
2. **首页的卡很薄，故事都在案例页里。** 卡上是标题，最多加类型和年份。
3. **案例页开头是一条元数据：** 角色、时间、团队或范围。
4. **最好的案例用判断句做小标题，不用模板标签。** Zhao 的 “I chose…”，Sin 的 “Constraint as a Design Strategy”。这正好对上朋友说的「不平铺直叙」。
5. **难点是一个有名字的转折，不是一张 Challenges 清单。** “The pipeline worked. The model wasn't ready for creators.”
6. **案例短：** 300–900 字。
7. **有数字就给一个头条数字，没有就给最强的定性变化。** Goodhue 一个数字都没有。
8. **用图讲复杂度的很少。** 只有 Goodhue 有审计图和组件图；Zhao 用文字讲取舍，图都是成品界面。这一点反而是 owner 的机会：公司作品没有能公开的截图，抽象的复杂度图既避开保密问题，又是别人少有的。
9. **保密的作品没有人用密码。** Sin 干脆不放现雇主的工作；Dessotti 写 “Company: Confidential”，只画抽象的架构。

公司作品和自己的东西怎么连，三种做法：只放公司的（Goodhue）；同一页先公司后自己（Nilsson）；两个并列的书架加一个 About 的弧（Zhao）。

## 两条线

### 主线：在 WePay 和 JPMorgan Chase

**Context**：full-stack product engineer，end to end。一条线上三个阶段，问题一个比一个大：

| 阶段 | 故事（素材 PDF 编号） | 问题 | 难在哪（那一个转折） | 怎么想、怎么解 | 复杂度图 |
| --- | --- | --- | --- | --- | --- |
| 一 · Internal tool · WePay | 遗留系统的渐进迁移（#1；后续 #3） | 风控团队的内部看板，Angular、十几层嵌套，加一个 panel 要后端配置、SRE 跑生产库脚本、后端加权限规则，三个团队 | The fix was obvious. The risk wasn't. 一次性重写会冻住风控每天在用的工具，之前提过也没推动 | 不一次性重写：让 React 在旧应用里从叶子面板往上替换，两套共存、零停机；对 PM 和经理讲成「零 UX 变化、不改 API、渐进上线」，拿到支持 | `legacy`：十几层嵌套 → App → Dashboard → Panel 的树，已迁和未迁的 panel 并排 |
| 二 · Merchant-facing · WePay | Email V2 流程（#6；后续 #7） | 大合作伙伴下载 30 天交易超时，改成异步下载、发邮件给链接 | 纸面设计多绕一层；旧邮件流程散在几个仓库、依赖要退役的单体、归属不清；第一次碰 Kafka 和邮件基础设施，牵涉三个团队 | 质疑原方案：请求时把需要的信息带上，由下载服务直接发消息；所有邮件共用一个 schema。后来这个 schema 弄崩了一条共享管道，追到根因、主持复盘 | `tangle`：散乱的服务、仓库和「owner?」 → 一条路、一个 schema、两步的指引 |
| 三 · Platform 0 → 1 · JPMorgan Chase | Commerce Center 的 shell（#10）和 onboarding 编排层（#11），design token（#12）作旁证 | 好几个门户各自只服务一部分商户；新门户要服务从小商户到大型企业、跨多个国家的所有商户，底下是并购后汇到一起的支付栈 | 各部分独立构建、独立部署：类型过不了部署边界、懒加载的部分收不到早发的事件、两份 React；开户状态散在各团队的服务里；需求和 API 在变 | 先定契约，运行时用 Zod 校验、类型从同一份 schema 推导；onboarding 做成「一切皆任务」的编排层，始终告诉商户在哪一步、下一步做什么 | `platform`：各类商户 → 按权限在运行时加载各部分的 shell → 共享组件库和 token → BFF → 各支付栈的服务 |

Owner 说第二阶段是「mature product 但是支线任务扩展到整条线 migrate 到新 structure，大大优化 process（需要用某种图来比如 messy doc 变成 clear guidance）」。Mockup 按 Email V2 的事实画成「散乱 → 一条路加两步指引」。如果 owner 说的 process 指的是别的（比如文档本身），要换图（Q6）。

### 第二条线：Mars Workbench

灵感来自 agile 和 kanban，从和朋友的白板来。用一张图讲它：七个版本，每一版拿掉一处阻力（`resistance`）。下面挂四条线：Planning is a negotiation（MCP）、Loud wins（设计已定，没实现）、Code that is mine（agent 实验）、A tool you stop needing。上一轮 mockup 里这部分已经写好，这一轮沿用内容，换成新的结构。

### 两条线之间的那座桥

素材里有一句现成的话能把两条线接起来：onboarding 编排层的核心是「始终告诉商户你在哪一步、下一步做什么」，Mars Workbench 是给自己做同一件事。用不用、用在哪，是 Q2。

## 三种讲法

三种都用同一套图、同一个案例页，区别只在首页怎么接两条线。

### A · 一条线：one story

- **结构**：一句话加三阶段的弧 → 一、二、三三章，每章是问题标题、一张图、「难 / 想 / 变」三格、一个链接 → 桥 → 四 Mars Workbench → 接下来的问题和印。
- **像谁**：Nilsson 的一长页，加上 Zhao 的 About 那条弧。
- **好处**：最像讲故事，两条线有机地连起来；每章都围绕问题、难点和思考。
- **代价**：最长；首页中间要放个人经历（团队解散、白板），要 owner 愿意公开（Q4）；桥那一句是全页的关节，不认可就散了。

### B · 两部分：two shelves

- **结构**：一句话 → Part one 三个案例，每个是文字（问题、转折、角色）加图 → 分隔 → Part two Mars Workbench：弧的图加四条线 → About 和印。
- **像谁**：Zhao 的 Work 和 AI Lab。
- **好处**：最清楚；hiring manager 和导师都能直接找到自己要的那一半；个人经历可以只留在 About。
- **代价**：两半像两份作品集，故事感最弱；朋友说的「高光」要靠每张卡的文案撑。

### C · 高光：decisions first（owner 选了这个，Round 11）

> c真的不错，不过还需要修一下文案，而且个人项目应该放最前面

选了不等于定稿：等 owner 明确 approve。第 4 轮按这句话改了 mockup，只留 C 和案例页；A、B 在 mockup 文件的上一个版本里。


- **结构**（第 4 轮）：一句话「四个决定，和让它们难的问题」，下面一行说清四个决定从哪来 → 一 Mars Workbench → 一座桥 “Before this”：同一件事，以前是给别人做 → 二、三、四 三个工作阶段，左右交替 → 全部作品，最新在前 → About 和印。
- **四个决定**：“A plan is negotiated, not generated.”（Mars Workbench）· “I didn't rewrite it all at once.”（internal tool）· “I questioned the design on paper.”（merchant-facing）· “I locked the contracts before the APIs existed.”（platform；第 3 轮是 “One shell for every kind of merchant.”，更像结果，换成素材 #11 里 owner 自己的说法「在不确定中先定契约、把依赖拆开」）。
- **每段文案**：先是问题和让它难的那一点，再是怎么想、结果是什么；每段不超过三句。
- **像谁**：Zhao 案例页里的那串决定，提到首页这一层。
- **好处**：最贴朋友的两条要求：高光先行，每段围绕一个问题和一次思考；一句话就能记住；三个在公司、一个在自己的产品，两条线自然并在一起。
- **代价**：时间线和背景要靠索引和案例页补；每句引号都要站得住，说过头就是 Pat 提醒的 “flashy”。

### 怎么比

| | A 一条线 | B 两部分 | C 高光 |
| --- | --- | --- | --- |
| 朋友的「找高光、不平铺直叙」 | 中：按时间讲，靠每章的问题标题 | 弱：靠卡片文案 | 强：首页就是高光 |
| 围绕问题、难点、思考 | 强：每章三格 | 中：卡上一行 | 强：每段一个决定和它的理由 |
| 两条线连得自然 | 强：一座桥 | 弱：分开放 | 中：四个决定并列 |
| 30 秒看到什么 | 第一章 | 三个案例和一个产品 | 四句决定 |
| 个人经历放在首页 | 要（桥） | 不要 | 不要 |
| 要准备的内容 | 最多：四章文案和桥 | 中：三个案例卡和产品段 | 中：四句决定要磨准 |

### 推荐

**C 做首页，A 的桥放进 About，案例页按下面的骨架写。** 朋友的标准有两条：找高光，以及围绕问题和思考。C 的每一段正好是一个高光加它背后的问题；A 的桥是把两条线接起来最自然的一句，放进 About，首页就不用摆个人经历。B 最稳，适合 owner 想把公司作品和自己的产品明确分开的时候。三者共用图和案例页，换首页不用重做内页。

## 缩略图首页（第 5 轮）

Owner（Round 12）：

> 先thumb nail做简略，现在东西少可以做dektop vertical留白，之后要做移动端。然后我觉得简略那部分可以一张图一段话，都是hook，比如说我们遇到什么问题？或者high level解决思路比如你画的前后架构对比？勾引人点进去看，里面就是详细内容

所以首页只放缩略：每个项目一张 16:9 的图、一段话，详细内容在点进去的案例页。只做桌面端：一栏竖排（约 760 px），卡和卡之间大留白；移动端之后再做（页面在手机宽度不会坏，但没有设计）。顺序沿用 C：一 Mars Workbench，一句 “Before this” 的桥，二、三、四三个工作阶段。缩略图是复杂度图的简化版：每张只讲一个意思，几乎没有字；每个项目画了两张，一张只画问题，一张画前 → 后。

三版的区别只在钩子：

| | 版本一 · 问题钩子 | 版本二 · 前后对比 | 版本三 · 图给答案，话留问题 |
| --- | --- | --- | --- |
| 图 | 只画问题（乱的那一边） | 前 → 后 | 前 → 后 |
| 话 | 问题和让它难的地方，常以问句收尾 | 高层的解法，一两句 | C 的那句决定，加一句让它难的问题 |
| 只扫一眼的人拿到 | 问题 | 答案和思路 | 思路（从图）和高光（从引号） |
| 点进去的理由 | 最强：想知道怎么解的 | 最弱：答案都给了 | 中：想知道「怎么做到」 |
| 文案的难度 | 中 | 低 | 高：每句都短，要磨准 |

调研里的规律是「首页的卡很薄，故事在案例页里」；导师给一份申请的时间是几分钟，不一定会点进去。所以 **推荐版本三**：不点的人从图和引号拿到思路和高光，那一句难点留给想知道怎么做到的人。版本一最勾人，适合更在意点击的时候；版本二最省力，适合不打算认真写案例页的时候。

## 案例页（三种讲法共用）

骨架来自调研（Zhao 的决定式小标题、Dessotti 的工程案例、Goodhue 的元数据）加朋友的标准。每一节一个小标签加一句判断：

1. **标题写成问题，加一句钩子。** “A legacy tool nobody wanted to touch.”
2. **元数据**：Role · Team · Users · Stack · When。Fluid Interfaces 要的 role 在这里。
3. **一张复杂度图**：这个案例就讲这一张。
4. **The problem**：一句判断（“Adding one panel took three teams.”），两三句背景。
5. **What got hard**：那一个转折（“The fix was obvious. The risk wasn't.”）。
6. **How I thought**：“I chose X over Y”，两个方案并排，选中的那个框粗一些；然后是怎么说服别人。
7. **What changed**：最强的变化，有可公开的数字就给一个。
8. **What I kept**：一句反思，用素材里 owner 自己的「品质落点」。

300–600 字。Mockup 用第一阶段画了一页完整的。

## 视觉语言

沿用第 1、2 轮，不变：纸、墨分五色、浅绛两个淡彩、一方朱印；Geist、Source Serif 4 配思源宋体、Geist Mono；山由代码画。对比度量过，日间和夜间两版。复杂度图也用同一套墨：线是重和淡两档，已完成的是焦墨实心，未完成的是虚线，乱的那一边用赭石线，全页唯一的红仍然只是印（和天上的 Mars）。

| Token | 日间 | 对 paper | 夜间 | 对 paper | 用途 |
| --- | --- | --- | --- | --- | --- |
| 焦 | `#1b1f26` | 15.0 | `#e9e6de` | 14.5 | 标题；图里已完成的部分 |
| 浓 | `#42454a` | 8.7 | `#c3c0ba` | 10.0 | 正文 |
| 重 | `#606266` | 5.5 | `#a09f9b` | 6.8 | 注；图里的线 |
| 淡 / 清 | `#a8a8a6` `#d7d6d2` | 2.2 / 1.3 | `#606161` `#313336` | 2.9 / 1.4 | 线、远山；不作文字 |
| 花青 · 赭石 | `#3d5a6c` `#8a5a3c` | 6.6 · 5.3 | `#9dbccd` `#d1a283` | 9.1 · 7.9 | 远山；图里的迁移方向和乱线 |
| 朱砂 | `#b8322a` | 5.4 | `#e8695a` | 5.7 | 印；Mars |

手机上复杂度图保持 600 px 宽，可以横向滑动；正文不横向滚动。

## 公开前要处理的

Owner（Round 11）：「这些公开应该也没问题吧」。下面是事实，判断是 owner 的。

- **站上现在有的**：公司名（WePay、JPMorgan Chase）；团队的类型（风控团队、合作伙伴、商户）；问题和做法的描述；抽象的复杂度图，只画「做什么」，没有内部系统的样子；几个工程上的数字（十几层、二十多个 panel、三个团队、30 天）；owner 的角色。
- **站上现在没有的**：内部系统名（素材 PDF 里的那些代号）、合作银行的名字、业务数字（例如开户的商户数）、截图、代码。
- **决定能不能公开的是什么**：员工入职时签的保密协议和雇主的对外披露政策，通常覆盖不公开的信息，比如内部系统名、架构细节、内部指标和未公开的计划。某一条算不算，看具体的协议条文。
- **调研里别人的做法**：要么不放现雇主的工作（Sin），要么写 Confidential 只画抽象的架构（Dessotti）；没有人用密码。
- **还是事实层面要确认的**：年数（约 5 年还是从 2021 年算）、Lead 从哪一段开始；Mars Workbench 只有 owner 一个用户。

## 待拍板 · Open questions

| # | 问题 | 选项 | 推荐 |
| --- | --- | --- | --- |
| Q1 | 首页用哪种讲法 | A 一条线 · B 两部分 · C 高光 | **Owner 选了 C**（Round 11），等 approve |
| Q2 | 两条线之间的桥（「告诉一个人他在哪一步、下一步做什么」） | Mars Workbench 和工作之间（第 4 轮画的） · 只在 About · 不用 | 第 4 轮放在中间：个人项目放到最前面之后，它正好是从自己的产品转回工作经历的那一句 |
| Q3 | C 的四个决定和文案 | 第 4 轮的四句 · 再改 | 第 4 轮改了一遍；owner 说的「还需要修一下文案」具体指哪里，等 owner 指出 |
| Q4 | 个人经历（团队解散、白板和朋友）公开到哪 | 首页 · About · 都不放 | Owner 定 |
| Q5 | 每个阶段的图对不对 | 现在三张 · 换 | Owner 看了再说 |
| Q6 | 第二阶段的「process」 | 邮件流程（现在画的） · 文档本身 · 别的 | 要 owner 说明 |
| Q7 | 案例页先写哪几个 | 三个阶段各一个 · 加 Mars Workbench 一个 | 四个都写，先写第三阶段 |
| Q8 | 数字和名称 | 见「公开前要处理的」 | Owner 认为可以公开（Round 11）；以雇佣协议为准 |
| Q9 | 首页那句话 | A：“I take a messy process and make it something people can get through.” · B：“I build end to end, and I build to be understood.” · C：“Four decisions, and the problems that made them hard.” | 看 Q1 |
| Q11 | 缩略图的钩子 | 版本一 问题 · 版本二 前后对比 · 版本三 图给答案、话留问题 | 版本三 |
| Q12 | 缩略图本身 | 现在八张（每个项目「只画问题」和「前 → 后」各一张）· 换 | Owner 看了再说 |
| Q10 | 研究的一面放哪 | 首页不放，只在 Mars Workbench 那条线和 About 里 · 加一个 Research 页 | 先不加：这一轮 owner 的重点是作品的叙事 |

上一轮的问题里，首页先服务谁（原 Q1）、三面怎么标、印、山水的量、中文版、Mars 那一点红、Students Offering Support 仍然开着，在[上一个版本](https://github.com/Marsuu1994/mars-portfolio/blob/3b7140f/site/spike/personal-site.md)里。

## 风险

- **图讲错了事实**：三张复杂度图是按素材 PDF 画的抽象图，owner 要逐张核对（Q5、Q6）。
- **说过头**：C 的引号要和事实一致；第一句已经从 “I didn't rewrite it” 改成 “all at once”，因为迁移本身就是一次重写，只是渐进的。Loud wins 只能写「设计已定」。
- **一个产品撑起第二条线**：Mars Workbench 只有一个用户，作品页要把 n = 1 写在明处。
- **英文文案是草稿**：mockup 里的句子是 agent 按素材写的，正式文案要 owner 过一遍。

## Considered, not proposed

- **按公司分栏（WePay / JPMorgan Chase）**：读者关心的是问题一个比一个大，不是组织图；三阶段已经带着公司名。
- **密码保护的案例**：调研里没有人这样做；抽象的复杂度图已经避开了截图的问题。
- **每个阶段放多张图**：朋友说不重要的少说；一个案例只讲一张图。
- **在上一轮的 mockup 上改**：owner 要求重新做。

## 调研的局限

- 8 位设计师只读到 4 位；Eric Sin 的站点是经 reader 读的，图没看到。
- 截图里的任职和站点上的不一致（Goodhue、Nilsson），没有核对。
- 工程师的例子只有 3 个，挑的是能读到的，不代表业内常态。

## 修订记录

- **第 1 轮（2026-11-11）**：视觉语言，三张首页（先给故事、作品还是研究问题）。
- **第 2 轮（2026-11-12）**：按申请素材和一次冷读 review 修订事实和推荐。
- **第 3 轮（2026-11-12）**：owner 把问题换成叙事结构。新的调研（设计师作品集），两条线，每阶段一张复杂度图，三种讲法，共用的案例页；新 mockup，上一轮的 mockup 原样保留。
- **第 5 轮（2026-11-13）**：owner 提出缩略图首页：一张图一段话、都是钩子、桌面端竖排留白。新 mockup 画了三版钩子和一页并排对比；缩略图是复杂度图的简化版。
- **第 4 轮（2026-11-12）**：owner 选了 C，要求个人项目放最前面、改文案。Mockup 只留 C 和案例页；Mars Workbench 放第一；桥移到它和工作经历之间；第四个决定换成「先定契约」；文案统一成两段；索引最新在前。
