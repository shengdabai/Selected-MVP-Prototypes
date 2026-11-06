const dimensions = [
  ["market", "市场"],
  ["profit", "盈利"],
  ["competition", "竞争"],
  ["complexity", "复杂度"],
  ["content", "内容"],
  ["iteration", "迭代"]
];

const projects = [
  {
    id: "skill-factory",
    source: "刘小排",
    selected: true,
    name: "SOP 转 Skill 工厂",
    type: "Skill / 自动化",
    scores: { market: 5, profit: 4, competition: 3, complexity: 4, content: 5, iteration: 5 },
    verdict: "最适合先做。市场有 no-code/agent 竞品，但“把业务 SOP 变成可测试 Skill”的切口更清晰。",
    users: "运营、销售、咨询顾问、培训师、非程序员创业者",
    mvp: ["SOP 访谈表单", "自动生成 SKILL.md", "测试用例", "团队技能库", "失败回放"],
    evidence: "《普通人，终于可以把工作交给AI了》《Claude Skills 不就是把提示词存个文件夹吗？》"
  },
  {
    id: "demand-canvas",
    source: "刘小排",
    selected: true,
    name: "需求倒做项目验证器",
    type: "产品方法 / 创业",
    scores: { market: 4, profit: 4, competition: 4, complexity: 5, content: 5, iteration: 4 },
    verdict: "轻量、快、直接服务 AI 编程学员和孵化器；复杂度低，适合做成第一个商业化工具。",
    users: "AI 产品创业者、独立开发者、产品经理、孵化器项目",
    mvp: ["需求填空题", "访谈问题生成", "竞品拆解", "渠道假设", "MVP 范围压缩"],
    evidence: "《如何提高做产品的成功率？》《什么样的项目是好项目？》"
  },
  {
    id: "influencer-radar",
    source: "刘小排",
    selected: false,
    name: "竞品红人增长雷达",
    type: "增长 / 自动化",
    scores: { market: 5, profit: 5, competition: 3, complexity: 3, content: 4, iteration: 5 },
    verdict: "市场需求和付费意愿强；竞争多，但可以先做“竞品推广过谁”这个窄场景。",
    users: "出海 SaaS、AI 工具站、DTC 品牌、增长团队",
    mvp: ["竞品输入", "红人线索表", "内容表现评分", "触达优先级", "Outreach 草稿"],
    evidence: "《一句话，让AI把所有推广过你竞品的红人统统挖出来》"
  },
  {
    id: "company-brain",
    source: "刘小排",
    selected: false,
    name: "AI 原生公司大脑 OS",
    type: "一人公司 / Agent Loop",
    scores: { market: 5, profit: 5, competition: 2, complexity: 1, content: 5, iteration: 5 },
    verdict: "空间大，但工程复杂、权限和企业销售周期重；适合作为后续企业版，而不是第一阶段。",
    users: "AI 原生创业团队",
    mvp: ["知识索引", "客户反馈摘要", "任务闭环", "质量门禁"]
  },
  {
    id: "model-lab",
    source: "刘小排",
    selected: false,
    name: "真实任务编程模型评测实验室",
    type: "模型评测",
    scores: { market: 3, profit: 3, competition: 3, complexity: 3, content: 5, iteration: 4 },
    verdict: "内容支撑强，但用户面偏窄，适合作为课程/社群工具。",
    users: "AI 编程重度用户",
    mvp: ["任务集", "成本统计", "质量评分"]
  },
  {
    id: "quality-gate",
    source: "刘小排",
    selected: true,
    name: "Vibe Coding 质量守门员",
    type: "工程质量",
    scores: { market: 5, profit: 4, competition: 3, complexity: 3, content: 5, iteration: 5 },
    verdict: "最有现实痛点。AI 写代码已经进入日常，但用户不敢直接合并；切口是“AI 写的代码，合并前 3 分钟体检”。",
    users: "AI 编程用户、独立开发者、小团队技术负责人、非程序员做产品者",
    mvp: ["PR diff 扫描", "安全/逻辑/测试缺口报告", "框架规则选择", "修复 Prompt", "能否合并红黄绿灯"],
    evidence: "《复杂需求如何让AI一次写对？》《Claude Code极简入门：3条铁律让你告别代码屎山》"
  },
  {
    id: "affiliate",
    source: "刘小排",
    selected: false,
    name: "Affiliate/CPS 生意验证与运营台",
    type: "副业 / CPS",
    scores: { market: 4, profit: 4, competition: 3, complexity: 4, content: 5, iteration: 4 },
    verdict: "务实但赛道规则变化大；可以作为需求验证器的垂直模板。",
    users: "副业团队",
    mvp: ["佣金测算", "素材库", "渠道复盘"]
  },
  {
    id: "creator-workshop",
    source: "刘小排",
    selected: false,
    name: "创作者 AI 内容作坊",
    type: "内容 / 自媒体",
    scores: { market: 4, profit: 3, competition: 2, complexity: 4, content: 4, iteration: 4 },
    verdict: "市场大但竞争极强，差异化不足时容易成为普通内容工具。",
    users: "公众号作者、知识博主",
    mvp: ["标题检查", "公众号排版", "卡片生成"]
  },
  {
    id: "expert-avatar",
    source: "刘小排",
    selected: false,
    name: "专家分身产品化平台",
    type: "专业服务规模化",
    scores: { market: 4, profit: 5, competition: 3, complexity: 2, content: 5, iteration: 5 },
    verdict: "盈利空间强，但知识采集、风格校准和责任边界复杂；可作为第二批开发。",
    users: "咨询顾问、培训老师、行业专家",
    mvp: ["知识导入", "追问咨询", "人工复核"]
  },
  {
    id: "im-dispatcher",
    source: "刘小排",
    selected: false,
    name: "IM/邮件驱动的 AI 工作调度器",
    type: "AI 秘书",
    scores: { market: 4, profit: 4, competition: 2, complexity: 2, content: 4, iteration: 4 },
    verdict: "入口价值高，但权限风险和竞品压力大，不适合作为首发。",
    users: "移动办公创业者",
    mvp: ["邮件收任务", "风险确认", "日志回传"]
  },
  {
    id: "reading-marathon",
    source: "笑来",
    selected: true,
    name: "深度阅读耐力训练营",
    type: "阅读 / 教育",
    scores: { market: 5, profit: 4, competition: 4, complexity: 4, content: 5, iteration: 5 },
    verdict: "市场宽、文章支撑强、可持续迭代；差异点是“不替代认知负荷”。",
    users: "学生、家长、知识工作者",
    mvp: ["阅读计时", "段落复述", "论证线索追踪", "延迟回忆", "耐力曲线"],
    evidence: "《文学能力是 AI 安全基础设施》《The Load That Does the Work》"
  },
  {
    id: "ai-evaluator",
    source: "笑来",
    selected: false,
    name: "AI 输出推理连贯性评估器",
    type: "AI 安全 / 判断力",
    scores: { market: 5, profit: 5, competition: 4, complexity: 3, content: 5, iteration: 5 },
    verdict: "企业和专业服务都有强需求；不是普通事实核查，而是训练判断力，差异化明确。",
    users: "律师、咨询顾问、研究员、产品经理、内容编辑",
    mvp: ["前提/结论拆分", "承重连接词标记", "反例问题", "人工评分训练", "错因分类"],
    evidence: "《文学能力是 AI 安全基础设施》《别再做平庸者——二阶独奏》"
  },
  {
    id: "cli-literacy",
    source: "笑来",
    selected: false,
    name: "CLI 识字阶梯训练器",
    type: "计算素养 / 自动化",
    scores: { market: 4, profit: 4, competition: 4, complexity: 3, content: 5, iteration: 5 },
    verdict: "从点击消费转向可组合生产，是强文章母题；用户面窄于阅读，但产品壁垒更清楚。",
    users: "非程序员 Power User、运营、研究助理、内容团队",
    mvp: ["任务阶梯", "命令解释", "沙盒练习", "脚本版本库", "能力带进度"],
    evidence: "《敲键盘可以复利，点鼠标不行》《VMark》"
  },
  {
    id: "skill-coach",
    source: "笑来",
    selected: false,
    name: "Skill 使用模式教练",
    type: "Skill / 元认知",
    scores: { market: 4, profit: 3, competition: 4, complexity: 4, content: 5, iteration: 4 },
    verdict: "适合作为 SOP Skill 工厂的安全模块，而不是独立首发。",
    users: "AI Skill 使用者",
    mvp: ["委派检测", "理解自评", "复述检查"]
  },
  {
    id: "northstar",
    source: "笑来",
    selected: false,
    name: "北极星提示词管理器",
    type: "LLM 使用",
    scores: { market: 4, profit: 3, competition: 3, complexity: 5, content: 5, iteration: 4 },
    verdict: "容易做，但容易被浏览器插件或模型内置设置吞掉；适合作为 AI 输出评估器的一部分。",
    users: "重度 AI 用户",
    mvp: ["提示词版本", "场景 Profile", "反迎合检查"]
  },
  {
    id: "producer-studio",
    source: "笑来",
    selected: true,
    name: "生产者项目制学习 Studio",
    type: "生产者教育",
    scores: { market: 4, profit: 5, competition: 3, complexity: 3, content: 5, iteration: 5 },
    verdict: "能把阅读、写作、AI、项目交付整合成长期平台；不是“学完课程”，而是每周产出一个可展示作品。",
    users: "自学者、转型知识工作者、青少年生产者教育、AI 编程学习者",
    mvp: ["项目模板", "里程碑看板", "每周交付物", "AI/导师审查", "作品集"],
    evidence: "《VMark》《学习的真相》《106 天——没有任何花招》"
  },
  {
    id: "markdown-studio",
    source: "笑来",
    selected: false,
    name: "AI 原生 Markdown 研究写作台",
    type: "写作工具",
    scores: { market: 4, profit: 4, competition: 2, complexity: 2, content: 5, iteration: 5 },
    verdict: "产品可做但编辑器竞争和工程量都大；适合做内部工具。",
    users: "重度写作者",
    mvp: ["Markdown 编辑", "MCP 接收", "引用整理"]
  },
  {
    id: "family-ledger",
    source: "笑来",
    selected: false,
    name: "家庭阅读与生产力教育管家",
    type: "家庭教育",
    scores: { market: 4, profit: 4, competition: 3, complexity: 3, content: 4, iteration: 5 },
    verdict: "市场大，但教育产品承诺边界复杂；可作为阅读训练营家庭版。",
    users: "家长、教练",
    mvp: ["阅读计划", "家庭项目", "每周复盘"]
  },
  {
    id: "ai-audit",
    source: "笑来",
    selected: true,
    name: "AI 项目真实度审计器",
    type: "反炒作 / 技术尽调",
    scores: { market: 5, profit: 5, competition: 4, complexity: 4, content: 4, iteration: 5 },
    verdict: "AI 项目泛滥，能力夸大、交付失真、Demo 和真实可用性脱节是强痛点；可先做评分报告和尽调工具。",
    users: "投资人、创业者、技术媒体、采购负责人、非技术管理者",
    mvp: ["项目提交", "真实度评分", "风险清单", "同类对比", "Markdown/PDF 报告"],
    evidence: "《AI 焦虑诚实说明》《51.2 万行泄漏代码》"
  },
  {
    id: "new-eyes",
    source: "笑来",
    selected: false,
    name: "获得新眼睛训练实验室",
    type: "认知训练",
    scores: { market: 3, profit: 4, competition: 4, complexity: 2, content: 5, iteration: 5 },
    verdict: "理念强但题库建设成本高；先作为阅读/CLI 训练的高级模块。",
    users: "专业学习者",
    mvp: ["微差异题库", "专家样例", "迁移测试"]
  }
];

