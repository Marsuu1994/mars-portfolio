# Portfolio · Mars Workbench as research

The owner's brainstorm on turning [Mars Workbench](https://github.com/Marsuu1994/mars-workbench) into a research portfolio for a graduate application (MIT Media Lab MS/PhD, MAS program). Private on purpose: the narrative, the strategy and the conversations stay out of the public product repo.

This page is the **current state** — the narrative as it stands, the evidence behind it, what is still open. It is rewritten as the path gets clearer; how it got here lives in `sessions/`.

> 语言约定：叙述用中文；要放进申请材料的草稿用英文；论文、产品名和代码标识保留原文。

## How it is organized

```text
README.md              # this page: the current narrative, evidence, open questions, facts
AGENTS.md              # rules for the agent that adds a session
sessions/
└── YYYY-MM-DD-<topic>.md   # one brainstorm session: the owner's words, the findings, what changed here
```

## 当前叙事

**一句话：** 我是自己 app 的开发者和唯一用户，用自传式设计（autobiographical design）一代代迭代；真实使用推翻了我从文献得来的假设，让我得到一个新原则——*take resistance away, amplify feedback*——而这条路的终点是一个让用户逐渐不再需要它的系统，下一步是 AI 怎么当好这样一个 executive function coach。

骨架（四幕）：

1. **观察摩擦（Phase 1–2）。** 自己每天用，记下有日期的痛点（size 没人看、分数不是反馈、卡片上那排 dot 才有用、没有 reward 的感觉），逐条对到文献，形成设计假设。证据：Phase 2 spike。
2. **真实使用推翻文献。** Spike 按文献推荐「安静的反馈、不做庆祝」；用下来发现完成的那一刻要响：真实场景是一天几次、一次一张，不是批量打勾，习惯化的前提不成立；spike 否定的其实是**分数**（抽象、累加、评判），不是当场的感官反馈——它自己引用的即时奖励、当场反馈的证据反而支持响。新原则：Calm ahead + Loud wins，随机的 Balatro 式 juice 对抗习惯化。证据：PR #115 的 mockup 和 review log 第 22–25 轮。
3. **脚手架的弧线。** 强反馈是还没自动化的 habit 的脚手架，行为自动化之后脚手架要撤。Owner 跟着 app 养成去 gym 的习惯、逐渐不需要它，是第一个完整案例；habit lifecycle 的 Completed（已内化、不再跟踪）把这件事写进了系统。对照：streak 和 reminder 制造依赖，app 一停行为就停（Renfree et al. 2016，spike 引用）。
4. **想去研究的问题。** AI 怎么当一个 executive function coach：了解一个人的习惯，什么时候推、什么时候放手、怎么让自己变得不必要（enable human）。需要更多用户数据和实验去 eval 现有 prompt；MCP 只能被动等用户开口、没有跨会话的用户模型，可能要自己做 agent。评估方法已经有雏形：仓库里测编码 agent 的 `experiments/`（对照、重复、盲审、数据集）可以迁移到 coach 的 eval。

### 英文草稿（会随叙事改）

> *I built Mars Workbench to plan my own weeks with an AI agent, and have used it daily since October as its only user — an autobiographical design study. Each generation came from friction I logged in my own use. A month in, I noticed I never looked at the effort points the app asked me for, while the small row of dots on each habit card was the only feedback that felt like progress. The literature pointed me toward quiet feedback and away from scores; living with the design pointed the other way at one moment — finishing — where I wanted the reward to be loud. That tension became the product's core principle: take resistance away from what is still to do, amplify the feedback when it is done. Following the app, I built a gym habit to the point where I no longer needed the app for it. That is the system I want to study next: an AI coach for executive function that learns a person's habits well enough to know when to step in and when to step away.*

## 证据索引

