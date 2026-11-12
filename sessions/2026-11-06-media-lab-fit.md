# 2026-11-06 · Media Lab fit：app 能不能做成 portfolio

一个 Claude Code 的 cloud session，在 `mars-workbench` 仓库里读代码和文档，对照 Media Lab 的官方招生页。

## Round 1 · 2026-11-06

> 我对mit media lab的ms/phd项目很感兴趣，你觉得我的app能做成portfolio吗，如果要做你会怎么做

### Findings

- **作为效率 app 本身，新意不够**：看板 + Eisenhower matrix 是拥挤的品类，Media Lab 看重的是新问题、新交互和以人为对象的探索。
- **仓库里少见的是两样东西**：
  - 人和 AI 共同规划：Claude 通过 MCP 读 context，先 recap、再问、同意了才写；有 consent 页和聚焦上限（3 个 habit、4 个 project）。这些是在回答「AI 能改你的计划时，人的自主权怎么设计」。
  - 量化地指挥编码 agent：`experiments/page-structure-parallel` 十个 run、盲审、Mann–Whitney（串行更快，并行贵 1.49 倍）；`reviews/` 把 CI 漏掉、人工 review 抓到的问题存成数据集；subagent 委派的三轮 A / B。
- **缺口**：没有别的用户；spike 和报告是中文；app 要 Google 登录，评审进不去。
- **做法**：先定 1–3 个组（Fluid Interfaces 最贴）再定叙事；一条主线（人和 AI 共同规划）、agent 实验当「我怎么做研究」的配角；补一点以人为对象的数据（至少 n=1 的使用数据）；1–2 分钟演示视频 + 英文 case study + 一页实验摘要。
- **硬约束**：官方 FAQ 写截止 12 月 1 日（旧 FAQ 写 12 月 15 日），以当期页面为准。

**README:** 新建；「申请的硬事实」一节来自这一轮。

## Round 2 · 2026-11-11

> 我觉得现在最大的问题就是没有找人去试用我的app，因为我自己觉得打磨不够好，但是叙事能不能这么说呢，我自己作为app的开发加使用者，一代代iteration，现在做的phase2正是基于我日常观察到的痛点和摩擦作出的改进，怎么减少habit track的使用麻烦然后放大完成任务的成就感让人更follow自己定下来的计划

### Findings

- **能这么说，HCI 里有现成的名字**：autobiographical design（Neustaedter & Sengers, DIS 2012）；更大的框架是 research through design（Zimmerman et al., CHI 2007）。要把它写成一个方法，不写成对「没找人试用」的解释。
- **Phase 2 spike 已经是研究笔记的样子**：有日期的观察（10/13、10/14、11/03）、逐条对到文献（Etkin 2016、Harkin et al. 2016、Zuckerman & Gal-Oz 2014、Milkman et al. 2021 …），而且有反直觉的结论。
- **措辞**：「让人更 follow 计划」在 n=1 下只能说是「对我」或一个假设——放进 Statement of Objectives，变成想去验证的问题。
- **局限要主动写**：只有一个用户，而且这个用户就是设计者；Phase 2 是 draft + mockup。
- **关于找人试用**（只陈述事实，决定是 owner 的）：小试点不需要打磨好的产品；自传式设计论文常见的做法是最后找 2–5 个人用一两周加一次访谈，写成初步观察。

**README:** 「当前叙事」的第 1 幕和「还开着的」里的「只有一个用户」「Phase 2 的实现状态」。

## Round 3 · 2026-11-11

> 我觉得spike后面的结果说那个庆祝这个，实际感受下了来其实和research的不一样，真正的use case我不会一次性mark很多张卡片对吧，然后我给每种完成加上了游戏感很强的随机juice参考balantro，现在的focus是在尽量减少habit tracking的摩擦同时增强完成habit的成就感，这是我推翻原有假设作出的新假设，现在就是要按这个方向开发，你可以去看看mockup tap to complete那个branch的改动看看新方向，然后还有一个我想到的点就是，我跟着这个app逐渐养成去gym的习惯，慢慢的降低需要app的地方，我的愿望是做一个能让user不需要的app，变得更好的app，后一阶段的设想就是在user ai之间的优化，主要是通过ai怎么做到一个executive function coach的角色，这个就需要更多user data和experiment来对现有的prompt做eval，甚至mcp自身的局限性，我们可能自己做一个agent，但是core就是了解user习惯，怎么enable human

### Findings

