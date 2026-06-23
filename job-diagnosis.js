const questionList = document.querySelector("#question-list");
const jobForm = document.querySelector("#job-form");
const playerNameInput = document.querySelector("#player-name");
const formError = document.querySelector("#form-error");
const resultAnimalImage = document.querySelector("#result-animal-image");
const resultCode = document.querySelector("#result-code");
const resultTitle = document.querySelector("#result-title");
const resultSubtitle = document.querySelector("#result-subtitle");
const resultBody = document.querySelector("#result-body");
const resultTags = document.querySelector("#result-tags");
const statList = document.querySelector("#stat-list");
const fortuneText = document.querySelector("#fortune-text");

const elementData = {
  wood: { ja: "木", code: "W", label: "成長", prefix: "翠の", color: "#4b8f65" },
  fire: { ja: "火", code: "F", label: "熱量", prefix: "紅蓮の", color: "#e66f2a" },
  earth: { ja: "土", code: "E", label: "安定", prefix: "大地の", color: "#b8843a" },
  metal: { ja: "金", code: "M", label: "美学", prefix: "白銀の", color: "#6f7f8f" },
  water: { ja: "水", code: "A", label: "洞察", prefix: "月影の", color: "#4779b8" }
};

const classData = {
  attack: { ja: "攻撃役", code: "A", label: "切り拓く", animals: ["cheetah", "lion", "wolf"] },
  guard: { ja: "守護役", code: "D", label: "受け止める", animals: ["tiger", "elephant", "black-panther"] },
  support: { ja: "支援役", code: "S", label: "つなぐ", animals: ["tanuki", "sheep", "deer"] },
  magic: { ja: "術士役", code: "C", label: "ひらめく", animals: ["pegasus", "monkey", "koala"] }
};

const animalData = {
  wolf: { ja: "狼", image: "assets/animals/wolf.png", role: "夜道案内人", text: "孤独を恐れず、自分の感覚で道を見つけるタイプ。" },
  deer: { ja: "こじか", image: "assets/animals/deer.png", role: "心番人", text: "まっすぐな信頼とやさしさで、場の温度を整えるタイプ。" },
  monkey: { ja: "猿", image: "assets/animals/monkey.png", role: "閃き奇術師", text: "軽やかな発想と会話で、停滞した場に仕掛けを作るタイプ。" },
  cheetah: { ja: "チータ", image: "assets/animals/cheetah.png", role: "疾風開拓者", text: "初速と突破力で、まだ形のない道を先に走るタイプ。" },
  "black-panther": { ja: "黒ひょう", image: "assets/animals/black-panther.png", role: "美学騎士", text: "美意識と距離感を武器に、自分らしい立ち位置を守るタイプ。" },
  lion: { ja: "ライオン", image: "assets/animals/lion.png", role: "王冠統率者", text: "責任と誇りを持って、堂々と旗を掲げるタイプ。" },
  tiger: { ja: "虎", image: "assets/animals/tiger.png", role: "不動守護者", text: "安定感と面倒見で、仲間の背中を支えるタイプ。" },
  tanuki: { ja: "たぬき", image: "assets/animals/tanuki.png", role: "相談役", text: "経験と愛嬌を使い、場に馴染みながら人を助けるタイプ。" },
  koala: { ja: "子守熊", image: "assets/animals/koala.png", role: "愉楽作戦係", text: "楽しむ力と観察眼で、勝ち筋をゆっくり組み立てるタイプ。" },
  elephant: { ja: "ゾウ", image: "assets/animals/elephant.png", role: "寡黙職人", text: "焦らず積み上げ、確かな成果を形にするタイプ。" },
  sheep: { ja: "ひつじ", image: "assets/animals/sheep.png", role: "人脈結び手", text: "人と人をつなぎ、安心できる輪を広げるタイプ。" },
  pegasus: { ja: "ペガサス", image: "assets/animals/pegasus.png", role: "星渡り", text: "自由な感性で、常識の外にある可能性へ飛ぶタイプ。" }
};