const selected = projects.filter((p) => p.selected).sort((a, b) => {
  if (a.source !== b.source) return a.source.localeCompare(b.source, "zh-Hans-CN");
  return total(b) - total(a);
});
const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

function total(p) {
  return Object.values(p.scores).reduce((a, b) => a + b, 0);
}

function grade(p) {
  const t = total(p);
  if (p.selected || t >= 25) return "s";
  if (t >= 22) return "a";
  return "b";
}

function renderMatrix() {
  const grid = document.getElementById("matrixGrid");
  grid.innerHTML = projects
    .slice()
    .sort((a, b) => total(b) - total(a))
    .map((p) => {
      const bars = dimensions.map(([key, label]) => `
        <div class="bar-row">
          <span>${label}</span>
          <div class="bar"><span style="width:${p.scores[key] * 20}%"></span></div>
          <b>${p.scores[key]}</b>
        </div>
      `).join("");
      return `
        <article class="score-card">
          <div class="score-head">
            <div>
              <h3>${p.name}</h3>
              <div class="source">${p.source} · ${p.type}${p.selected ? " · 已选" : ""}</div>
            </div>
            <div class="total ${grade(p)}">${total(p)}</div>
          </div>
          <div class="score-bars">${bars}</div>
          <div class="verdict">${p.verdict}</div>
        </article>
      `;
    }).join("");
}

