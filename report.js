const params = new URLSearchParams(window.location.search);

const elements = {
  wood: { ja: "木", title: "若葉を育てる", summary: "勢いだけでなく、まわりを育てながら前に進むタイプ。" },
  fire: { ja: "火", title: "場を明るくする", summary: "熱量と表現力で、気づけば空気をあたためているタイプ。" },
  earth: { ja: "土", title: "土台を守る", summary: "安心感と面倒見で、みんなの帰る場所を作るタイプ。" },
  metal: { ja: "金", title: "美学を磨く", summary: "こだわりと判断力で、物事の輪郭をきれいに整えるタイプ。" },
  water: { ja: "水", title: "流れを読む", summary: "感受性と知性で、変化の中に道を見つけるタイプ。" }
};

const ketsuJobTitles = {
  wood: { wolf: "翠の夜道案内人", deer: "翠の心番人", monkey: "翠の閃き奇術師", cheetah: "翠の疾風開拓者", "black-panther": "翠の美学騎士", lion: "翠の王冠統率者", tiger: "翠の不動守護者", tanuki: "翠の宿場案内人", koala: "翠の愉楽作戦係", elephant: "翠の寡黙職人", sheep: "翠の人脈結び手", pegasus: "翠の星渡り" },
  fire: { wolf: "紅蓮の夜道案内人", deer: "紅蓮の心番人", monkey: "紅蓮の閃き奇術師", cheetah: "紅蓮の疾風開拓者", "black-panther": "紅蓮の美学騎士", lion: "紅蓮の王冠統率者", tiger: "紅蓮の不動守護者", tanuki: "紅蓮の宴相談役", koala: "紅蓮の愉楽作戦係", elephant: "紅蓮の寡黙職人", sheep: "紅蓮の人脈結び手", pegasus: "紅蓮の星渡り" },
  earth: { wolf: "大地の夜道案内人", deer: "大地の心番人", monkey: "大地の閃き奇術師", cheetah: "大地の疾風開拓者", "black-panther": "大地の美学騎士", lion: "大地の王冠統率者", tiger: "大地の不動守護者", tanuki: "大地の相談役", koala: "大地の愉楽作戦係", elephant: "大地の寡黙職人", sheep: "大地の人脈結び手", pegasus: "大地の空渡り" },
  metal: { wolf: "白銀の夜道案内人", deer: "白銀の心番人", monkey: "白銀の閃き奇術師", cheetah: "白銀の疾風開拓者", "black-panther": "白銀の美学騎士", lion: "白銀の王冠統率者", tiger: "白銀の不動守護者", tanuki: "白銀の目利き相談役", koala: "白銀の愉楽作戦係", elephant: "白銀の寡黙職人", sheep: "白銀の人脈結び手", pegasus: "白銀の星渡り" },
  water: { wolf: "月影の夜道案内人", deer: "月影の心番人", monkey: "月影の閃き奇術師", cheetah: "月影の疾風開拓者", "black-panther": "月影の美学騎士", lion: "月影の王冠統率者", tiger: "月影の不動守護者", tanuki: "月影の旅籠相談役", koala: "月影の愉楽作戦係", elephant: "月影の寡黙職人", sheep: "月影の人脈結び手", pegasus: "月影の星渡り" }
};

const ketsuElementCodes = { wood: ["W", "木"], fire: ["F", "火"], earth: ["E", "土"], metal: ["M", "金"], water: ["A", "水"] };
const ketsuAnimalClassCodes = {
  wolf: ["A", "攻"], cheetah: ["A", "攻"], lion: ["A", "攻"],
  tiger: ["D", "守"], elephant: ["D", "守"], "black-panther": ["D", "守"],
  deer: ["S", "援"], sheep: ["S", "援"], tanuki: ["S", "援"],
  pegasus: ["C", "術"], monkey: ["C", "術"], koala: ["C", "術"]
};
const ketsuNumberCodes = { 1: ["I", "個"], 2: ["C", "協"], 3: ["I", "個"], 4: ["C", "協"], 5: ["I", "個"], 6: ["C", "協"], 7: ["I", "個"], 8: ["C", "協"], 9: ["I", "個"], 11: ["I", "個"], 22: ["C", "協"], 33: ["I", "個"] };
const ketsuZodiacCodes = {
  aries: ["I", "先"], cancer: ["I", "先"], libra: ["I", "先"], capricorn: ["I", "先"],
  taurus: ["S", "安"], leo: ["S", "安"], scorpio: ["S", "安"], aquarius: ["S", "安"],
  gemini: ["F", "変"], virgo: ["F", "変"], sagittarius: ["F", "変"], pisces: ["F", "変"]
};