const statLabels = {
  action: "行動力",
  harmony: "調和力",
  insight: "洞察力",
  craft: "構築力",
  charm: "魅了力",
  resilience: "耐久力"
};

const questions = [
  {
    text: "冒険のはじまりで、あなたが自然に選ぶ動きは？",
    options: [
      option("attack", "fire", "cheetah", { action: 3, charm: 1 }, "まず走って突破口を作る"),
      option("support", "earth", "tanuki", { harmony: 2, resilience: 2 }, "仲間の状態を見て場を整える"),
      option("magic", "water", "pegasus", { insight: 3, charm: 1 }, "空気の流れを読んで道を探る")
    ]
  },
  {
    text: "頼られた時に一番出やすい力は？",
    options: [
      option("guard", "earth", "tiger", { resilience: 3, harmony: 1 }, "受け止めて安心させる"),
      option("magic", "metal", "monkey", { insight: 2, craft: 2 }, "仕組みや抜け道を考える"),
      option("attack", "wood", "wolf", { action: 2, insight: 1 }, "相手を前へ押し出す")
    ]
  },
  {
    text: "自分らしい勝ち方に近いものは？",
    options: [
      option("attack", "wood", "lion", { action: 2, charm: 2 }, "堂々と旗を立てて勝つ"),
      option("guard", "metal", "black-panther", { craft: 2, resilience: 2 }, "美しく整えて負けない形にする"),
      option("support", "water", "sheep", { harmony: 3, insight: 1 }, "味方をつないで流れを作る")
    ]
  },
  {
    text: "疲れた時に戻りやすい場所は？",
    options: [
      option("guard", "earth", "elephant", { resilience: 2, craft: 2 }, "静かに積み上げられる場所"),
      option("magic", "water", "koala", { insight: 2, charm: 1 }, "好きなことを考えられる余白"),
      option("support", "fire", "deer", { harmony: 2, charm: 2 }, "あたたかく迎えてくれる輪")
    ]
  },
  {
    text: "チームで褒められるとうれしい言葉は？",
    options: [
      option("support", "wood", "sheep", { harmony: 3, craft: 1 }, "あなたがいるとまとまる"),
      option("attack", "fire", "cheetah", { action: 3, charm: 1 }, "勢いを作ってくれた"),
      option("guard", "metal", "tiger", { resilience: 2, craft: 2 }, "判断が頼もしかった")
    ]
  },
  {
    text: "新しい企画で担当したい役割は？",
    options: [
      option("magic", "wood", "monkey", { insight: 2, action: 1, charm: 1 }, "アイデアと仕掛けを出す"),
      option("guard", "earth", "elephant", { craft: 3, resilience: 1 }, "続く仕組みを作る"),
      option("support", "fire", "tanuki", { harmony: 2, charm: 2 }, "人を巻き込んで場を温める")
    ]
  },
  {
    text: "苦手になりやすい状況は？",
    options: [
      option("attack", "wood", "wolf", { action: 2, resilience: 1 }, "何も進まず停滞している"),
      option("magic", "water", "pegasus", { insight: 2, charm: 1 }, "自由に考える余地がない"),
      option("guard", "metal", "black-panther", { craft: 2, resilience: 1 }, "雑で筋が通っていない")
    ]
  },
  {
    text: "最後に残したい印象は？",
    options: [
      option("attack", "fire", "lion", { charm: 3, action: 1 }, "あの人は場を動かした"),
      option("support", "earth", "deer", { harmony: 3, resilience: 1 }, "あの人は心を守ってくれた"),
      option("magic", "metal", "koala", { insight: 2, craft: 2 }, "あの人は読めないけどすごい")
    ]
  },
  {
    text: "成果を出す時、最初に整えたいものは？",
    options: [
      option("guard", "earth", "tiger", { resilience: 2, craft: 2 }, "続けられる土台と役割分担"),
      option("magic", "water", "koala", { insight: 3, harmony: 1 }, "見えない流れと本音の整理"),
      option("attack", "fire", "cheetah", { action: 3, charm: 1 }, "場の勢いと最初の一手")
    ]
  },
  {
    text: "あなたの魅力が出やすい瞬間は？",
    options: [
      option("support", "wood", "deer", { harmony: 2, charm: 2 }, "誰かが安心して本音を話せた時"),
      option("attack", "metal", "black-panther", { action: 1, craft: 2, charm: 1 }, "自分の美学で選び抜いた時"),
      option("magic", "fire", "monkey", { insight: 2, charm: 2 }, "ひらめきで空気を変えた時")
    ]
  },
  {
    text: "大きな壁が来た時、どう越えたい？",
    options: [
      option("guard", "metal", "elephant", { craft: 3, resilience: 1 }, "分解して、確実に片づける"),
      option("attack", "wood", "wolf", { action: 2, insight: 2 }, "自分の道を見つけて突破する"),
      option("support", "earth", "sheep", { harmony: 2, resilience: 2 }, "仲間と支え合って越える")
    ]
  },
  {
    text: "これから伸ばしたい才能は？",
    options: [
      option("magic", "water", "pegasus", { insight: 2, charm: 2 }, "まだ見ぬ可能性を読む感性"),
      option("support", "fire", "tanuki", { harmony: 2, charm: 2 }, "人を巻き込むあたたかさ"),
      option("guard", "wood", "lion", { action: 1, resilience: 2, craft: 1 }, "大きく育てて守る力")
    ]
  }
];