- **看了 `claude/board-tap-to-complete-mockup`（PR #115）**：design principles 的核心句是 *take resistance away, amplify feedback*；新增 3 · Loud wins（强反馈、随机变化、越大的赢越大的反馈、反馈落在某处）；完成时从四种 Balatro 式 juice（Wobble、Shine、Burst、Flip）里随机挑一种、不连续重复，再把卡抛进今天的进度环。推翻的过程在 `reviews/pr-115.md` 第 22–25 轮。
- **推翻文献对叙事是加分**，只要讲清为什么不一样：
  - 使用密度：一天几次、一次一张，习惯化的前提（频繁、批量）不成立；
  - Spike 否定的是分数（抽象、累加、评判），它自己引用的 Woolley & Fishbach 2017（即时奖励）和 Harkin 2016（当场反馈）反而支持「完成那一刻要强」——「不要分数」被推广成了「要安静」；
  - 随机变化对抗习惯化（原则 3.2）；外部奖励的破坏效应集中在预期中、有条件的实物奖励上（Deci, Koestner & Ryan 1999，待核对）；
  - Game juiciness 有实证研究（Hicks et al.，待核对），可以给「参考 Balatro」找学术上的对应。
- **要老实写**：新假设现在来自点 mockup 的感受和推理，没有在真实 app 里每天用过；实现后要有有日期的记录。
- **「让用户不需要的 app」把三个阶段串起来**，也回答了「随机奖励 = 老虎机」的质疑：强反馈是脚手架，自动化之后撤（scaffolding and fading）；habit lifecycle 的 Completed 已经编码了这件事；gym 是第一个完整案例；对照 Renfree et al. 2016（streak 和 reminder 制造依赖）。可量化的候选：SRBAI（Gardner et al. 2012，待核对）、Completed 之后行为是否持续、Lally et al. 2010 的自动化曲线。
- **Executive function coach**：和 Fluid Interfaces / AHA「增强而非替代」的方向贴；`experiments/` 的方法可以迁移到 coaching prompt 的 eval，两条线在这里合流；MCP 的局限是具体的（只能被动等用户开口、没有跨会话的用户模型），是自己做 agent 的动机。Framing 的事实：EF 常和 ADHD 挂钩，以临床人群为对象会变成健康相关研究。

**README:** 「当前叙事」改成四幕（加第 2、3、4 幕）和英文草稿；证据索引加 PR #115；「还开着的」加新假设未落地、「不需要 app」怎么量、随机奖励的伦理、EF 的 framing。

## Round 4 · 2026-11-11

> 我觉得可以做个branch，记录我们的对话和finding，一路brainstorming，这条path会越来越清楚

### Findings

- `mars-workbench` 是 public 仓库，推上去等于公开申请的叙事和策略；owner 选了另建一个私有仓库，就是这里。

**README:** 新建这个仓库的结构（README / AGENTS.md / sessions/）。

## Round 5 · 2026-11-11

