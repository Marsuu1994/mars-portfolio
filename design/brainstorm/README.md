# Portfolio · Mars Workbench as research

The owner's brainstorm — kept in `design/brainstorm/`, apart from the site's code — on turning [Mars Workbench](https://github.com/Marsuu1994/mars-workbench) into a research portfolio for a graduate application (MIT Media Lab MS/PhD, MAS program). Private on purpose: the narrative, the strategy and the conversations stay out of the public product repo.

This page is the **current state** — the narrative as it stands, the evidence behind it, what is still open. It is rewritten as the path gets clearer; how it got here lives in `sessions/`.

> 语言约定：叙述用中文；要放进申请材料的草稿用英文；论文、产品名和代码标识保留原文。

## How it is organized

```text
design/brainstorm/
├── README.md          # this page: the current narrative, evidence, open questions, facts
├── AGENTS.md          # rules for the agent that adds a session
├── sessions/
│   └── YYYY-MM-DD-<topic>.md   # one brainstorm session: the owner's words, the findings, what changed here
└── materials/         # the owner's own source material, as given (drafts; the repo wins where they conflict on the project)
```

The repository's root is the site itself, a Next.js app; its design (spikes, mockups) lives beside this folder in `design/` (`design/README.md`).

## 当前叙事

申请要两份 statement，正好对应两个故事：**Personal Statement 讲这个项目怎么长出来**（演化和那个 loop），**Statement of Objectives 讲想去研究的问题**（四幕的研究弧线）。

**候选的总论点**（owner 还没定）：*AI that amplifies a person's own intent, not replaces it.* 产品这边是 AI 帮用户养成**自己定的**习惯、最后撤掉；开发这边是 agent 写出「属于我、属于 Mars」的代码，而不是 agent 自己的代码——两条线问的是同一件事。

### Personal Statement：演化

每一次转向都是在拿掉一处阻力；「take resistance away」不是 Phase 2 的新想法，是整段历史的方向。

| 阶段 | 什么时候 | 遇到的问题 → 转向 |
| --- | --- | --- |
| 白板 | app 之前 | 和朋友在白板上手动记健身、吃饭、读书、戒烟，灵感来自 agile，两个人都变成了更好的人；那段时间失业、gap 很长，需要好好计划时间 |
| ChatGPT 式 toy project | 2025-11 – 2026-02 | 展示 human–LLM 交互 UI 的能力：streaming、Zustand 状态管理、多会话 |
| 类 Jira 的看板 | 2026-02 起 | 把白板做成 app：手动加 plan，模板自动生成任务（今天 habit 的前身） |
| Priority matrix | 2026-02 设计，2026-07 实现 | 从 therapist 那里学到 Eisenhower matrix；没有 deadline 会忘（至今是痛点） |
| 手机 / PWA | 2026-03 | 在外面不好用 → 做成可安装的手机 app |
| App 内的 LLM planning wizard | 2026-06 | 懒得手动 plan → context + prompt engineering 生成草稿；但一轮出一次结果、要一轮轮自己调，而且不懂我 |
| MCP planner | 2026-10 | Plan 是和 agent 一轮轮商量出来的 → 直接连我每天在协作的 Claude：在 Claude 那边商量、通过 MCP 写入；server instructions 带上我定的规则（3 个 habit、4 个 project）；app 内的 wizard 随后下线 |
| Harness 和 engineering excellence | 2026-10 | 代码越来越臃肿、想 publish → 研究怎么让 agent 写出属于我的代码：提假设、做实验、调 setup；陷进完美主义卡了很久，和人交流后转向实践，一条条 review agent rule、和 designer 朋友谈 UX |
| Phase 2 | 2026-10 起 | 真实使用的痛点：减少 habit tracking 的摩擦、放大完成的反馈；daily rhythm（开启一天、结束一天）、notification、widget |

**贯穿的 loop：** 遇到问题 → 研究 → 研究卡住 → 实践 → 解决 → 再迭代。这也正是自传式设计的方法本身。

### Statement of Objectives：研究弧线

1. **观察摩擦。** 自己每天用，记下有日期的痛点（size 没人看、分数不是反馈、卡片上那排 dot 才有用、没有 reward 的感觉），逐条对到文献，形成设计假设。证据：Phase 2 spike。
2. **真实使用推翻文献。** Spike 按文献推荐「安静的反馈、不做庆祝」；用下来发现完成那一刻要响：真实场景是一天几次、一次一张，习惯化的前提不成立；spike 否定的其实是**分数**（抽象、累加、评判），不是当场的感官反馈。新原则：Calm ahead + Loud wins，随机的 Balatro 式 juice 对抗习惯化。证据：PR #115。
3. **脚手架的弧线。** 强反馈是还没自动化的 habit 的脚手架，自动化之后要撤。Owner 跟着 app 养成去 gym 的习惯、逐渐不需要它，是第一个完整案例；habit lifecycle 的 Completed（已内化）把这件事写进了系统。对照：streak 和 reminder 制造依赖，app 一停行为就停（Renfree et al. 2016，spike 引用）。
4. **想去研究的问题。** AI 怎么当一个 executive function coach：了解一个人的习惯，什么时候推、什么时候放手、怎么让自己变得不必要。要更多用户数据和实验去 eval 现有 prompt；MCP 只能被动等用户开口、没有跨会话的用户模型，可能要自己做 agent。评估方法已有雏形：测编码 agent 的 `experiments/` 可以迁移到 coach 的 eval。

### 候选的研究方向

都来自自己用出来的问题；每条先记一个文献入口（待核对）。

| 方向 | 问题 | 文献入口 |
| --- | --- | --- |
| Focus factor | 同时追几个 habit、几个 project 最合适；3 / 4 的上限作为干预有没有用 | 多目标追求（multiple goal pursuit）；kanban 的 WIP limit |
| Notification | 太多烦、太少没用；在一堆 notification 里怎么突出；什么时候发 | Receptivity（Mehrotra et al., CHI 2016）；JITAI（Nahum-Shani et al. 2018）；alert fatigue（spike 引用 Sendelbach & Funk 2013） |
| 零阻力的入口 | Widget、glanceable display：不打开 app 也能看到、能完成 | UbiFit 的 glanceable display（Consolvo et al. 2008） |
| Daily rhythm | 开启一天、结束一天的 ritual | progress principle、日终反思（spike 已引用） |
| 当场收集偏好 | MCP 的 feedback 入口，在用的当下记录用户的偏好 | Experience sampling method（ESM） |
| 人和 agent 共同开发 | 怎么让 agent 写出符合我意图的代码；人的 review 抓到了什么 | `experiments/`、`reviews/` 是现成数据 |

### 英文草稿（会随叙事改）

> *I built Mars Workbench to plan my own weeks with an AI agent, and use it daily as its only user — an autobiographical design study. Each generation came from friction I logged in my own use. A month into its current form, I noticed I never looked at the effort points the app asked me for, while the small row of dots on each habit card was the only feedback that felt like progress. The literature pointed me toward quiet feedback and away from scores; living with the design pointed the other way at one moment — finishing — where I wanted the reward to be loud. That tension became the product's core principle: take resistance away from what is still to do, amplify the feedback when it is done. Following the app, I built a gym habit to the point where I no longer needed the app for it. That is the system I want to study next: an AI coach for executive function that learns a person's habits well enough to know when to step in and when to step away.*

## 个人网站（portfolio 的入口）

首页现在有两个设计并存，谁取代谁还没定（[spike](../spike/personal-site.md) Q13）。**山水 Helvetica**（第 6 轮）方向已定，内容在打磨：[mockup](https://claude.ai/artifact/JAc5q3WqeCEXKFXF2VhfTh)（`design/mockup/mockup-site-shanshui.html`）。**缩略图首页**（第 5 轮，C 的四个决定）等 owner review：[缩略图 mockup](https://claude.ai/artifact/784YrxKCtc3g7iDGbKPgpy)（`design/mockup/mockup-site-thumbnails.html`）。之前的 [C mockup](https://claude.ai/artifact/K7wABSdSQP8PJCKCFCofTn) 和第 1、2 轮的 [mockup](https://claude.ai/artifact/7Bzr3cEb2k1jevHdi2hss5) 原样保留。

- **标准**：owner 的设计师朋友：讲清故事、找高光、不重要的少说，围绕解决什么问题、遇到什么困难、怎么思考和解决。
- **山水 Helvetica**：一整页的首页。Hero 是一幅山水，标题在它左上角的留白里；全页 Helvetica；每节一张图，Mars Workbench 在前，工作经历在后；整页背景是一层很淡的蓝色水波；没有落墨。
- **缩略图首页**：只放缩略，每个项目一张图、一段钩子，详细内容在案例页。桌面端一栏竖排、大留白；移动端之后再做。顺序：一 Mars Workbench → 一句 “Before this” → 二 internal tool、三 merchant-facing、四 platform 0 → 1。
- **三版钩子**：问题；前后对比；图给答案、话留问题（推荐，保留 C 的决定引号）。
- **案例页**：标题写成问题、元数据、一张复杂度图、每节一句判断（问题 / 难点 / 怎么想 / 变化 / 留下了什么）。
- **视觉语言**：不变：Media Lab 的用字和用色加山水画的纸、墨、印。
- **公开**：owner 认为可以公开，写得抽象一点；站上没有内部系统名、合作方名和业务数字。
- **工程**：站点的代码就在这个仓库的根目录，一个纯前端的 Next.js app，harness 从 `mars-workbench`@`3f741cc` 复制并改写，数据库以后要用再接。[骨架 spike](../spike/archived/site-scaffold.md)（Round 13–18，已定、已实现）：仓库根是 app，brainstorm 在 `design/brainstorm/`；第一个 PR 只做骨架，验收是公开 URL 上的 hello world。2026-11-20 起首页是山水 Helvetica 那一页的静态拷贝（`public/home.html`），临时方案，等按 spec 做出来的页面替换它。

## 可能对接的导师

来自 Media Lab 新闻、group 和 people 页的搜索摘要（2026-11-11）；applicant information 页当时打不开，招生状态和细节都待在官网确认。

| 导师 · 组 | 现在的方向 | 对接点 | 状态 |
| --- | --- | --- | --- |
| Pat Pataranutaporn · Cyborg Psychology | AI 怎么增强或削弱人的学习、决策、思考；对 AI companion 的情感依赖；AHA co-director | 「让用户不需要的 app」回应依赖问题；n=1 的长期使用；coach 什么时候放手 | 2025-09 新任 Assistant Professor；搜索摘要说在招 2026–2027 的 MS / PhD；建议申请前先简短联系 PI 或组员 |
| Pattie Maes · Fluid Interfaces | AI 支持而不是替代人的思考；productive friction；cognitive debt | MCP guide 的「ask before you assume, propose before you write」；wizard → 多轮商量；执行减阻力 vs 思考加摩擦的张力 | 一个缓存页写着暂不招新学生，待核对 |
| Cynthia Breazeal · Personal Robots | Robotic positive psychology coach；coach 和 companion 的长期比较 | AI coach 的角色、长期关系、readiness to change | 待核对 |
| Karrie Karahalios · Social Algorithms | Contestable systems：让人理解、质疑、塑造算法的决定 | 用户自己定的规则约束 AI；consent；用户能拒绝 AI 的计划 | 2025-09 回 Media Lab 任 Full Professor；待核对 |
| Rosalind Picard · Affective Computing | Wellbeing、wearable | Notification 的时机、daily rhythm | FAQ：一年很少超过 1–2 人，有的年份不收 |
| Ramesh Raskar · NANDA | 建在 MCP、A2A 之上的 agent 基础设施（发现、身份、信任） | 只在 MCP 的局限、自己做 agent 那条线 | 待核对 |
| Paul Liang · Multisensory Intelligence | 多感官 AI、human-AI symbiosis、mental health | 从用户数据建模习惯；偏 ML | 待核对 |

## 证据索引

| 证据 | 在哪 | 撑起哪部分 |
| --- | --- | --- |
| 演化的时间线（197 个 commit，2025-11-25 起） | `mars-workbench` 的 git history；关键节点见 `sessions/2026-11-06-media-lab-fit.md` Round 5 | Personal Statement |
| App 内 LLM planning 下线、只走 MCP | [PR #69](https://github.com/Marsuu1994/mars-workbench/pull/69)（2026-10-17） | Personal Statement；研究弧线 4 |
| MCP 五个 PR（server、planning tools、OAuth consent、token auth） | [PR #39](https://github.com/Marsuu1994/mars-workbench/pull/39)–[#45](https://github.com/Marsuu1994/mars-workbench/pull/45)（2026-10-05 – 10-07） | Personal Statement；研究弧线 4 |
| Phase 2 痛点 spike：有日期的观察、对到文献、五个痛点的选项 | [`design/spike/week-model-phase2-pain-points.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/design/spike/week-model-phase2-pain-points.md) | 研究弧线 1 |
| Tap to complete mockup + design principles 的改写（Loud wins） | [PR #115](https://github.com/Marsuu1994/mars-workbench/pull/115)（`claude/board-tap-to-complete-mockup`） | 研究弧线 2 |
| 推翻的过程，owner 的原话 | PR #115 分支上的 `reviews/pr-115.md`，第 22–25 轮 | 研究弧线 2 |
| Plan with Claude：给 LLM 的规则（先提议再写入、聚焦上限） | [`src/mcp/prompts/`](https://github.com/Marsuu1994/mars-workbench/tree/main/src/mcp/prompts) | 研究弧线 4；focus factor |
| 编码 agent 的对照实验（10 个 run、盲审、Mann–Whitney） | [`experiments/page-structure-parallel/try2/report.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/experiments/page-structure-parallel/try2/report.md) | 研究弧线 4（方法）；Personal Statement 的 harness 阶段 |
| Subagent 委派试点（三轮 A / B） | [`design/spike/archived/subagent-delegation-pilot.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/design/spike/archived/subagent-delegation-pilot.md) | 同上 |
| 人工 review 抓到、CI 漏掉的问题，存成数据集 | [`reviews/`](https://github.com/Marsuu1994/mars-workbench/tree/main/reviews) | 同上 |
| Gym 习惯的使用数据 | 还没导出 | 研究弧线 3 |
| 工作经历：约 5 年在 WePay → JPMorgan Chase 一条线上（风控内部工具、Partner Center、Project Janus、Chase Commerce Center），14 个故事，每个是「背景 / 我做的 / 结果 / 品质落点」；年数、职位起始和可公开的数字待确认 | Owner 的申请素材粗稿：[`materials/application-material-draft-2026-11-05.pdf`](./materials/application-material-draft-2026-11-05.pdf)（draft）；它的项目部分不全，和本仓库冲突时以本仓库为准 | 个人网站的 Work / Engineering / About；Personal Statement |
| 教育和更早的经历：MS ECE（Michigan）、BS EE（Colorado State）；Cerner、SLD Laser | Owner 的简历（Drive，2026-03 版） | CV |

## 还开着的

- **新假设还没在真实 app 里活过。** Loud wins 现在来自点 mockup 的感受和对使用场景的推理；实现后要有有日期的记录（第 1 周 vs 第 4 周对 juice 的感受变没变）。
- **「不需要 app」怎么量。** 候选：SRBAI（自动化程度，4 道题）、habit 进 Completed 之后行为是否还在、不打开 app 的日子做不做。
- **随机奖励的伦理问题。** 评审会问「这不就是老虎机机制吗」；现在的回答是脚手架会撤（研究弧线 3），要不要让 juice 的强度跟着 habit 的 lifecycle 走，还没想。
- **用户和平台。** 现在只有一个用户；publish 是为了拿到更多反馈和数据。事实：把产品的使用数据拿去做学术研究，一般要用户的知情同意和机构的 IRB 审查（或豁免认定）；收集时没有研究用途同意的数据，事后再用更难；上线时就设计好隐私政策和同意，能把这条路留着。
- **哪些个人经历写进 Personal Statement**（白板和朋友、失业的 gap、therapist）——owner 的决定。
- **总论点定不定**：「AI that amplifies a person's own intent」能不能同时罩住产品和 harness 两条线。
- **英文草稿的时间说法**：app 每天用了多久，需要 owner 给一个准确的说法。
- **「executive function」的 framing。** 这个词常和 ADHD 这类临床人群挂钩；以临床人群为对象会变成健康相关研究（IRB、招募门槛更高），一般人群的计划和自我调节范围更宽。
- **Phase 2 的实现状态。** Spike 是 draft、tap to complete 是 mockup；写进申请时说「观察和设计完成，正在实现」。
- **对准哪几个组**（最多填 3 个）：候选见「可能对接的导师」，每位的招生状态都要在官网当期页面确认。
- **公开的套瓷材料 = 个人网站。** 设计在 `design/`：山水 Helvetica 方向已定，内容在打磨；缩略图首页还等 owner review（spike 的 Q11、Q12，以及 Q2–Q7、Q9）；两者的关系是 Q13。Mockup 定稿之后写 spec，再实现（`design/tracker.md`）。
- **英文化。** Spike、实验报告是中文；评审要看的部分需要英文版（一页 case study、一页实验摘要）。
- **演示。** App 要 Google 登录，评审进不去：一段 1–2 分钟的视频（Plan with Claude → board 更新 → 完成一张卡的 juice）。

## 方法和文献

自传式设计和 research through design 是这条叙事的方法依据。标「待核对」的是 brainstorm 里凭记忆提到的，引用前要读原文。

- Neustaedter & Sengers 2012, *Autobiographical design in HCI research*, DIS — 判断标准：真实需求、真实系统、长期使用、记录、快速迭代（待核对）
- Desjardins & Ball 2018, *Revealing tensions in autobiographical design in HCI*, DIS — 这种方法的局限（待核对）
- Zimmerman, Forlizzi & Evenson 2007, *Research through design as a method for interaction design research in HCI*, CHI（待核对）
- Deci, Koestner & Ryan 1999，外部奖励对内在动机的元分析：破坏效应集中在预期中、有条件的实物奖励（待核对）
- Hicks et al.，game juiciness 的实证研究（CHI PLAY / DiGRA）（待核对）
- Gardner et al. 2012，SRBAI（待核对）
- Wood, Bruner & Ross 1976，scaffolding（待核对）
- Mehrotra et al. 2016，notification 的 receptivity（CHI）（待核对）
- Nahum-Shani et al. 2018，just-in-time adaptive interventions（待核对）
- Consolvo et al. 2008，UbiFit 的 glanceable display（待核对）
- Kosmyna et al. 2025，用 AI 助手写文章的 cognitive debt（Fluid Interfaces）（待核对）
- 「Don't Just Tell Me, Ask Me: AI Systems that Intelligently Frame Explanations as Questions …」（Fluid Interfaces）（待核对）
- Jeong et al.，robotic positive psychology coach：RO-MAN 2020；UMUAI 2022（35 人）；8 周、70 人的 assistant / coach / companion 比较（Personal Robots）（待核对）
- Spike 里已经调研过的：Etkin 2016、Harkin et al. 2016、Woolley & Fishbach 2017、Zuckerman & Gal-Oz 2014、Milkman et al. 2021、Renfree et al. 2016、Lally et al. 2010、Sendelbach & Funk 2013

## 申请的硬事实

以 Media Lab 官网的当期页面为准；有疑问发 mas@media.mit.edu。

- 截止：9 月 15 日开放，**2026 年 12 月 15 日 11:59pm ET** 截止。Apply 页和 Application FAQs 一致（2026-11-19 直接读到；FAQ：“11:59pm ET on December 15 is the firm deadline for all applications.”）。写 12 月 1 日的是旧版 MAS FAQ，那一页没有年份和日期。
- Students Offering Support：在读学生给 portfolio 或 Statement of Objectives 一轮反馈；表单 “will close November 13th, 2026”，已经关了。
- Portfolio：“Recommended formats: URL or PDF”；按申请的组 curate；“highlight who you are”；“provide context around your work”；“Do not submit portfolio directly to faculty member(s)”。Apply 页写所有材料（包括 portfolio）通过在线申请系统提交；「URL 放在 Statement of Objectives 结尾」只在没有日期的旧版 portfolio 页上，当期页面没有这句。
- 材料：Statement of Objectives、Personal Statement、Portfolio、3 封推荐信、成绩单；不要 GRE。
- 申请表里填最多 3 个研究组或导师，Statement of Objectives 开头列出、写给这几个组；建议 2 页以内。
- Personal Statement：“500 words maximum”（Application FAQs）。
- Portfolio 的要求各组不同；Fluid Interfaces 要每个项目写清你的角色和结果或发表。
- 所有 MAS 学生从硕士开始，第二年再申请 PhD。

来源：[Apply](https://www.media.mit.edu/graduate-program/apply/) · [Portfolio requirements](https://www.media.mit.edu/posts/academics-portfolio-requirements/) · [Students Offering Support](https://www.media.mit.edu/posts/students-offering-support-program/) · [Application FAQs](https://www.media.mit.edu/posts/academics-faq/) · [Apply](https://www-prod.media.mit.edu/graduate-program/apply/) · [Fluid Interfaces applicant information](https://www.media.mit.edu/groups/fluid-interfaces/applicant-information/) · 旧版：[MAS FAQ](https://media.mit.edu/admissions/faqs.html)、[portfolio 页](https://www.media.mit.edu/admissions/how-to-apply/portfolio-requirements.html)