function option(jobClass, element, animal, stats, label) {
  return { jobClass, element, animal, stats, label };
}

function renderQuestions() {
  questionList.replaceChildren(...questions.map((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "grid gap-3 rounded-lg border border-[#eadfd4] bg-[#fffaf4] p-4";
    const legend = document.createElement("legend");
    legend.className = "px-1 text-base font-black text-deep";
    legend.textContent = `Q${index + 1}. ${question.text}`;
    const grid = document.createElement("div");
    grid.className = "mt-3 grid gap-3";

    question.options.forEach((answer, answerIndex) => {
      const label = document.createElement("label");
      label.className = "answer-card grid cursor-pointer gap-1 rounded-lg border border-[#eadfd4] bg-white px-4 py-3 transition";
      label.innerHTML = `
        <span class="text-sm font-black text-deep">${answer.label}</span>
        <span class="text-xs font-bold text-slate-500">${elementData[answer.element].ja} / ${classData[answer.jobClass].ja} / ${animalData[answer.animal].ja}</span>
      `;
      const input = document.createElement("input");
      input.className = "sr-only";
      input.type = "radio";
      input.name = `q${index}`;
      input.value = String(answerIndex);
      if (index === 0 && answerIndex === 1) input.checked = true;
      label.prepend(input);
      grid.append(label);
    });

    fieldset.append(legend, grid);
    return fieldset;
  }));
}

function createScores() {
  return {
    elements: Object.fromEntries(Object.keys(elementData).map((key) => [key, 0])),
    classes: Object.fromEntries(Object.keys(classData).map((key) => [key, 0])),
    animals: Object.fromEntries(Object.keys(animalData).map((key) => [key, 0])),
    stats: Object.fromEntries(Object.keys(statLabels).map((key) => [key, 2]))
  };
}

function collectResult() {
  const scores = createScores();
  const selectedAnswers = [];

  questions.forEach((question, index) => {
    const selected = jobForm.querySelector(`input[name="q${index}"]:checked`);
    if (!selected) return;
    const answer = question.options[Number(selected.value)];
    selectedAnswers.push(answer);
    scores.elements[answer.element] += 1;
    scores.classes[answer.jobClass] += 1;
    scores.animals[answer.animal] += 1;
    Object.entries(answer.stats).forEach(([stat, value]) => {
      scores.stats[stat] += value;
    });
  });

  if (selectedAnswers.length !== questions.length) return null;

  const element = topKey(scores.elements);
  const jobClass = topKey(scores.classes);
  const animal = chooseAnimal(scores.animals, classData[jobClass].animals);
  const driveCode = scores.stats.action + scores.stats.charm >= scores.stats.harmony + scores.stats.craft ? "I" : "C";
  const styleCode = scores.stats.insight + scores.stats.craft >= scores.stats.action + scores.stats.charm ? "S" : "F";

  return {
    element,
    jobClass,
    animal,
    code: `${elementData[element].code}${classData[jobClass].code}${driveCode}${styleCode}`,
    scores
  };
}