function renderProjectCards(source, targetId) {
  const box = document.getElementById(targetId);
  box.innerHTML = selected.filter((p) => p.source === source).sort((a, b) => total(b) - total(a)).map((p) => `
    <article class="project-card">
      <span class="badge">${p.type} · ${total(p)} 分</span>
      <h3>${p.name}</h3>
      <p>${p.verdict}</p>
      <div class="meta-grid">
        <div><strong>目标用户</strong>${p.users}</div>
        <div><strong>依据</strong>${p.evidence || "文章主题高频支撑"}</div>
      </div>
      <h4>首版 MVP</h4>
      <ul>${p.mvp.map((m) => `<li>${m}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function field(id, label, type = "textarea", value = "") {
  const input = type === "textarea"
    ? `<textarea id="${id}">${value}</textarea>`
    : `<input id="${id}" value="${value}">`;
  return `<div class="field"><label for="${id}">${label}</label>${input}</div>`;
}

function prototypeShell(p, fields, output = "") {
  return `
    <article class="prototype">
      <div class="prototype-head">
        <div>
          <h3>${p.name}</h3>
          <p>${p.verdict}</p>
        </div>
        <div class="total ${grade(p)}">${total(p)}</div>
      </div>
      <div class="prototype-body">
        <aside class="toolbox">
          ${fields}
          <div class="actions">
            <button class="primary" data-run="${p.id}">生成方案</button>
            <button class="secondary" data-reset="${p.id}">恢复示例</button>
          </div>
        </aside>
        <section class="workspace">
          <div id="output-${p.id}" class="output">${output}</div>
        </section>
      </div>
    </article>
  `;
}

const examples = {
  "skill-factory": {
    role: "跨境电商运营",
    sop: "每天抓取竞品新品，记录标题、价格、主图、卖点和评论差评；每周输出上新机会和 Listing 优化建议。",
    tools: "浏览器、表格、Shopify 后台、Notion、邮件"
  },
  "demand-canvas": {
    user: "刚开始做海外 AI 工具的独立开发者",
    scene: "看到一个热门 API，想两天内判断是否值得做成付费产品",
    price: "每月 19-49 美元",
    problem: "不知道用户是否真的愿意付费，也不知道该先做哪个最小功能"
  },
  "influencer-radar": {
    competitor: "photo-to-meme.ai",
    niche: "AI 图片工具、表情包、社媒创作者",
    platform: "YouTube / TikTok / X"
  },
  "quality-gate": {
    framework: "Next.js / Node API",
    diff: "+ const result = await fetch('/api/user?id=' + userId)\n+ return result.json()\n- await expect(page.locator('.save')).toBeVisible()",
    concern: "这是 AI 写的登录后数据读取代码，我不确定能不能合并。"
  },
  "reading-marathon": {
    title: "文学能力是 AI 安全基础设施",
    minutes: "45",
    goal: "读完后能复述核心论证，并指出 3 个承重连接词"
  },
  "ai-evaluator": {
    text: "AI 辅导能提高物理学习成绩，因此学校应该把深度阅读训练替换为 AI 摘要工具。这样学生会更快掌握知识，也更安全。"
  },
  "cli-literacy": {
    task: "把一个文件夹里的 Markdown 文件统计字数，并输出前 10 个最长文件"
  },
  "producer-studio": {
    project: "做一个 AI 文章选题分析小工具",
    learner: "会用 AI，但不会完整交付产品的内容创作者",
    deliverable: "本周必须交付一个可打开的 HTML 原型和 3 分钟演示"
  },
  "ai-audit": {
    name: "One-line Movie AI",
    claim: "输入一句话即可自动生成专业短片，角色一致、镜头连贯、音频同步。",
    evidence: "有 README、Demo 视频和 8,000 stars；没有看到端到端测试，也没有公开失败率。"
  }
};

function renderPrototype(id) {
  const p = byId[id];
  const e = examples[id];
  let fields = "";
  if (id === "skill-factory") {
    fields = field("sf-role", "角色/行业", "input", e.role) + field("sf-sop", "业务 SOP", "textarea", e.sop) + field("sf-tools", "可调用工具", "textarea", e.tools);
  } else if (id === "demand-canvas") {
    fields = field("dc-user", "什么人", "input", e.user) + field("dc-scene", "什么场景", "textarea", e.scene) + field("dc-price", "愿意花多少钱", "input", e.price) + field("dc-problem", "解决什么问题", "textarea", e.problem);
  } else if (id === "influencer-radar") {
    fields = field("ir-competitor", "竞品名/域名", "input", e.competitor) + field("ir-niche", "目标领域", "textarea", e.niche) + field("ir-platform", "平台", "input", e.platform);
  } else if (id === "quality-gate") {
    fields = field("qg-framework", "项目类型/框架", "input", e.framework) + field("qg-diff", "PR diff / AI 生成代码片段", "textarea", e.diff) + field("qg-concern", "你的担心", "textarea", e.concern);
  } else if (id === "reading-marathon") {
    fields = field("rm-title", "阅读材料", "input", e.title) + field("rm-minutes", "训练时长（分钟）", "input", e.minutes) + field("rm-goal", "本次目标", "textarea", e.goal);
  } else if (id === "ai-evaluator") {
    fields = field("ae-text", "粘贴 AI 输出", "textarea", e.text);
  } else if (id === "cli-literacy") {
    fields = field("cli-task", "想自动化的任务", "textarea", e.task);
  } else if (id === "producer-studio") {
    fields = field("ps-project", "项目", "textarea", e.project) + field("ps-learner", "学习者画像", "textarea", e.learner) + field("ps-deliverable", "本周交付物", "textarea", e.deliverable);
  } else if (id === "ai-audit") {
    fields = field("aa-name", "AI 项目名", "input", e.name) + field("aa-claim", "项目核心声称", "textarea", e.claim) + field("aa-evidence", "已有证据", "textarea", e.evidence);
  }
  document.getElementById("prototypePanel").innerHTML = prototypeShell(p, fields);
  runPrototype(id);
}

function text(id) {
  return document.getElementById(id).value.trim();
}

function runPrototype(id) {
  const out = document.getElementById(`output-${id}`);
  if (id === "skill-factory") {
    const role = text("sf-role");
    const sop = text("sf-sop");
    const tools = text("sf-tools");
    out.innerHTML = `
      <h4>生成的 Skill 草案</h4>
      <pre>name: ${role}-automation-skill
description: 将 ${role} 的重复 SOP 转成可测试、可复用的 AI 技能。

## 触发条件
当用户要求执行、复盘或改进以下流程时调用：${sop}

## 输入
- 目标对象
- 时间范围
- 可访问工具：${tools}

## 执行步骤
1. 澄清目标和风险边界。
2. 读取或抓取相关数据。
3. 按字段整理为结构化表格。
4. 输出机会、风险和下一步动作。
5. 生成测试样例，记录失败案例。</pre>
      <h4>首批测试用例</h4>
      <ul><li>空数据时必须说明缺口。</li><li>发现高风险动作时必须请求人工确认。</li><li>输出必须包含可追踪来源字段。</li></ul>
    `;
  }
  if (id === "demand-canvas") {
    const user = text("dc-user");
    const scene = text("dc-scene");
    const price = text("dc-price");
    const problem = text("dc-problem");
    out.innerHTML = `
      <h4>需求倒做填空题</h4>
      <p><b>${user}</b>，在 <b>${scene}</b> 时，愿意花 <b>${price}</b>，解决 <b>${problem}</b>。</p>
      <h4>验证优先级</h4>
      <div class="metric-row">
        <div class="metric"><strong>4</strong><span>付费清晰度</span></div>
        <div class="metric"><strong>3</strong><span>渠道确定性</span></div>
        <div class="metric"><strong>5</strong><span>MVP 可压缩</span></div>
        <div class="metric"><strong>4</strong><span>访谈必要性</span></div>
      </div>
      <h4>本周只做三件事</h4>
      <ol><li>找 8 个目标用户访谈。</li><li>做一个无登录 landing page 收集邮箱。</li><li>用表格模拟交付，不急着写完整产品。</li></ol>
    `;
  }
  if (id === "influencer-radar") {
    const competitor = text("ir-competitor");
    const niche = text("ir-niche");
    const platform = text("ir-platform");
    out.innerHTML = `
      <h4>红人线索演示表</h4>
      <p>竞品：<b>${competitor}</b>；领域：${niche}；平台：${platform}</p>
      <div class="kanban">
        <div class="lane"><h4>高优先级</h4><div class="item">AI meme 教程频道<br><small>匹配度 92 · 曾发竞品教程</small></div><div class="item">TikTok 模板创作者<br><small>匹配度 88 · 近 7 天互动高</small></div></div>
        <div class="lane"><h4>待验证</h4><div class="item">设计工具测评博主<br><small>匹配度 76 · 需查邮箱</small></div><div class="item">小众 SaaS newsletter<br><small>匹配度 72 · 适合联盟链接</small></div></div>
        <div class="lane"><h4>暂不触达</h4><div class="item">泛娱乐账号<br><small>互动高但用户不准</small></div></div>
      </div>
      <h4>Outreach 草稿</h4>
      <p>你好，我看到你之前介绍过 ${competitor}。我们做了一个更适合 ${niche} 的轻量工具，愿意提供免费额度和专属优惠码，方便你做一次真实测评。</p>
    `;
  }
  if (id === "quality-gate") {
    const framework = text("qg-framework");
    const diff = text("qg-diff");
    const concern = text("qg-concern");
    const hasFetch = /fetch|axios|request/.test(diff);
    const hasTestRemoval = /^-.*expect|^-.*test/m.test(diff);
    const hasUserInput = /id=|userId|params|query/.test(diff);
    const risk = (hasFetch ? 1 : 0) + (hasTestRemoval ? 1 : 0) + (hasUserInput ? 1 : 0);
    out.innerHTML = `
      <h4>合并体检结果</h4>
      <div class="metric-row">
        <div class="metric"><strong>${risk >= 2 ? "黄" : "绿"}</strong><span>合并灯号</span></div>
        <div class="metric"><strong>${hasFetch ? "有" : "无"}</strong><span>外部请求</span></div>
        <div class="metric"><strong>${hasUserInput ? "有" : "无"}</strong><span>用户输入拼接</span></div>
        <div class="metric"><strong>${hasTestRemoval ? "有" : "无"}</strong><span>测试删除</span></div>
      </div>
      <h4>风险说明</h4>
      <p>${concern}</p>
      <ul>
        <li>${framework} 项目中，用户输入拼接到请求参数时，需要校验和编码。</li>
        <li>如果 AI 删除了测试断言，必须补回等价测试后再合并。</li>
        <li>涉及登录态数据读取时，需要确认服务端鉴权，而不是只依赖前端传参。</li>
      </ul>
      <h4>给 Codex/Cursor 的修复 Prompt</h4>
      <pre>请审查这段 ${framework} 代码，重点检查鉴权、输入校验、测试缺口和可维护性。
不要扩大重构范围；只给最小修复补丁，并补充能失败再通过的测试。</pre>
    `;
  }
  if (id === "reading-marathon") {
    const title = text("rm-title");
    const minutes = Number(text("rm-minutes")) || 45;
    const goal = text("rm-goal");
    out.innerHTML = `
      <h4>训练安排</h4>
      <div class="metric-row">
        <div class="metric"><strong>${Math.round(minutes * .45)}</strong><span>分钟无摘要阅读</span></div>
        <div class="metric"><strong>${Math.round(minutes * .2)}</strong><span>分钟段落复述</span></div>
        <div class="metric"><strong>${Math.round(minutes * .2)}</strong><span>分钟论证链标注</span></div>
        <div class="metric"><strong>${Math.round(minutes * .15)}</strong><span>分钟延迟回忆</span></div>
      </div>
      <h4>材料</h4><p>${title}</p>
      <h4>目标</h4><p>${goal}</p>
      <h4>训练规则</h4>
      <div class="checklist">
        <label><input type="checkbox"> 读前不看 AI 摘要。</label>
        <label><input type="checkbox"> 每 8-10 分钟停下写一句复述。</label>
        <label><input type="checkbox"> 标出“因此、所以、不过、真正问题是”等承重词。</label>
        <label><input type="checkbox"> 24 小时后做一次 5 句回忆。</label>
      </div>
    `;
  }
  if (id === "ai-evaluator") {
    const raw = text("ae-text");
    const connectors = (raw.match(/因此|所以|但是|不过|然而|因为|如果|结论/g) || []);
    const claims = raw.split(/[。！？]/).map((s) => s.trim()).filter(Boolean);
    out.innerHTML = `
      <h4>初步拆解</h4>
      <div class="pill-row">${claims.map((c, i) => `<span class="pill">主张 ${i + 1}: ${c.slice(0, 36)}</span>`).join("")}</div>
      <h4>承重连接词</h4>
      <p>${connectors.length ? connectors.join("、") : "未检测到明显承重连接词"}</p>
      <h4>审查问题</h4>
      <ol>
        <li>结论是否真的从前提推出，还是只是被“因此”连接起来？</li>
        <li>是否把“提高内容学习效率”偷换成“替代深度阅读训练”？</li>
        <li>有没有需要一手来源验证的事实数字或研究结论？</li>
        <li>有没有反例：短期成绩提高但长期判断力下降？</li>
      </ol>
      <h4>建议</h4>
      <p>当前输出需要进入“推理连贯性复核”，不能只做事实核查。</p>
    `;
  }
  if (id === "cli-literacy") {
    const task = text("cli-task");
    out.innerHTML = `
      <h4>任务</h4><p>${task}</p>
      <h4>从 GUI 到 CLI 的阶梯</h4>
      <ol>
        <li>器具用户：手动打开每个文件，看字数。</li>
        <li>实用读者：用编辑器搜索和排序。</li>
        <li>脚本书写者：把流程写成可重复命令。</li>
        <li>系统作者：封装成可复用脚本，交给别人运行。</li>
      </ol>
      <h4>练习命令</h4>
      <pre>find . -name "*.md" -print0 \\
  | xargs -0 wc -m \\
  | sort -nr \\
  | head -10</pre>
      <h4>理解检查</h4>
      <ul><li><code>find</code> 负责找文件。</li><li><code>wc -m</code> 负责数字符。</li><li><code>sort -nr</code> 负责按数字倒序。</li><li><code>head -10</code> 负责截取前 10 个。</li></ul>
    `;
  }
  if (id === "producer-studio") {
    const project = text("ps-project");
    const learner = text("ps-learner");
    const deliverable = text("ps-deliverable");
    out.innerHTML = `
      <h4>项目制学习计划</h4>
      <p><b>项目：</b>${project}</p>
      <p><b>学习者：</b>${learner}</p>
      <div class="kanban">
        <div class="lane"><h4>待做</h4><div class="item">写清楚目标用户和痛点</div><div class="item">确定一页原型范围</div></div>
        <div class="lane"><h4>进行中</h4><div class="item">${deliverable}</div><div class="item">记录 3 个真实反馈问题</div></div>
        <div class="lane"><h4>待审查</h4><div class="item">AI 审查：完成度、真实性、用户价值</div><div class="item">发布到作品集</div></div>
      </div>
      <h4>本周评分 Rubric</h4>
      <ul><li>完成度：是否有可打开、可演示的产物。</li><li>真实性：是否解决真实用户问题，而非只做炫技 Demo。</li><li>表达：3 分钟内是否讲清楚 What/Why/How。</li><li>迭代：是否记录下一版要删什么、加什么。</li></ul>
    `;
  }
  if (id === "ai-audit") {
    const name = text("aa-name");
    const claim = text("aa-claim");
    const evidence = text("aa-evidence");
    const weakSignals = [
      /star|stars|Demo|视频|README/i.test(evidence),
      !/测试|test|失败率|端到端|用户案例/.test(evidence),
      /专业|自动|完整|一句话|一致|同步/.test(claim)
    ].filter(Boolean).length;
    out.innerHTML = `
      <h4>真实度审计报告</h4>
      <div class="metric-row">
        <div class="metric"><strong>${Math.max(1, 5 - weakSignals)}</strong><span>证据充分度</span></div>
        <div class="metric"><strong>${weakSignals >= 2 ? "高" : "中"}</strong><span>AI Washing 风险</span></div>
        <div class="metric"><strong>需补</strong><span>端到端样本</span></div>
        <div class="metric"><strong>需补</strong><span>失败率</span></div>
      </div>
      <p><b>${name}</b> 的核心声称是：${claim}</p>
      <h4>现有证据</h4><p>${evidence}</p>
      <h4>必须追问</h4>
      <ol><li>是否有未人工干预的端到端成品？</li><li>随机 20 次生成的成功率是多少？</li><li>README 声称的关键模块是否真的在主流程中调用？</li><li>有没有测试覆盖核心能力，而不仅是集成配置？</li></ol>
      <h4>结论</h4>
      <p>当前更像“高吸引力演示项目”，还不能判定为可稳定交付产品。</p>
    `;
  }
}

function bootPrototypes() {
  const picker = document.getElementById("prototypePicker");
  picker.innerHTML = selected.map((p) => `<option value="${p.id}">${p.source} · ${p.name}</option>`).join("");
  picker.addEventListener("change", (event) => renderPrototype(event.target.value));
  renderPrototype(selected[0].id);
}

function resetPrototype(id) {
  renderPrototype(id);
}

document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.dataset.view).classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  const run = event.target.closest("[data-run]");
  if (run) runPrototype(run.dataset.run);
  const reset = event.target.closest("[data-reset]");
  if (reset) resetPrototype(reset.dataset.reset);
});

renderMatrix();
renderProjectCards("刘小排", "liuCards");
renderProjectCards("笑来", "xiaoCards");
bootPrototypes();