const numerologyReadings = {
  1: ["切り開く人", "自分で道を作る力が強く、迷っている時間より動いて確かめる時間を大事にします。"],
  2: ["つなぐ人", "相手の気持ちや場の空気を読むのが得意で、関係性の中で力を発揮します。"],
  3: ["表現する人", "言葉、笑い、遊び心で空気を動かすタイプ。楽しそうにしている時ほど魅力が出ます。"],
  4: ["整える人", "土台作りや継続が得意。派手さよりも、ちゃんと続く仕組みに価値を置きます。"],
  5: ["旅する人", "変化や自由に強く、新しい刺激から自分らしい答えを見つけます。"],
  6: ["育てる人", "身近な人を大事にし、面倒を見る力があります。安心できる場を作るのが得意です。"],
  7: ["深く読む人", "観察力と探究心が強く、表面の下にある理由や構造を知りたくなります。"],
  8: ["動かす人", "現実を動かす力、責任を引き受ける力があります。頼られるほど本気が出ます。"],
  9: ["包む人", "視野が広く、人や物事を大きく受け止めます。終わらせる力、まとめる力があります。"],
  11: ["ひらめく人", "直感が強く、言葉になる前の違和感や可能性をつかみます。"],
  22: ["大きく作る人", "理想を現実に落とす力があります。小さな作業を積み上げて大きな形にできます。"],
  33: ["広く照らす人", "人を励ます力や、場をやわらかくする力があります。無理なくいるだけで影響が出ます。"]
};

const zodiacReadings = {
  aries: ["牡羊座", "最初に火をつける人", "思い立った瞬間に動き出す初速があります。迷いよりも実感を大事にします。"],
  taurus: ["牡牛座", "確かな感覚で育てる人", "心地よさ、手触り、安心できる積み重ねを大事にします。"],
  gemini: ["双子座", "言葉と好奇心でつなぐ人", "情報を拾い、言葉にし、人と人の間に流れを作ります。"],
  cancer: ["蟹座", "身内の安心を守る人", "大切な人や場所を守る気持ちが強く、安心できる輪の中で力を発揮します。"],
  leo: ["獅子座", "自分らしく輝く人", "表現すること、堂々と立つこと、人を楽しませることに力があります。"],
  virgo: ["乙女座", "細部を整える人", "観察力と改善力があり、物事を使いやすく、正確に整えていきます。"],
  libra: ["天秤座", "関係のバランスを取る人", "人との距離感や場の調和を見ながら、ちょうどいい落としどころを探せます。"],
  scorpio: ["蠍座", "深く結びつく人", "表面よりも本質を見たいタイプ。信頼した相手やテーマには深く集中します。"],
  sagittarius: ["射手座", "遠くへ広げる人", "自由、探求、まだ知らない世界への関心があります。視野を広げるほど元気になります。"],
  capricorn: ["山羊座", "形にして積み上げる人", "責任感と現実感があり、目標を形にするために段階を踏んで進めます。"],
  aquarius: ["水瓶座", "自由な視点で変える人", "常識を少し離れた場所から見て、新しい仕組みや関係性を考えられます。"],
  pisces: ["魚座", "境界をやわらかくする人", "感受性が豊かで、人の気持ちや場のムードを自然に受け取ります。"]
};

const bloodReadings = {
  A: ["気配りの精度", "段取りや責任感が強く、相手が困る前に気づきやすいタイプです。"],
  B: ["自由な直感", "好き嫌いのセンサーがはっきりしていて、面白いと思った時の集中力があります。"],
  O: ["大きな推進力", "大らかで現実感があり、場をまとめたり人を引っぱったりする力があります。"],
  AB: ["独自の観察眼", "感情と理性の両方を行き来しながら、少し離れた場所から場を見ています。"],
  不明: ["未設定の余白", "血液型の型に寄せず、五行と数秘の特徴をそのまま強く見ます。"]
};

