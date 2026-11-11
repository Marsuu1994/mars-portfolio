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