> 好，订阅这个 PR，然后我还有个想法就是evolotion of mars workbench，本身只是做一个类似chatgpt的toy project，show case我的human llm interactive UI 能力，包括streaming output，state management，慢慢的演变成为一个做一个我有用的项目，灵感来源于agile workflow，之前和我的朋友自己manual的在白板上面记录，健身，吃饭，读书，戒烟，成功让我们两个变成了更好的人，那么我的想法就是把这个做成app，因为我那个时候失业，gap的时间很长，我需要好好计划我的时间来做什么，一开始基本就是一个jira，然后项目自动生成像现在的habit，我手动添加plan，后面又从therapist那边学到了priority matrix（这个也是pain point之一，没有deadline会忘）用了一阵子感觉有的时候在外面不好用，做成了mobile app，后面懒得plan懒得自己手动加东西，做了inapp llm planning wizard，用context + prompt engineering，后面还是觉得不好用，plan这个东西是一轮轮和agent一起商量出来的，planning wizard局限性很高，一轮出一次结果，我还要一轮轮去调整，而且不懂我，我在想如果能有一个更懂我的agent就好了，自然而然想到了能不能直接连接我的claude，我每天做的更多的是和claude协作，于是自然而然的就演变成为了一个mcp enable的planner，非常自然，在claude那边商量好然后用mcp添加，我和claude brainstorm，claude也知道我的习惯，然后根据我自己定下来的app context，去给我做推荐（server instruction建议这个也是我之后要做的，比如habit希望focus在3个，project控制在4个，现在已经有，但是focus factor这边其实也是一个很好的research方向）。然后演进到phase2，但是phase2之前我先做的事情是发现了我的代码质量有很大的问题，之前都focus在产品部分，engineering excellent部分没有管，现在代码越来越臃肿，而且我希望去publish我的产品，在那之前我需要打磨到我自己满意的标准，如何加速开发，更好的利用agent作出真真正正属于"我"属于mars的代码，而不是agent自己的代码，开始研究harness，在这个过程中也是做了experiment，提出假设，做实验验证，实验setup出问题调整这一系列事情，也陷入到了完美主义，没做之前就在设想最好的agent开发模式，卡住了很久，后面和人交流之后发现实践出真知，真正的get hands dirty，去和agent一步步认真review之前没管过的agent rule，优化开发流程，真正把我的app当做一个产品去弄，也和desinger朋友探讨ux的问题，同时也克制自己完美主义和实践。真的主线就是遇到问题，研究，研究卡住，实践，解决问题，这么一个loop，不停的迭代优化。所以才有了phase2，不光是uiux，亮点很多，daily rhythm给入口，开启一天，结束一天，配合notification做提醒，但是提醒怎么设计也是一个研究问题，我的直觉是太多了很烦，但是太少了没效果，而且现代人一堆notification怎么做到突出呢？如何让我的app真的变成无阻力，可能还是要做成app原生的widget。类似这种，我的想法很多，而且天然贴近用户，也从心理和认知角度走，这些其实可以挖掘出很多研究方向，但是我欠缺的就是一个platform，其实研究方法也知道，我之前还想着设计mcp feedback入口来collect user prefrence这样就能更好的analyze user pattern，publish也是为了得到更多反馈

### Findings

- **Git history 给演化提供了有日期的证据**（`mars-workbench` 的 `main`，197 个 commit）：

  | 日期 | 节点 |
  | --- | --- |
  | 2025-11-25 | 第一个 commit |
  | 2025-12-09 – 2026-02-05 | ChatGPT 式 chat：chat UI、Zustand、`useChat` + streaming、OpenAI、Prisma、多会话、LLM 生成标题 |
  | 2026-02-12 – 02-20 | 转向看板：kanban schema、drag-and-drop、plan 流程、template、progress dashboard |
  | 2026-02-25 | Eisenhower priority matrix 的设计（2026-07-02 实现，#8、#9） |
  | 2026-03-08 – 03-09 | Supabase Auth + Google OAuth、Vercel、PWA 和手机 UI |
  | 2026-06-27 – 06-29 | App 内 AI plan：`generateDraftPlanAction`（结构化草稿）+ plan assistant chat |
  | 2026-10-05 – 10-07 | MCP 1/5–5/5（#39–#45） |
  | 2026-10-08 起 | Week model Phase 1（projects） |
  | 2026-10-14 – 10-21 | Quality gate：AGENTS.md 精简（#64、#70）、**app 内 LLM planning 下线，只走 MCP（#69，10-17）**、本地 Supabase stack（#74）、test baseline（#75） |
  | 2026-10-27 – 10-31 | page-structure-parallel try2（十个 run、盲审） |
  | 2026-10-13 – 11-03 | Phase 2 痛点 spike，两轮 |
  | 2026-11-06 – 11-10 | Tap to complete mockup，PR #115 |

- **每次转向都在拿掉一处阻力**：白板 → app；桌面 → 手机；手动加 plan → LLM wizard；一轮出结果的 wizard → 在 Claude 里多轮商量、MCP 写入；打开 app → widget / notification。「take resistance away」是整段历史的方向，不只是 Phase 2 的原则——叙事因此是连贯的。
- **Wizard → MCP 是和研究最相关的一次转向。** 两条 finding：plan 是一轮轮商量出来的，不是一次生成的；用户已经在协作的那个 agent 比 app 内的 agent 更懂他——把工具接到用户的 AI 那里，而不是在工具里再造一个 AI。#69 是这个判断落地的证据。
- **两份 statement 对应两个故事。** Media Lab 的材料里 Personal Statement 和 Statement of Objectives 都要：演化、那个 loop（问题 → 研究 → 卡住 → 实践 → 解决）、从完美主义转向实践，是 Personal Statement 的材料；研究问题是 Statement of Objectives 的。那个 loop 也正是自传式设计的方法本身。
- **候选的总论点**：产品（AI 帮用户养成自己定的习惯，然后撤掉）和 harness（agent 写出属于「我」的代码）问的是同一件事——AI 放大人自己的意图，而不是替代它。是否采用由 owner 定。
- **候选的研究方向**，都来自自己用出来的问题：focus factor（3 / 4 的上限）、notification 的时机和突出（receptivity、JITAI、alert fatigue）、零阻力的入口（widget、glanceable display）、daily rhythm、MCP 的 feedback 入口（ESM 式的当场收集）、人和 agent 共同开发。文献入口都是凭记忆，待核对。
- **平台和数据的事实**：把产品使用数据用于学术研究，一般需要知情同意和机构的 IRB 审查（或豁免认定）；收集时没有研究用途同意的数据，事后再用更难；上线时就设计好隐私政策和同意，可以把这条路留着。
- **个人经历**（白板和朋友、失业的 gap、therapist）写不写进申请，是 owner 的决定；这里只记录。