function calculateZodiacFromMonthDay(monthDayValue) {
  if (!monthDayValue) return null;
  const [month, day] = monthDayValue.split("-").map(Number);
  const monthDay = month * 100 + day;
  if (monthDay >= 321 && monthDay <= 419) return "aries";
  if (monthDay >= 420 && monthDay <= 520) return "taurus";
  if (monthDay >= 521 && monthDay <= 621) return "gemini";
  if (monthDay >= 622 && monthDay <= 722) return "cancer";
  if (monthDay >= 723 && monthDay <= 822) return "leo";
  if (monthDay >= 823 && monthDay <= 922) return "virgo";
  if (monthDay >= 923 && monthDay <= 1023) return "libra";
  if (monthDay >= 1024 && monthDay <= 1122) return "scorpio";
  if (monthDay >= 1123 && monthDay <= 1221) return "sagittarius";
  if (monthDay >= 1222 || monthDay <= 119) return "capricorn";
  if (monthDay >= 120 && monthDay <= 218) return "aquarius";
  return "pisces";
}

function getScores() {
  const scores = {};
  let hasScore = false;
  Object.keys(elements).forEach((id) => {
    const value = Number(params.get(id));
    scores[id] = Number.isFinite(value) ? value : 0;
    if (scores[id] > 0) hasScore = true;
  });
  return hasScore ? scores : null;
}

function sortedScores(scores) {
  return Object.entries(scores)
    .map(([id, score]) => ({ id, score, element: elements[id] }))
    .sort((a, b) => b.score - a.score);
}

function addChip(text) {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = text;
  document.querySelector("#summary-chips").append(chip);
}

function addCard(target, title, body) {
  const card = document.createElement("article");
  card.className = "card";
  const heading = document.createElement("h3");
  heading.textContent = title;
  const text = document.createElement("p");
  text.textContent = body;
  card.append(heading, text);
  target.append(card);
}

function buildKetsuJobTitle(animal, elementId) {
  return ketsuJobTitles[elementId]?.[animal.id] || `${elements[elementId]?.ja || "木"}の${animal.nameJa}`;
}

function buildKetsuRpgCode(animal, elementId, numerology, zodiac) {
  const elementCode = ketsuElementCodes[elementId] || ketsuElementCodes.wood;
  const animalCode = ketsuAnimalClassCodes[animal.id] || ["S", "援"];
  const numberCode = ketsuNumberCodes[numerology] || ["I", "個"];
  const zodiacCode = ketsuZodiacCodes[zodiac] || ["I", "先"];

  return {
    code: `${elementCode[0]}${animalCode[0]}${numberCode[0]}${zodiacCode[0]}`,
    tags: [elementCode[1], animalCode[1], numberCode[1], zodiacCode[1]]
  };
}

function getBirthMonthDay() {
  const birthDate = params.get("birthDate");
  if (birthDate) {
    const [, month, day] = birthDate.split("-");
    return `${month}-${day}`;
  }
  return params.get("birth");
}