| 证据 | 在哪 | 撑起哪一幕 |
| --- | --- | --- |
| Phase 2 痛点 spike：有日期的观察、对到文献、五个痛点的选项 | [`design/spike/week-model-phase2-pain-points.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/design/spike/week-model-phase2-pain-points.md) | 1 |
| Tap to complete mockup + design principles 的改写（Loud wins） | [PR #115](https://github.com/Marsuu1994/mars-workbench/pull/115)（`claude/board-tap-to-complete-mockup`） | 2 |
| 推翻的过程，owner 的原话 | PR #115 分支上的 `reviews/pr-115.md`，第 22–25 轮 | 2 |
| Plan with Claude：MCP server 和给 LLM 的规则（先提议再写入、聚焦上限） | [`src/mcp/prompts/`](https://github.com/Marsuu1994/mars-workbench/tree/main/src/mcp/prompts) | 4 |
| 编码 agent 的对照实验（10 个 run、盲审、Mann–Whitney） | [`experiments/page-structure-parallel/try2/report.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/experiments/page-structure-parallel/try2/report.md) | 4（方法） |
| Subagent 委派试点（三轮 A / B） | [`design/spike/archived/subagent-delegation-pilot.md`](https://github.com/Marsuu1994/mars-workbench/blob/main/design/spike/archived/subagent-delegation-pilot.md) | 4（方法） |
| 人工 review 抓到、CI 漏掉的问题，存成数据集 | [`reviews/`](https://github.com/Marsuu1994/mars-workbench/tree/main/reviews) | 4（方法） |
| Gym 习惯的使用数据 | 还没导出 | 3 |

## 还开着的

- **新假设还没在真实 app 里活过。** Loud wins 现在来自点 mockup 的感受和对使用场景的推理；实现后要有有日期的记录（第 1 周 vs 第 4 周对 juice 的感受变没变）。
- **「不需要 app」怎么量。** 候选：SRBAI（自动化程度，4 道题）、habit 进 Completed 之后行为是否还在、不打开 app 的日子做不做。
- **随机奖励的伦理问题。** 评审会问「这不就是老虎机机制吗」；现在的回答是脚手架会撤（第 3 幕），要不要让 juice 的强度跟着 habit 的 lifecycle 走，还没想。
- **只有一个用户。** 找不找人试用、什么时候、找几个——owner 的决定，还没定。
- **「executive function」的 framing。** 这个词常和 ADHD 这类临床人群挂钩；以临床人群为对象会变成健康相关研究（IRB、招募门槛更高），一般人群的计划和自我调节范围更宽。
- **Phase 2 的实现状态。** Spike 是 draft、tap to complete 是 mockup；写进申请时说「观察和设计完成，正在实现」。
- **对准哪几个组。** 候选：Fluid Interfaces（人和 AI 的交互、认知增强）、Advancing Humans with AI；要读它们近一两年的论文再定，名额以各组 applicant information 页为准。
- **英文化。** Spike、实验报告是中文；评审要看的部分需要英文版（一页 case study、一页实验摘要）。
- **演示。** App 要 Google 登录，评审进不去：一段 1–2 分钟的视频（Plan with Claude → board 更新 → 完成一张卡的 juice）。

## 方法和文献

自传式设计和 research through design 是这条叙事的方法依据；第 2、3 幕的论证要用到下面几篇。标「待核对」的是 brainstorm 里凭记忆提到的，引用前要读原文。

- Neustaedter & Sengers 2012, *Autobiographical design in HCI research*, DIS — 判断标准：真实需求、真实系统、长期使用、记录、快速迭代（待核对）
- Desjardins & Ball 2018, *Revealing tensions in autobiographical design in HCI*, DIS — 这种方法的局限（待核对）
- Zimmerman, Forlizzi & Evenson 2007, *Research through design as a method for interaction design research in HCI*, CHI（待核对）
- Deci, Koestner & Ryan 1999，外部奖励对内在动机的元分析：破坏效应集中在预期中、有条件的实物奖励（待核对）
- Hicks et al.，game juiciness 的实证研究（CHI PLAY / DiGRA）（待核对）
- Gardner et al. 2012，SRBAI（待核对）
- Wood, Bruner & Ross 1976，scaffolding（待核对）
- Spike 里已经调研过的：Etkin 2016、Harkin et al. 2016、Woolley & Fishbach 2017、Zuckerman & Gal-Oz 2014、Milkman et al. 2021、Renfree et al. 2016、Lally et al. 2010

## 申请的硬事实

以 Media Lab 官网的当期页面为准；有疑问发 mas@media.mit.edu。

- 截止：官方 FAQ 写 **12 月 1 日**，一份旧 FAQ 写 12 月 15 日——以当期 admissions timeline 为准。
- 材料：Statement of Objectives、Personal Statement、Portfolio、3 封推荐信、成绩单；不要 GRE。
- 申请表里填最多 3 个研究组或导师，Statement of Objectives 开头列出、写给这几个组；建议 2 页以内。
- Portfolio 的要求各组不同；Fluid Interfaces 要每个项目写清你的角色和结果或发表。
- 所有 MAS 学生从硕士开始，第二年再申请 PhD。

来源：[MAS FAQ](https://media.mit.edu/admissions/faqs.html) · [Application FAQs](https://www.media.mit.edu/posts/academics-faq/) · [Apply](https://www-prod.media.mit.edu/graduate-program/apply/) · [Fluid Interfaces applicant information](https://www.media.mit.edu/groups/fluid-interfaces/applicant-information/)