**README:** 「当前叙事」改成两部分——Personal Statement 的演化表和 loop、Statement of Objectives 的研究弧线（原来的四幕）——加上候选总论点和候选研究方向表；证据索引加 git 时间线、#69、#39–#45；「还开着的」加用户和平台（IRB 的事实）、个人经历、总论点、英文草稿的时间说法；英文草稿去掉了没核实的「since October」；文献加 Mehrotra、Nahum-Shani、Consolvo。

## Round 6 · 2026-11-11

> 现在基本上把我的心路历程都写出来了，这对我申请写ps等等有很多优势，你能抽出来哪些值得我去和哪些professor套瓷的点？

### Findings

查的是 Media Lab 的新闻、group 和 people 页的搜索摘要；直接打开 applicant information 页时 Media Lab 的服务器返回 503，所以下面每一条都要在官网当期页面上再确认。

- **Pat Pataranutaporn · Cyborg Psychology**（2025-09-01 起任 Assistant Professor，AHA program 的 co-director；Fluid Interfaces 的博士）：研究 AI 怎么增强或削弱人的学习、决策、批判性思考，实证工作包括对 AI companion 的情感依赖。搜索摘要说 applicant 页在招 2026–2027 的 MS / PhD，列了几个 track（其中一个是 long-term human-AI interaction）——另一次搜索没能确认 track 的说法，待核对。他给申请者的建议：申请前尽量和 PI 或组里的学生聊，第一次联系要短，可能不回。对接点：「让用户不需要的 app」正面回应依赖问题；n=1 的长期使用就是 long-term human-AI interaction；AI coach 的「什么时候放手」。
- **Pattie Maes · Fluid Interfaces**：设计让 AI 支持而不是替代人的思考；主张 AI 有时要引入 productive friction（问问题、促发反思）；cognitive debt 的研究；「Don't Just Tell Me, Ask Me」（AI 用提问的方式解释，提高人的逻辑判断）。对接点：MCP guide 的规则「Ask before you assume, propose before you write」正是让 AI 问而不是替人定；wizard → 多轮商量让人留在思考里。一个有意思的张力：产品的原则是给**执行**减阻力，Maes 说的是给**思考**加摩擦——计划的商量是后者，打勾是前者。**状态待核对**：一个缓存的 group overview 写着「not currently accepting new students」。
- **Cynthia Breazeal · Personal Robots**：robotic positive psychology coach（RO-MAN 2020 best paper；宿舍里 35 人的可行性研究；70 人、8 周比较 assistant / coach / companion 三种机器人，companion 式的 therapeutic alliance 最强，well-being 和 readiness to change 都更好）。对接点：AI coach 的角色设计、长期关系、「coach 还是 companion」。
- **Karrie Karahalios · Social Algorithms**（2025-09 回到 Media Lab 任 Full Professor）：contestable systems，让人能理解、质疑、塑造算法的决定；algorithmic audits。对接点：用户自己定的规则（3 个 habit、4 个 project）约束 AI 的建议；consent 页；「propose before write」让用户能拒绝 AI 的计划。
- **Rosalind Picard · Affective Computing**：wellbeing、wearable；FAQ 说一年很少收超过 1–2 个学生，有的年份不收。对接点：notification 的时机和情绪状态、daily rhythm。
- **Ramesh Raskar · NANDA**（Camera Culture）：建在 MCP 和 A2A 之上的 agent 基础设施（发现、身份、信任）；论文认为 MCP、A2A 解决不了规模化的信任和协调。对接点只在「MCP 的局限、自己做 agent」那条线，偏基础设施，不在人的行为上。
- **Paul Liang · Multisensory Intelligence**（2024-09 起）：多感官 AI、human-AI symbiosis，部署在 mental health 等问题上。对接点：从用户数据建模习惯；偏 ML。
- **事实**：AHA（Advancing Humans with AI）是多位 faculty 的 program，目标是促进 human flourishing 的人机交互；发布会上有 Deb Roy、Andrew Lippman、Picard、Breazeal、Resnick、Machover、Maes、Pataranutaporn。申请表最多填 3 个组或导师。
- **套瓷要用的材料**：私有仓库评审看不到；需要一个公开的英文页面（case study + 视频）给邮件附链接。