async function renderReport() {
  const [animalsResponse, warehouseResponse] = await Promise.all([
    fetch("assets/animals/animals.json"),
    fetch("assets/diagnosis/basic-diagnosis-warehouse.json")
  ]);
  const animals = await animalsResponse.json();
  const warehouse = await warehouseResponse.json();

  const animal = animals.find((item) => item.id === params.get("animal")) || animals.find((item) => item.id === "tanuki") || animals[0];
  const animalCore = warehouse.animalCore?.[animal.id];
  const elementId = params.get("element") || "earth";
  const element = elements[elementId] || elements.earth;
  const numerology = params.get("number") || "9";
  const numberReading = numerologyReadings[numerology] || numerologyReadings[9];
  const zodiacId = calculateZodiacFromMonthDay(getBirthMonthDay()) || params.get("zodiac") || "taurus";
  const zodiacReading = zodiacReadings[zodiacId] || zodiacReadings.taurus;
  const blood = params.get("blood") || "O";
  const bloodReading = bloodReadings[blood] || bloodReadings.不明;
  const jobTitle = buildKetsuJobTitle(animal, elementId);
  const ketsuCode = buildKetsuRpgCode(animal, elementId, numerology, zodiacId);
  const resultTitle = `${element.title}、${animalCore?.resultTitle || `${animal.nameJa}タイプ`}`;
  const documentTitle = `${jobTitle} - ${resultTitle}`;
  const scores = getScores();
  const scoreText = scores
    ? `五行では${element.ja}が${scores[elementId] || 0}点で強く出ています。`
    : `${element.ja}の「${element.title}」力が出ています。`;

  document.title = `${documentTitle} - ケツ印どうぶつ診断`;
  document.querySelector("#animal-image").src = animal.image;
  document.querySelector("#animal-image").alt = animal.nameJa;
  document.querySelector("#job-title").textContent = jobTitle;
  document.querySelector("#job-code").textContent = `${ketsuCode.code}型 - ${ketsuCode.tags.join(" / ")}`;
  document.querySelector("#summary-title").textContent = resultTitle;
  document.querySelector("#summary-body").textContent = `${animalCore?.oneLine || `${animal.nameJa}タイプの持ち味`} ${scoreText}${element.summary} そこに、数秘${numerology}の「${numberReading[0]}」、${zodiacReading[0]}の感性、${blood}型の対人傾向が重なります。`;

  addChip(`動物 ${animal.nameJa}`);
  addChip(`五行 ${element.ja}`);
  addChip(`ジョブ ${jobTitle}`);
  addChip(`K-RPG ${ketsuCode.code}型`);
  addChip(`数秘 ${numerology}`);
  addChip(`星座 ${zodiacReading[0]}`);
  addChip(`血液型 ${blood}`);

  document.querySelector("#element-note").textContent = `${element.ja}は「${element.title}」力。${element.summary}`;
  const scoreList = document.querySelector("#score-list");
  if (scores) {
    const maxScore = Math.max(...Object.values(scores), 1);
    Object.entries(elements).forEach(([id, item]) => {
      const score = scores[id] || 0;
      const row = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <div class="score-head"><span>${item.ja} / ${item.title}</span><span>${score}点</span></div>
        <div class="score-track"><div class="score-fill" style="width: ${Math.max(8, Math.round((score / maxScore) * 100))}%"></div></div>
      `;
      scoreList.append(row);
    });
  }

  const pillars = document.querySelector("#pillar-grid");
  addCard(pillars, `動物：${animal.nameJa}`, animalCore?.oneLine || "動物タイプの基本傾向を見ます。");
  addCard(pillars, `五行：${element.ja}`, element.summary);
  addCard(pillars, `数秘：${numerology}`, `${numberReading[0]}。${numberReading[1]}`);
  addCard(pillars, `星座：${zodiacReading[0]}`, `${zodiacReading[1]}。${zodiacReading[2]}`);
  addCard(pillars, `血液型：${blood}`, `${bloodReading[0]}。${bloodReading[1]}`);

  const fortunes = document.querySelector("#fortune-grid");
  const strengths = animalCore?.strengths?.slice(0, 3).join("、") || "自分らしい持ち味";
  const weaknesses = animalCore?.weakPoints?.slice(0, 3).join("、") || "疲れた時の偏り";
  addCard(fortunes, "長所", `${animalCore?.nameJa || animal.nameJa}の長所は、${strengths}に出ます。`);
  addCard(fortunes, "短所・注意点", `注意点は、${weaknesses}です。偏りに早めに気づくと扱いやすくなります。`);
  addCard(fortunes, "総合運", `数秘${numerology}と${zodiacReading[0]}の感性が合わさるため、意味を感じる役割ほど運が動きます。`);
  addCard(fortunes, "回復ヒント", animalCore?.recoveryHint || "落ち着ける時間を作ると戻ってきます。");

  document.querySelector("#back-link").href = `animals.html?${params.toString()}`;
}

document.querySelector("#print-button").addEventListener("click", () => window.print());
renderReport().catch((error) => {
  console.error(error);
  document.querySelector("#summary-title").textContent = "レポートを読み込めませんでした";
});