function topKey(scoreMap) {
  return Object.entries(scoreMap).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
}

function chooseAnimal(animalScores, candidates) {
  return candidates
    .map((animal) => [animal, animalScores[animal] || 0])
    .sort((a, b) => b[1] - a[1] || candidates.indexOf(a[0]) - candidates.indexOf(b[0]))[0][0];
}

function renderResult(result) {
  const element = elementData[result.element];
  const jobClass = classData[result.jobClass];
  const animal = animalData[result.animal];
  const playerName = playerNameInput.value.trim() || "あなた";
  const title = `${element.prefix}${animal.role}`;

  resultAnimalImage.src = animal.image;
  resultAnimalImage.alt = animal.ja;
  resultCode.textContent = `${result.code}型 - ${element.ja} / ${jobClass.ja}`;
  resultTitle.textContent = title;
  resultSubtitle.textContent = `${playerName}さんは、${jobClass.label}力を持つ${animal.ja}タイプ`;
  resultBody.textContent = `${animal.text} ${element.label}の属性が強く、今は「${jobClass.ja}」として力を出しやすい状態です。特に${getTopStats(result.scores.stats, 2).join("と")}が伸びているので、得意な役割を先に決めるほど動きやすくなります。`;

  resultTags.replaceChildren(
    tag(`属性 ${element.ja}`),
    tag(`役割 ${jobClass.ja}`),
    tag(`どうぶつ ${animal.ja}`),
    tag(`コード ${result.code}型`)
  );

  statList.replaceChildren(...Object.entries(statLabels).map(([id, label]) => {
    const value = Math.min(10, result.scores.stats[id]);
    const row = document.createElement("div");
    row.innerHTML = `
      <div class="flex items-center justify-between gap-3 text-xs font-black text-deep">
        <span>${label}</span>
        <span>${value}/10</span>
      </div>
      <div class="mt-1 h-2 overflow-hidden rounded-full bg-[#fff4e8]">
        <div class="stat-fill h-full rounded-full" style="width: ${value * 10}%; background: ${element.color};"></div>
      </div>
    `;
    return row;
  }));

  fortuneText.textContent = buildFortune(result, title);
}

function tag(text) {
  const item = document.createElement("span");
  item.className = "rounded-full bg-white px-3 py-2 text-deep shadow-sm";
  item.textContent = text;
  return item;
}

function getTopStats(stats, limit = 2) {
  return Object.entries(stats)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([id]) => statLabels[id]);
}

function buildFortune(result, title) {
  const strongestStat = topKey(result.scores.stats);
  const statName = statLabels[strongestStat];
  const element = elementData[result.element];
  const secondStat = getTopStats(result.scores.stats, 2)[1] || statName;
  return `${title}の運勢は、${statName}を使うほど上がります。${element.ja}の属性が強いので、無理に全部を背負うより、${statName}と${secondStat}が活きる場所を選ぶと流れが整います。`;
}

renderQuestions();
renderResult({
  element: "earth",
  jobClass: "support",
  animal: "tanuki",
  code: "ESIS",
  scores: createScores()
});

jobForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = collectResult();
  if (!result) {
    formError.textContent = "すべての質問に答えてください。";
    formError.classList.remove("hidden");
    return;
  }

  formError.classList.add("hidden");
  renderResult(result);
  resultTitle.scrollIntoView({ block: "center", behavior: "smooth" });
});