**README:** 「还开着的」里「对准哪几个组」改写成新的一节「可能对接的导师」（每位一行：方向、对接点、状态）；文献加 Maes 组的两篇和 Breazeal 的 coach 研究（待核对）。

## Round 7 · 2026-11-11

> ok，我现在要给你一个大任务，基于我们聊天的内容，我们来构思一下我的个人网站作为portfolio入口这个新项目，visual style方面的话我想你直接去搜mit media lab的page，不是说布局而是typography，颜色使用这一类，淡雅，而且我希望融进我想要的山水画禅意风格。内容的话其实我对portfolio要做什么不了解，你结合我的background，research interest，还有之前上班的经历，帮我做个research，个人网站兼portfolio做什么，放什么内容，每个内容的话有什么用，怎么展示既有engineering的一面和researcher的一面还有甚至artist的一面—这也是最近挖掘出来的，工作中我把每一个pr当成艺术品来polish，对我产品也是精修细致打磨，engineering部分agent workflow也是同样理念。我觉得你要去看board tap complete那个pr，看那边列出来的design principle，虽然那个主要针对产品，但也能看出我的preference，以这个为基调，给我research然后做一份spike加上两到三份mockup，做不同option得portfolio high level mockup，不同考虑代码部分，咱们只做产品和design

### Findings

- **读了什么**：`mars-workbench` PR #115 分支上的 design principles（六组）、`ui-design` skill、mockup 和 spike 的规范、design language 的 typography 和 contrast 一节；owner 的简历（Drive 2026-03 版和 Indeed）；两路 web 调研（portfolio 内容和 12 个范例站点；Media Lab 的识别系统、山水画的概念、字体）。
- **Media Lab 的字和颜色**：Neue Haas Grotesk（Helvetica 的复刻）；Brand Portal：“primary colors are black, white, and grey”，辅助色 “one color at a time”。media.mit.edu 对抓取返回 503，网站 CSS 的具体数值没读到。
- **Portfolio 的官方要求**：URL 或 PDF；curated；“highlight who you are”；“provide context around your work”。Fluid Interfaces 逐条要 role、innovative、results。Tangible Media 评估网站本身的 aesthetics 和 usability。一位教授说每份申请看 3–5 分钟。
- **范例站点的三种首页**：statement-first 的单页、作品索引、先说在想什么再给作品。Art 很少单开一栏。
- **设计**：一套语言（纸、墨分五色、浅绛两个淡彩、一方朱印；Geist + Source Serif 4 / 思源宋体 + Geist Mono；山由代码画；印只在页尾盖一次，对应 Loud wins），三张首页（A 手卷、B 册页、C 远山），一个共用的作品页结构，三面用 造 · 问 · 磨 标在每件作品上。推荐 C 做骨架、B 做 Work 页、A 做 About。
- **工作经历里的一条线**：JPMorgan 的 onboarding 是带别人走完 milestone，Cerner 做的是任务管理，Mars Workbench 是给自己做的同一件事。写进了 spike 和 A 的第一个 scene；是否进叙事由 owner 定。
- **时间上的事实**：Apply 页写 12 月 15 日截止（和 FAQ 的 12 月 1 日不一致）；Students Offering Support 的表单 11 月 13 日关。
- **产出**：`site/spike/personal-site.md`、`site/mockup/mockup-personal-site.html`、私有 artifact 链接。Q1–Q9 等 owner 答。

**README:** 新增「个人网站（portfolio 的入口）」一节和 `site/` 的目录说明；「公开的套瓷材料」改成指向 `site/`；硬事实更新截止日期的两种说法、Students Offering Support、portfolio 的格式要求；证据索引加工作经历。`AGENTS.md` 加第 8 条（`site/` 的规则）。

