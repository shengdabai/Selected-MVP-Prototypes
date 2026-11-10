const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const source = fs.readFileSync(path.join(__dirname, '../assets/app.js'), 'utf8');

function loadApp() {
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) {
        elements.set(id, { value: '', innerHTML: '', addEventListener() {} });
      }
      return elements.get(id);
    },
    querySelectorAll() { return []; },
    addEventListener() {}
  };
  const app = vm.createContext({ document });
  vm.runInContext(source, app);
  return { app, element: (id) => document.getElementById(id) };
}

const outputFields = {
  'skill-factory': ['sf-role', 'sf-sop', 'sf-tools'],
  'demand-canvas': ['dc-user', 'dc-scene', 'dc-price', 'dc-problem'],
  'influencer-radar': ['ir-competitor', 'ir-niche', 'ir-platform'],
  'quality-gate': ['qg-framework', 'qg-concern'],
  'reading-marathon': ['rm-title', 'rm-goal'],
  'ai-evaluator': ['ae-text'],
  'cli-literacy': ['cli-task'],
  'producer-studio': ['ps-project', 'ps-learner', 'ps-deliverable'],
  'ai-audit': ['aa-name', 'aa-claim', 'aa-evidence']
};

// Includes an executable HTML tag, ampersand and both attribute delimiters.
const payload = '<img src=x onerror=alert(1)>&"\'';
const escapedPayload = '&lt;img src=x onerror=alert(1)&gt;&amp;&quot;&#39;';

for (const [id, fields] of Object.entries(outputFields)) {
  test(`${id}: every reflected input is displayed as text`, () => {
    for (const field of fields) {
      const { app, element } = loadApp();
      element(field).value = payload;
      app.runPrototype(id);
      const output = element(`output-${id}`).innerHTML;
      assert.ok(output.includes(escapedPayload), `${field} must be HTML-escaped`);
      assert.ok(!output.includes('<img'), `${field} must not insert an HTML element`);
    }
  });
}

test('HTML-looking code retains its original analysis semantics', () => {
  const { app, element } = loadApp();
  element('qg-diff').value = '+ fetch("/api/user?id=" + userId)\n- expect(value).toBe("<a>")';
  app.runPrototype('quality-gate');
  const output = element('output-quality-gate').innerHTML;
  for (const label of ['外部请求', '用户输入拼接', '测试删除']) {
    assert.ok(output.includes(`<strong>有</strong><span>${label}</span>`));
  }
});

function readingSchedule(value) {
  const { app, element } = loadApp();
  element('rm-minutes').value = value;
  app.runPrototype('reading-marathon');
  return [...element('output-reading-marathon').innerHTML.matchAll(/<strong>([^<]+)<\/strong>/g)]
    .map((match) => Number(match[1]));
}

test('invalid reading durations use the 45-minute default', () => {
  for (const value of ['', '0', '-5', 'Infinity', '1e309', 'NaN', 'abc', '2.5']) {
    assert.deepEqual(readingSchedule(value), [20, 9, 9, 7], value);
  }
});

test('reading stages sum to the requested whole minutes', () => {
  for (const minutes of [1, 2, 3, 5, 10, 30, 45, 60, 90]) {
    const stages = readingSchedule(String(minutes));
    assert.equal(stages.length, 4);
    assert.ok(stages.every((stage) => Number.isInteger(stage) && stage >= 0));
    assert.equal(stages.reduce((sum, stage) => sum + stage, 0), minutes);
  }
});