## Round 8 · 2026-11-12

> https://www.media.mit.edu/groups/cyborg-psychology/projects/
> 你来pickup fabel的没做完的工作，这个link是我想去的组的link，你看看能不能access，就看能不能fetch

> @"…Application_Material_Draft.pdf" 我再给你工作的context，你重新review上个这个session的work，甚至我觉得你可以用subagent with zero context，然后类比mars workbench里面的rule，材料，再好好的修一下spike，我等你的结果

> 有个要提醒的就是我给你的文件里面有project的部分，但那部分的信息很片面，如果有conflict你以我们这个branch上面积累的东西为主

### Findings

- **Cyborg Psychology 的项目页**：直接访问 media.mit.edu 返回 503；经 Google 翻译代理能读到，列了 11 个项目。和 owner 方向最贴的是 Future You（和未来的自己对话、自我反思和成长）和 AI Wrapped 2025（回顾一年的 AI 对话）；Atlas of Human-AI Interaction 是给研究问题定位的地图。描述是转述，引用前对原文。
- **申请素材粗稿（PDF，2026-11-05）**：约 5 年在 WePay → JPMorgan Chase 一条线上，14 个工作故事；四个核心品质（钻研、Ownership、探索精神、出错就改）；工作方法（先设计后实现、文档是产品的一部分、把教训变成机制、敢于删掉自己做过的东西）。它的项目部分和本仓库有出入（MCP 的时间、是否有早期用户），按 owner 的话以本仓库为准。
- **冷读 review**（一个没有本对话上下文的 subagent，按 `mars-workbench` 的 spike 和 mockup 规则、Principles、本仓库规则和 PDF 读 spike）的主要发现，核对后都成立：
  - 工作经历只用了简历，PDF 里最能撑起 engineer 和 artist 两面的故事没进来：onboarding 编排层、micro-frontend shell、和设计师一起的 design token 主题化、第一个 BFF、静默丢数据之后的规则。
  - 职业事实有误或未确认：Lead 只是 Commerce Center 那一段；「四年」抹掉了 WePay；「small business」应为各类商户；40% 和「5 个以上服务」PDF 说没有数字。
  - 推荐建立在「第一批读者是导师」上，这是 owner 的取舍；排序表里没有一行支持 C。
  - Loud wins 被拿来给站点外壳排序；把 pill 当成 Honest controls 禁止的东西，而 6.1 列了 pill。
  - 「daily use said loud」说过头：Loud wins 还没实现。
  - 公开站点上的敏感项（内部系统名、合作银行名、数字、个人信息）没有列出。
  - 链接不是完整 URL；Q6 的三句候选其实是同一句；spike 和 mockup 总览重复，已经对不上。
  - 做得好的：头部和语言约定、来源和局限的老实、对比度数值（16 个全对）、作品页九段、「没走的路」。
- **改了什么**：spike 第 2 轮修订（以 PDF 为工作经历来源；七个工作故事按站点用途挑选；Design systems & tokens 作为 artist 一面的硬证据；推荐按 Q1 分情况；新增「公开前要处理的」「拍板之后」；Q1–Q13；完整 URL；术语定义；修订记录）。Mockup 改掉错的事实和说过头的文案，B 的 Before this 换成 Engineering；总览只留方案并排和视觉语言，其余指向 spike。
- **时间**：Students Offering Support 的表单 11 月 13 日关（Q13）。

**README:** 「个人网站」一节改写为修订后的状态；证据索引里的工作经历改以 PDF 为来源，简历只留教育和更早的经历；「公开的套瓷材料」指向 Q1–Q13 和「拍板之后」。`AGENTS.md` 第 8 条写明 Principles 在 PR #115 的分支上，以及 spike 是唯一依据。

## Round 9 · 2026-11-12

> 把pdf以draft存在仓库吧，然后我们关于app的那些讨论，就是心路历程那一段，做portfolio之前，你帮我整理一下做成一个md，不用commit，我下载下来作为另一个session的素材

### Findings

- 申请素材粗稿存为 `materials/application-material-draft-2026-11-05.pdf`，标为 draft：它是 owner 给学术中介的原始素材，项目部分和本仓库冲突时以本仓库为准（Round 8）。
- 心路历程（Round 2、3、5 的内容）另整理成一份 md 给 owner 下载，按 owner 的要求不进仓库。

**README:** 目录说明加 `materials/`；证据索引里工作经历的来源改成指向仓库里的 PDF。
