const animalGrid = document.querySelector("#animal-grid");
const modeButtons = document.querySelectorAll("[data-view-mode]");
const animalsPageTitle = document.querySelector("#animals-page-title");
const animalsPageLead = document.querySelector("#animals-page-lead");
const prepRoomBadge = document.querySelector("#prep-room-badge");
const cardControlPanel = document.querySelector("#card-control-panel");
const personalResultPanel = document.querySelector("#personal-result-panel");
const cardAnimalSelect = document.querySelector("#card-animal-select");
const cardElementSelect = document.querySelector("#card-element-select");
const cardNumerologySelect = document.querySelector("#card-numerology-select");
const cardBloodSelect = document.querySelector("#card-blood-select");
const elementChipList = document.querySelector("#element-chip-list");
const fortuneCard = document.querySelector("#fortune-card");
const fortuneCardElementEn = document.querySelector("#fortune-card-element-en");
const fortuneCardTitleText = document.querySelector("#fortune-card-title-text");
const fortuneCardSigil = document.querySelector("#fortune-card-sigil");
const fortuneCardImage = document.querySelector("#fortune-card-image");
const fortuneCardName = document.querySelector("#fortune-card-name");
const fortuneCardSummary = document.querySelector("#fortune-card-summary");
const fortuneCardNumber = document.querySelector("#fortune-card-number");
const fortuneCardBlood = document.querySelector("#fortune-card-blood");
const fortuneCardElementJa = document.querySelector("#fortune-card-element-ja");
const resultSummaryTitle = document.querySelector("#result-summary-title");
const resultSummaryBody = document.querySelector("#result-summary-body");
const resultSummaryChips = document.querySelector("#result-summary-chips");
const fiveElementScorePanel = document.querySelector("#five-element-score-panel");
const fiveElementSubtype = document.querySelector("#five-element-subtype");
const fiveElementScoreBars = document.querySelector("#five-element-score-bars");
const savePdfButton = document.querySelector("#save-pdf-button");
const savePdfStatus = document.querySelector("#save-pdf-status");
const resultPdfSection = document.querySelector("#result-pdf-section");
const pdfReportSection = document.querySelector("#pdf-report-section");
const pdfReportTitle = document.querySelector("#pdf-report-title");
const pdfReportLead = document.querySelector("#pdf-report-lead");
const pdfReportImage = document.querySelector("#pdf-report-image");
const pdfReportMainTitle = document.querySelector("#pdf-report-main-title");
const pdfReportSummary = document.querySelector("#pdf-report-summary");
const pdfReportChips = document.querySelector("#pdf-report-chips");
const pdfReportElementNote = document.querySelector("#pdf-report-element-note");
const pdfReportScores = document.querySelector("#pdf-report-scores");
const pdfReportPillars = document.querySelector("#pdf-report-pillars");
const pdfReportFortunes = document.querySelector("#pdf-report-fortunes");
const analysisAnimalBadge = document.querySelector("#analysis-animal-badge");
const analysisAnimalTitle = document.querySelector("#analysis-animal-title");
const analysisAnimalBody = document.querySelector("#analysis-animal-body");
const analysisAnimalAdvice = document.querySelector("#analysis-animal-advice");
const analysisElementBadge = document.querySelector("#analysis-element-badge");
const analysisElementTitle = document.querySelector("#analysis-element-title");
const analysisElementBody = document.querySelector("#analysis-element-body");
const analysisElementAdvice = document.querySelector("#analysis-element-advice");
const analysisNumberBadge = document.querySelector("#analysis-number-badge");
const analysisNumberTitle = document.querySelector("#analysis-number-title");
const analysisNumberBody = document.querySelector("#analysis-number-body");
const analysisNumberAdvice = document.querySelector("#analysis-number-advice");
const analysisZodiacBadge = document.querySelector("#analysis-zodiac-badge");
const analysisZodiacTitle = document.querySelector("#analysis-zodiac-title");
const analysisZodiacBody = document.querySelector("#analysis-zodiac-body");
const analysisZodiacAdvice = document.querySelector("#analysis-zodiac-advice");
const analysisZodiacNote = document.querySelector("#analysis-zodiac-note");
const analysisBloodBadge = document.querySelector("#analysis-blood-badge");
const analysisBloodTitle = document.querySelector("#analysis-blood-title");
const analysisBloodBody = document.querySelector("#analysis-blood-body");
const analysisBloodAdvice = document.querySelector("#analysis-blood-advice");
const resultStockList = document.querySelector("#result-stock-list");
const resultStockSection = document.querySelector("#result-stock-section");
const clearResultStockButton = document.querySelector("#clear-result-stock");
const animalLibrarySection = document.querySelector("#animal-library-section");
const deepAnimalTitle = document.querySelector("#deep-animal-title");
const deepAnimalOneline = document.querySelector("#deep-animal-oneline");
const deepAnimalSummary = document.querySelector("#deep-animal-summary");
const deepStrengths = document.querySelector("#deep-strengths");
const deepWeakPoints = document.querySelector("#deep-weak-points");
const deepSocialImpression = document.querySelector("#deep-social-impression");
const deepCommunicationStyle = document.querySelector("#deep-communication-style");
const deepWorkStyle = document.querySelector("#deep-work-style");
const deepCombinedReading = document.querySelector("#deep-combined-reading");
const fortuneStrengthSummary = document.querySelector("#fortune-strength-summary");
const fortuneWeaknessSummary = document.querySelector("#fortune-weakness-summary");
const fortuneOverallSummary = document.querySelector("#fortune-overall-summary");
const deepRecoveryHint = document.querySelector("#deep-recovery-hint");
const deepKetsujirushiLine = document.querySelector("#deep-ketsujirushi-line");
const imagePromptEyebrow = document.querySelector("#image-prompt-eyebrow");
const imagePromptTitle = document.querySelector("#image-prompt-title");
const imagePromptDescription = document.querySelector("#image-prompt-description");
const imagePromptModeButtons = document.querySelectorAll("[data-prompt-mode]");
const imagePromptOutput = document.querySelector("#image-prompt-output");
const copyImagePromptButton = document.querySelector("#copy-image-prompt");
const imagePromptCopyStatus = document.querySelector("#image-prompt-copy-status");

let animals = [];
let diagnosisWarehouse = null;
let viewMode = "card";
let selectedAnimalId = "lion";
let imagePromptMode = "card";
const resultStockKey = "ketsujirushiDiagnosisResults";
const resultModeParams = new URLSearchParams(window.location.search);
const isPersonalResultMode = resultModeParams.has("animal")
  || resultModeParams.has("element")
  || resultModeParams.has("number")
  || resultModeParams.has("blood");

const elements = {
  wood: {
    ja: "木",
    en: "Wood",
    title: "若葉を育てる",
    summary: "勢いだけでなく、まわりを育てながら前に進むタイプ。"
  },
  fire: {
    ja: "火",
    en: "Fire",
    title: "場を明るくする",
    summary: "熱量と表現力で、気づけば空気をあたためているタイプ。"
  },
  earth: {
    ja: "土",
    en: "Earth",
    title: "土台を守る",
    summary: "安心感と面倒見で、みんなの帰る場所を作るタイプ。"
  },
  metal: {
    ja: "金",
    en: "Metal",
    title: "美学を磨く",
    summary: "こだわりと判断力で、物事の輪郭をきれいに整えるタイプ。"
  },
  water: {
    ja: "水",
    en: "Water",
    title: "流れを読む",
    summary: "感受性と知性で、変化の中に道を見つけるタイプ。"
  }
};

const numerologyReadings = {
  1: {
    title: "切り開く人",
    body: "自分で道を作る力が強く、迷っている時間より動いて確かめる時間を大事にします。",
    advice: "先頭を走るほど、ひと呼吸おいて周りの速度を見ると強みが伝わります。"
  },
  2: {
    title: "つなぐ人",
    body: "相手の気持ちや場の空気を読むのが得意で、関係性の中で力を発揮します。",
    advice: "合わせすぎた時は、自分の本音を小さく出すだけで流れが整います。"
  },
  3: {
    title: "表現する人",
    body: "言葉、笑い、遊び心で空気を動かすタイプ。楽しそうにしている時ほど魅力が出ます。",
    advice: "思いつきを形にする場所を持つと、才能が散らばらず残ります。"
  },
  4: {
    title: "整える人",
    body: "土台作りや継続が得意。派手さよりも、ちゃんと続く仕組みに価値を置きます。",
    advice: "完璧になる前に一度出すと、堅実さが前に進む力になります。"
  },
  5: {
    title: "旅する人",
    body: "変化や自由に強く、新しい刺激から自分らしい答えを見つけます。",
    advice: "自由度を守りつつ、最低限の約束だけ決めると動きやすくなります。"
  },
  6: {
    title: "育てる人",
    body: "身近な人を大事にし、面倒を見る力があります。安心できる場を作るのが得意です。",
    advice: "抱え込みすぎる前に頼る相手を決めておくと優しさが長持ちします。"
  },
  7: {
    title: "深く読む人",
    body: "観察力と探究心が強く、表面の下にある理由や構造を知りたくなります。",
    advice: "考え抜いたことを短い言葉で共有すると、理解者が増えます。"
  },
  8: {
    title: "動かす人",
    body: "現実を動かす力、責任を引き受ける力があります。頼られるほど本気が出ます。",
    advice: "成果だけでなく過程も褒めると、周りがさらに動きやすくなります。"
  },
  9: {
    title: "包む人",
    body: "視野が広く、人や物事を大きく受け止めます。終わらせる力、まとめる力があります。",
    advice: "境界線を決めると、優しさが消耗ではなく器になります。"
  },
  11: {
    title: "ひらめく人",
    body: "直感が強く、言葉になる前の違和感や可能性をつかみます。",
    advice: "感じたことをメモに残すと、あとで大事な地図になります。"
  },
  22: {
    title: "大きく作る人",
    body: "理想を現実に落とす力があります。小さな作業を積み上げて大きな形にできます。",
    advice: "大きな構想ほど、今日の一手に分けると現実が動きます。"
  },
  33: {
    title: "広く照らす人",
    body: "人を励ます力や、場をやわらかくする力があります。無理なくいるだけで影響が出ます。",
    advice: "全部を救おうとせず、自分が明るくいられる範囲を守るのが大事です。"
  }
};

const bloodReadings = {
  A: {
    title: "気配りの精度",
    body: "段取りや責任感が強く、相手が困る前に気づきやすいタイプです。",
    advice: "気を配った分だけ、自分の休む予定も先に入れておくと安定します。"
  },
  B: {
    title: "自由な直感",
    body: "好き嫌いのセンサーがはっきりしていて、面白いと思った時の集中力があります。",
    advice: "自由に動ける余白を残すほど、発想がちゃんと結果につながります。"
  },
  O: {
    title: "大きな推進力",
    body: "大らかで現実感があり、場をまとめたり人を引っぱったりする力があります。",
    advice: "頼られすぎた時は役割を分けると、親分感がいい形で生きます。"
  },
  AB: {
    title: "独自の観察眼",
    body: "感情と理性の両方を行き来しながら、少し離れた場所から場を見ています。",
    advice: "不思議な視点を言葉にすると、周りにとって貴重なヒントになります。"
  },
  不明: {
    title: "未設定の余白",
    body: "血液型の型に寄せず、五行と数秘の特徴をそのまま強く見ます。",
    advice: "不明のままでも大丈夫。診断では性格の余白として扱います。"
  }
};

const zodiacReadings = {
  aries: {
    ja: "牡羊座",
    title: "最初に火をつける人",
    body: "思い立った瞬間に動き出す初速があります。迷いよりも実感を大事にし、場に始まりの勢いを持ち込みます。",
    advice: "急ぎすぎた時は、次の一手だけでなく周りの準備も見ると力が伝わります。"
  },
  taurus: {
    ja: "牡牛座",
    title: "確かな感覚で育てる人",
    body: "心地よさ、手触り、安心できる積み重ねを大事にします。急がず、納得したものを長く育てる力があります。",
    advice: "変化が必要な時は、小さく試して体感で納得すると動きやすくなります。"
  },
  gemini: {
    ja: "双子座",
    title: "言葉と好奇心でつなぐ人",
    body: "情報を拾い、言葉にし、人と人の間に流れを作ります。軽やかな会話から新しい可能性を見つけます。",
    advice: "広げた話題をひとつ選んで形にすると、好奇心が成果になります。"
  },
  cancer: {
    ja: "蟹座",
    title: "身内の安心を守る人",
    body: "大切な人や場所を守る気持ちが強く、安心できる輪の中で力を発揮します。",
    advice: "守りたい気持ちが強い時ほど、自分の安心も同じくらい大切にしてください。"
  },
  leo: {
    ja: "獅子座",
    title: "自分らしく輝く人",
    body: "表現すること、堂々と立つこと、人を楽しませることに力があります。誇りを持てる場で魅力が出ます。",
    advice: "評価を待つだけでなく、自分で舞台を作ると輝きやすくなります。"
  },
  virgo: {
    ja: "乙女座",
    title: "細部を整える人",
    body: "観察力と改善力があり、物事を使いやすく、清潔に、正確に整えていきます。",
    advice: "完璧を目指しすぎた時は、十分よくなった地点をゴールにして大丈夫です。"
  },
  libra: {
    ja: "天秤座",
    title: "関係のバランスを取る人",
    body: "人との距離感や場の調和を見ながら、ちょうどいい落としどころを探せます。",
    advice: "調和を優先しすぎた時は、自分の好き嫌いも判断材料に入れてください。"
  },
  scorpio: {
    ja: "蠍座",
    title: "深く結びつく人",
    body: "表面よりも本質を見たいタイプ。信頼した相手やテーマには深く集中します。",
    advice: "深く入りすぎて苦しくなったら、一度距離を置くことも信頼の一部です。"
  },
  sagittarius: {
    ja: "射手座",
    title: "遠くへ広げる人",
    body: "自由、探求、まだ知らない世界への関心があります。視野を広げるほど元気になります。",
    advice: "遠くを見る力に、今日の一歩を合わせると理想が進みます。"
  },
  capricorn: {
    ja: "山羊座",
    title: "形にして積み上げる人",
    body: "責任感と現実感があり、目標を形にするために段階を踏んで進めます。",
    advice: "頑張りが当たり前になりすぎた時は、達成したことをちゃんと数えてください。"
  },
  aquarius: {
    ja: "水瓶座",
    title: "自由な視点で変える人",
    body: "常識を少し離れた場所から見て、新しい仕組みや関係性を考えられます。",
    advice: "独自の視点は、わかりやすい例えにすると仲間が増えます。"
  },
  pisces: {
    ja: "魚座",
    title: "境界をやわらかくする人",
    body: "感受性が豊かで、人の気持ちや場のムードを自然に受け取ります。",
    advice: "感じすぎる時は、ひとりの時間や好きな世界に戻ることで整います。"
  }
};

function calculateZodiacFromMonthDay(monthDayValue) {
  if (!monthDayValue) return null;
  const [month, day] = monthDayValue.split("-").map(Number);
  if (!month || !day) return null;

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

function getBirthMonthDayFromDate(dateValue) {
  if (!dateValue) return null;
  const [, month, day] = dateValue.split("-");
  if (!month || !day) return null;
  return `${month}-${day}`;
}

function getResultBirthMonthDay() {
  return getBirthMonthDayFromDate(resultModeParams.get("birthDate"))
    || resultModeParams.get("birth");
}

function getResultZodiac() {
  return calculateZodiacFromMonthDay(getResultBirthMonthDay())
    || resultModeParams.get("zodiac")
    || "capricorn";
}

function getZodiacAccuracyNote() {
  const birthDate = resultModeParams.get("birthDate");
  const monthDay = getResultBirthMonthDay();
  const source = birthDate ? `生年月日 ${birthDate}` : monthDay ? `月日 ${monthDay}` : "入力された誕生日";
  return `${source}から一般的な太陽星座の固定境界で見ています。境界日生まれは出生時刻・出生地で変わる場合があります。`;
}

function getFiveElementScores() {
  const scores = {};
  let hasScore = false;

  for (const id of Object.keys(elements)) {
    const value = Number(resultModeParams.get(id));
    scores[id] = Number.isFinite(value) && value >= 0 ? value : 0;
    if (scores[id] > 0) hasScore = true;
  }

  return hasScore ? scores : null;
}

function getSortedElementScores(scores) {
  return Object.entries(scores)
    .map(([id, score]) => ({ id, score, element: elements[id] }))
    .sort((a, b) => b.score - a.score);
}

function setMode(nextMode) {
  viewMode = nextMode;
  modeButtons.forEach((button) => {
    const isActive = button.dataset.viewMode === viewMode;
    button.setAttribute("aria-pressed", String(isActive));
    button.className = isActive
      ? "rounded-md bg-deep px-4 py-2 text-sm font-black text-white"
      : "rounded-md px-4 py-2 text-sm font-black text-deep";
  });
  renderAnimals();
}

function createAnimalCard(animal) {
  const isPet = viewMode === "pet";
  const article = document.createElement("article");
  article.className = "group rounded-lg border border-[#eadfd4] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "grid w-full gap-4 text-left";
  button.addEventListener("click", () => setMode(isPet ? "card" : "pet"));

  const stage = document.createElement("div");
  stage.className = "grid min-h-48 place-items-center rounded-lg border border-[#eadfd4] bg-[#fffaf4] p-4";

  if (isPet) {
    const sprite = document.createElement("span");
    sprite.className = "idle-sprite scale-[2.5]";
    sprite.style.backgroundImage = `url("${animal.idleSheet}")`;
    sprite.setAttribute("role", "img");
    sprite.setAttribute("aria-label", `${animal.nameJa}のidleアニメ`);
    stage.append(sprite);
  } else {
    const image = document.createElement("img");
    image.src = animal.image;
    image.alt = animal.nameJa;
    image.className = "sprite-stage h-40 w-40 object-contain transition group-hover:scale-105";
    stage.append(image);
  }

  const label = document.createElement("div");
  label.className = "flex items-center justify-between gap-3";
  label.innerHTML = `
    <div>
      <h3 class="text-xl font-black text-deep">${animal.nameJa}</h3>
      <p class="mt-1 text-xs font-black uppercase text-festivalDark">${animal.id}</p>
    </div>
    <span class="rounded-full bg-[#fff4e8] px-3 py-2 text-xs font-black text-deep">${isPet ? "idle" : "png"}</span>
  `;

  button.append(stage, label);
  article.append(button);
  return article;
}

function renderAnimals() {
  if (!animalGrid) return;
  animalGrid.replaceChildren(...animals.map(createAnimalCard));
}

function applyPageMode() {
  if (!isPersonalResultMode) return;

  if (animalsPageTitle) animalsPageTitle.textContent = "ケツ印どうぶつ診断結果";
  if (animalsPageLead) {
    animalsPageLead.textContent = "今回の診断結果を表示しています。五行、数秘術、血液型の詳しい分析もこのページで読めます。";
  }
  prepRoomBadge?.classList.add("hidden");
  cardControlPanel?.classList.add("hidden");
  personalResultPanel?.classList.remove("hidden");
  resultStockSection?.classList.add("hidden");
  animalLibrarySection?.classList.add("hidden");
}

function populateAnimalSelect() {
  if (!cardAnimalSelect) return;
  cardAnimalSelect.replaceChildren(
    ...animals.map((animal) => {
      const option = document.createElement("option");
      option.value = animal.id;
      option.textContent = animal.nameJa;
      option.selected = animal.id === selectedAnimalId;
      return option;
    })
  );
}

function renderElementChips() {
  if (!elementChipList || !cardElementSelect) return;

  const selectedElement = cardElementSelect.value;
  elementChipList.replaceChildren(
    ...Object.entries(elements).map(([id, element]) => {
      const button = document.createElement("button");
      const isActive = id === selectedElement;
      button.type = "button";
      button.className = isActive
        ? "rounded-full bg-deep px-4 py-2 text-sm font-black text-white"
        : "rounded-full border border-[#eadfd4] bg-white px-4 py-2 text-sm font-black text-deep transition hover:border-festival/40";
      button.textContent = element.ja;
      button.setAttribute("aria-pressed", String(isActive));
      button.addEventListener("click", () => {
        cardElementSelect.value = id;
        renderFortuneCard();
      });
      return button;
    })
  );
}

function renderFortuneCard() {
  if (!fortuneCard || animals.length === 0) return;

  const animal = animals.find((item) => item.id === selectedAnimalId) || animals[0];
  const elementId = cardElementSelect?.value || "wood";
  const element = elements[elementId];
  const numerology = cardNumerologySelect?.value || "3";
  const zodiac = getResultZodiac();
  const blood = cardBloodSelect?.value || "O";

  fortuneCard.dataset.element = elementId;
  fortuneCardElementEn.textContent = element.en;
  fortuneCardTitleText.textContent = `${element.ja}の${animal.nameJa}`;
  fortuneCardSigil.textContent = element.ja;
  fortuneCardImage.src = animal.image;
  fortuneCardImage.alt = animal.nameJa;
  fortuneCardName.textContent = `${element.title}${animal.nameJa}`;
  fortuneCardSummary.textContent = `${element.summary} 数秘${numerology}と${blood}型のクセをここに重ねます。`;
  fortuneCardNumber.textContent = numerology;
  fortuneCardBlood.textContent = blood;
  fortuneCardElementJa.textContent = element.ja;

  renderResultSummary(animal, elementId, numerology, zodiac, blood);
  renderAnalysis(animal, elementId, numerology, zodiac, blood);
  renderDeepReading(animal, elementId, numerology, zodiac, blood);
  renderImagePrompt(animal, elementId, numerology, zodiac, blood);
  renderPdfReport(animal, elementId, numerology, zodiac, blood);
  renderElementChips();
}

function renderResultSummary(animal, elementId, numerology, zodiac, blood) {
  const element = elements[elementId] || elements.wood;
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const numberReading = numerologyReadings[numerology] || numerologyReadings[3];
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];

  if (resultSummaryTitle) {
    resultSummaryTitle.textContent = buildResultSummaryTitle(animal, element, animalCore);
  }

  if (resultSummaryBody) {
    const animalPhrase = animalCore?.oneLine || `${animal.nameJa}タイプの持ち味`;
    resultSummaryBody.textContent = `${animalPhrase} ${buildFiveElementScoreSentence(elementId)}そこに、数秘${numerology}の「${numberReading.title}」、${zodiacReading.ja}の感性、${blood}型の対人傾向が重なっています。`;
  }

  if (resultSummaryChips) {
    const scores = getFiveElementScores();
    const sortedScores = scores ? getSortedElementScores(scores) : [];
    const subElement = sortedScores.find((item) => item.id !== elementId && item.score > 0);
    const chips = [
      `動物 ${animal.nameJa}`,
      subElement ? `五行 ${element.ja} / サブ${subElement.element.ja}` : `五行 ${element.ja}`,
      `数秘 ${numerology}`,
      `星座 ${zodiacReading.ja}`,
      `血液型 ${blood}`
    ];
    resultSummaryChips.replaceChildren(
      ...chips.map((chip) => {
        const span = document.createElement("span");
        span.className = "rounded-full bg-white px-3 py-2 text-deep";
        span.textContent = chip;
        return span;
      })
    );
  }

  renderFiveElementScores(elementId);
}

function buildResultSummaryTitle(animal, element, animalCore) {
  const animalTitle = animalCore?.resultTitle || `${animal.nameJa}タイプ`;
  return `${element.title}、${animalTitle}`;
}

function buildFiveElementScoreSentence(primaryElementId) {
  const primaryElement = elements[primaryElementId] || elements.wood;
  const scores = getFiveElementScores();

  if (!scores) {
    return `${primaryElement.ja}の「${primaryElement.title}」力が出ています。`;
  }

  const sortedScores = getSortedElementScores(scores);
  const primaryScore = scores[primaryElementId] || sortedScores[0]?.score || 0;
  const subElement = sortedScores.find((item) => item.id !== primaryElementId && item.score > 0);

  if (!subElement) {
    return `五行では${primaryElement.ja}が${primaryScore}点で一番強く、${primaryElement.summary}`;
  }

  return `五行では${primaryElement.ja}が${primaryScore}点で一番強く、サブに${subElement.element.ja}${subElement.score}点が出ています。${primaryElement.summary} さらに${subElement.element.ja}の「${subElement.element.title}」力も少し混ざります。`;
}

function renderFiveElementScores(primaryElementId) {
  if (!fiveElementScorePanel || !fiveElementSubtype || !fiveElementScoreBars) return;

  const scores = getFiveElementScores();
  if (!scores) {
    fiveElementScorePanel.classList.add("hidden");
    return;
  }

  const sortedScores = getSortedElementScores(scores);
  const maxScore = Math.max(...sortedScores.map((item) => item.score), 1);
  const totalScore = sortedScores.reduce((sum, item) => sum + item.score, 0);
  const subElement = sortedScores.find((item) => item.id !== primaryElementId && item.score > 0);
  fiveElementSubtype.textContent = subElement
    ? `主属性 ${elements[primaryElementId].ja} / サブ属性 ${subElement.element.ja} / 合計${totalScore}点`
    : `主属性 ${elements[primaryElementId].ja} / 合計${totalScore}点`;

  fiveElementScoreBars.replaceChildren(
    ...Object.entries(elements).map(([id, element]) => {
      const score = scores[id] || 0;
      const percentage = Math.max(8, Math.round((score / maxScore) * 100));
      const row = document.createElement("div");
      row.className = "grid gap-2";
      row.innerHTML = `
        <div class="flex items-center justify-between gap-3 text-sm font-black text-deep">
          <span>${element.ja}</span>
          <span>${score}点</span>
        </div>
        <div class="h-3 overflow-hidden rounded-full bg-[#fff4e8]">
          <div class="h-full rounded-full bg-festival" style="width: ${percentage}%"></div>
        </div>
      `;
      return row;
    })
  );
  fiveElementScorePanel.classList.remove("hidden");
}

function createPdfMiniCard(title, body) {
  const card = document.createElement("article");
  card.className = "pdf-mini-card";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const text = document.createElement("p");
  text.textContent = body;

  card.append(heading, text);
  return card;
}

function renderPdfReport(animal, elementId, numerology, zodiac, blood) {
  if (!pdfReportSection || !pdfReportMainTitle || !pdfReportSummary) return;

  const element = elements[elementId] || elements.wood;
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];
  const numberReading = numerologyReadings[numerology] || numerologyReadings[3];
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const bloodReading = bloodReadings[blood] || bloodReadings["不明"];
  const resultTitle = buildResultSummaryTitle(animal, element, animalCore);
  const animalPhrase = animalCore?.oneLine || `${animal.nameJa}タイプの持ち味`;
  const summary = `${animalPhrase} ${buildFiveElementScoreSentence(elementId)}そこに、数秘${numerology}の「${numberReading.title}」、${zodiacReading.ja}の感性、${blood}型の対人傾向が重なります。`;

  if (pdfReportTitle) pdfReportTitle.textContent = "ケツ印どうぶつ診断 結果レポート";
  if (pdfReportLead) pdfReportLead.textContent = "動物占い、五行、数秘術、星座、血液型を重ねた個人向けレポートです。";
  if (pdfReportImage) {
    pdfReportImage.src = animal.image;
    pdfReportImage.alt = animal.nameJa;
  }
  pdfReportMainTitle.textContent = resultTitle;
  pdfReportSummary.textContent = summary;

  if (pdfReportChips) {
    const chips = [
      `動物 ${animal.nameJa}`,
      `五行 ${element.ja}`,
      `数秘 ${numerology}`,
      `星座 ${zodiacReading.ja}`,
      `血液型 ${blood}`
    ];
    pdfReportChips.replaceChildren(...chips.map((chip) => {
      const span = document.createElement("span");
      span.className = "pdf-chip";
      span.textContent = chip;
      return span;
    }));
  }

  const scores = getFiveElementScores();
  if (pdfReportElementNote) {
    pdfReportElementNote.textContent = scores
      ? buildFiveElementScoreSentence(elementId)
      : `${element.ja}の「${element.title}」力を中心に読んでいます。`;
  }

  if (pdfReportScores) {
    if (!scores) {
      pdfReportScores.replaceChildren(createPdfMiniCard("五行スコア", "質問結果がないため、選択中の五行を中心に表示しています。"));
    } else {
      const sortedScores = getSortedElementScores(scores);
      const maxScore = Math.max(...sortedScores.map((item) => item.score), 1);
      pdfReportScores.replaceChildren(...Object.entries(elements).map(([id, item]) => {
        const score = scores[id] || 0;
        const percentage = Math.max(8, Math.round((score / maxScore) * 100));
        const row = document.createElement("div");
        row.className = "pdf-score-row";
        row.innerHTML = `
          <div class="pdf-score-head">
            <span>${item.ja} / ${item.title}</span>
            <span>${score}点</span>
          </div>
          <div class="pdf-score-track">
            <div class="pdf-score-fill" style="width: ${percentage}%"></div>
          </div>
        `;
        return row;
      }));
    }
  }

  if (pdfReportPillars) {
    pdfReportPillars.replaceChildren(
      createPdfMiniCard(`動物：${animal.nameJa}`, animalCore?.oneLine || "動物タイプの基本傾向を見ます。"),
      createPdfMiniCard(`五行：${element.ja}`, element.summary),
      createPdfMiniCard(`数秘：${numerology}`, `${numberReading.title}。${numberReading.body}`),
      createPdfMiniCard(`星座：${zodiacReading.ja}`, `${zodiacReading.title}。${zodiacReading.body}`),
      createPdfMiniCard(`血液型：${blood}`, `${bloodReading.title}。${bloodReading.body}`)
    );
  }

  if (pdfReportFortunes) {
    const strengths = animalCore?.strengths?.slice(0, 3).join("、") || "自分らしい持ち味";
    const weaknesses = animalCore?.weakPoints?.slice(0, 3).join("、") || "疲れた時の偏り";
    pdfReportFortunes.replaceChildren(
      createPdfMiniCard("長所", `${animalCore?.nameJa || animal.nameJa}の長所は、${strengths}に出ます。${element.ja}の力が重なることで、持ち味を現実の場で使いやすくなります。`),
      createPdfMiniCard("短所・注意点", `注意点は、${weaknesses}です。偏りを直すより、早めに気づいて扱うことが開運の近道です。`),
      createPdfMiniCard("総合運", `数秘${numerology}のテーマと${zodiacReading.ja}の感性が合わさるため、意味を感じる役割ほど運が動きます。小さく続けるほど成果につながります。`),
      createPdfMiniCard("回復ヒント", animalCore?.recoveryHint || "無理に別人になろうとせず、落ち着ける時間を作ると戻ってきます。")
    );
  }
}

function renderList(target, items) {
  if (!target) return;
  target.replaceChildren(
    ...items.map((item) => {
      const li = document.createElement("li");
      li.className = "rounded-lg bg-[#fffaf4] px-4 py-3 font-bold";
      li.textContent = item;
      return li;
    })
  );
}

function renderParagraphs(target, paragraphs) {
  if (!target) return;
  target.replaceChildren(
    ...paragraphs.map((text) => {
      const p = document.createElement("p");
      p.className = "rounded-lg bg-white/75 px-4 py-3";
      p.textContent = text;
      return p;
    })
  );
}

function renderDeepReading(animal, elementId, numerology, zodiac, blood) {
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];
  if (!animalCore) return;

  const element = elements[elementId];
  const numberReading = numerologyReadings[numerology] || numerologyReadings[3];
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const bloodReading = bloodReadings[blood] || bloodReadings["不明"];

  if (deepAnimalTitle) deepAnimalTitle.textContent = animalCore.resultTitle;
  if (deepAnimalOneline) deepAnimalOneline.textContent = animalCore.oneLine;
  if (deepAnimalSummary) deepAnimalSummary.textContent = animalCore.coreSummary;
  renderList(deepStrengths, animalCore.strengths || []);
  renderList(deepWeakPoints, animalCore.weakPoints || []);

  if (deepSocialImpression) deepSocialImpression.textContent = animalCore.socialImpression;
  if (deepCommunicationStyle) deepCommunicationStyle.textContent = animalCore.communicationStyle;
  if (deepWorkStyle) deepWorkStyle.textContent = animalCore.workStyle;
  if (deepRecoveryHint) {
    deepRecoveryHint.textContent = `${animalCore.stressPattern} ${animalCore.recoveryHint}`;
  }
  if (deepKetsujirushiLine) deepKetsujirushiLine.textContent = animalCore.ketsujirushiLine;

  renderParagraphs(deepCombinedReading, [
    `${animalCore.nameJa}タイプの土台は「${animalCore.coreTitle || animalCore.resultTitle}」。そこに${element.ja}の性質が重なるので、今回は「${element.title}」方向に個性が出やすくなります。${element.summary}`,
    `数秘${numerology}は「${numberReading.title}」。${numberReading.body} ${animalCore.nameJa}の基本性格にこの数字が乗ると、ただの性格傾向ではなく、人生の中で何を大事にして進むかが見えてきます。`,
    `${zodiacReading.ja}は「${zodiacReading.title}」。${zodiacReading.body} 動物占いが行動のクセを見せるなら、星座は世界との向き合い方や感性の出方を補ってくれます。`,
    `${blood}型の読みでは「${bloodReading.title}」が加わります。${bloodReading.body} 人との距離感や頼られ方には、この血液型のクセが出やすいです。`,
    `総合すると、${element.ja}の${animalCore.nameJa}は、${animalCore.keywords?.slice(0, 3).join("・")}を土台にしながら、数秘${numerology}のテーマ、${zodiacReading.ja}の感性、${blood}型の対人傾向を重ねて動くタイプです。疲れた時は無理に別人になろうとせず、${animalCore.recoveryHint}`
  ]);

  renderFortuneSummaries(animalCore, element, numberReading, zodiacReading, bloodReading, numerology, blood);
}

function renderFortuneSummaries(animalCore, element, numberReading, zodiacReading, bloodReading, numerology, blood) {
  const strengths = animalCore.strengths?.slice(0, 3).join("、");
  const weaknesses = animalCore.weakPoints?.slice(0, 3).join("、");

  if (fortuneStrengthSummary) {
    renderMiniReadings(fortuneStrengthSummary, [
      ["才能", `${animalCore.nameJa}の長所は、${strengths}といったところに出ます。${element.ja}の「${element.title}」力が重なるので、自分の持ち味を現実の場で使いやすいタイプです。`],
      ["人間関係", `${blood}型の「${bloodReading.title}」も加わり、対人面では自然な存在感が出やすいです。人に合わせるだけでなく、場の空気を見て支え方を選べます。`],
      ["活動", `数秘${numerology}の「${numberReading.title}」と${zodiacReading.ja}の「${zodiacReading.title}」が重なることで、やるべきことに意味を見つけた時に力が伸びます。`]
    ]);
  }

  if (fortuneWeaknessSummary) {
    renderMiniReadings(fortuneWeaknessSummary, [
      ["疲れた時", `注意点は、${weaknesses}といったところです。調子が崩れると、${animalCore.stressPattern}`],
      ["ズレやすいところ", `${element.ja}の力が強く出すぎると、「${element.title}」方向に偏って周りとの速度差が出ることがあります。`],
      ["扱い方", `短所は直すものというより、早めに気づいて扱うものです。違和感が出たら、${animalCore.recoveryHint}`]
    ]);
  }

  if (fortuneOverallSummary) {
    renderMiniReadings(fortuneOverallSummary, [
      ["開運ポイント", `総合運は、積み重ねた個性を人との関係や日常の場で活かすほど上がります。「無理に派手に変わる」より「自分の持ち味を使いやすい場所に置く」ことが開運ポイントです。`],
      ["人間関係運", `${animalCore.nameJa}の基本性格に、${blood}型の対人傾向と${zodiacReading.ja}の感性が合わさります。安心して関われる相手が増えるほど、運の流れも整います。`],
      ["活動・仕事運", `${element.ja}の行動傾向と数秘${numerology}の人生テーマが重なるので、役割や目的が見えた時に動きやすくなります。小さく続けるほど成果につながります。`]
    ]);
  }
}

function renderMiniReadings(target, items) {
  target.replaceChildren(
    ...items.map(([label, text]) => {
      const block = document.createElement("div");
      block.className = "rounded-lg bg-[#fffaf4] px-4 py-3";
      block.innerHTML = `
        <p class="text-sm font-black text-festivalDark">${label}</p>
        <p class="mt-1 text-sm font-bold leading-7 text-slate-700">${text}</p>
      `;
      return block;
    })
  );
}

function buildImagePrompt(animal, elementId, numerology, zodiac, blood) {
  if (imagePromptMode === "icon") {
    return buildIconImagePrompt(animal, elementId, numerology, zodiac, blood);
  }

  return buildResultCardImagePrompt(animal, elementId, numerology, zodiac, blood);
}

function buildResultCardImagePrompt(animal, elementId, numerology, zodiac, blood) {
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];
  const element = elements[elementId] || elements.wood;
  const numberReading = numerologyReadings[numerology] || numerologyReadings[3];
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const bloodReading = bloodReadings[blood] || bloodReadings["不明"];
  const resultTitle = buildResultSummaryTitle(animal, element, animalCore);
  const keywords = animalCore?.keywords?.slice(0, 4).join(", ") || "friendly, symbolic, personal";
  const strengths = animalCore?.strengths?.slice(0, 3).join(", ") || "warm presence, intuition, charm";

  return [
    "Create a vertical 4:5 diagnosis result card illustration for Image 2.0. Canvas ratio 4:5, recommended size 1080x1350.",
    "",
    `Main title text: 「${resultTitle}」`,
    `Small readable badge labels: 「動物 ${animal.nameJa}」「五行 ${element.ja}」「数秘 ${numerology}」「星座 ${zodiacReading.ja}」「血液型 ${blood}型」`,
    `Main character: a cute original pixel art ${animal.nameJa} pet mascot, inspired by a Japanese fortune-telling result, not realistic, not scary.`,
    `Personality mood: ${animalCore?.resultTitle || animal.nameJa} / ${animalCore?.oneLine || "gentle personal charm"}.`,
    `Core keywords: ${keywords}.`,
    `Strengths to express: ${strengths}.`,
    `Five elements theme: ${element.en} / ${element.ja}, ${element.summary}`,
    `Numerology theme: number ${numerology}, ${numberReading.title}.`,
    `Zodiac mood: ${zodiacReading.ja}, ${zodiacReading.title}.`,
    `Blood type mood: ${blood} type, ${bloodReading.title}.`,
    "",
    "Visual style: premium 32-bit pixel art, clean sprite-like mascot, soft Japanese festival card design, warm off-white paper texture, crisp edges, charming small icons, readable decorative layout.",
    "Composition: vertical 4:5 layout. Top area: short Japanese title. Middle: centered mascot with elemental aura. Lower half: five small diagnosis badges. Bottom area: subtle lucky charm motifs and calm decorative frame.",
    "Text rules: keep text short and large enough to read on a phone. Do not add long paragraphs. Use clean Japanese typography only for the title and five badges.",
    "Color direction: use the five-elements color as the main accent, balanced with warm white, deep charcoal, and festival red accents.",
    "Quality: high detail pixel illustration, polished game asset, no photorealism, no messy text, no watermark, no logo, no extra limbs, no distorted face.",
    "Output: one finished shareable image, vertical 4:5 aspect ratio, polished result-card composition, optimized for mobile sharing."
  ].join("\n");
}

function buildIconImagePrompt(animal, elementId, numerology, zodiac, blood) {
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];
  const element = elements[elementId] || elements.wood;
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const bloodReading = bloodReadings[blood] || bloodReadings["不明"];
  const keywords = animalCore?.keywords?.slice(0, 3).join(", ") || "friendly, symbolic, personal";

  return [
    "Create a square 1:1 SNS profile icon illustration for Image 2.0. Canvas ratio 1:1, recommended size 1024x1024.",
    "Use the attached profile photo or current user icon as the visual reference. Do not copy it photorealistically; transform it into an original pixel art avatar blended with the diagnosis mascot.",
    "",
    `Main character: a cute original pixel art ${animal.nameJa} pet mascot fused with the referenced person's icon impression, large centered face and upper body, charming and memorable.`,
    `Icon identity: ${element.ja} element, numerology ${numerology}, ${zodiacReading.ja}, ${blood} type mood.`,
    `Personality mood: ${animalCore?.resultTitle || animal.nameJa} / ${keywords}.`,
    `Five elements theme: ${element.en} / ${element.ja}, ${element.summary}`,
    `Blood type nuance: ${bloodReading.title}.`,
    "",
    "Reference handling: preserve only the broad identity cues from the attached icon, such as hairstyle silhouette, glasses or accessories, favorite color mood, facial expression energy, and overall vibe. Avoid exact face duplication.",
    "Blend design: make the avatar feel like the person has become this diagnosis animal mascot. Add small animal features naturally, such as ears, tail motif, fur pattern, or charm accessory, while keeping the referenced icon's recognizable mood.",
    "Visual style: premium 32-bit pixel art icon, clean silhouette, expressive eyes, crisp sprite-like edges, polished app icon quality.",
    "Composition: centered avatar mascot, face clearly visible at small size, soft circular elemental background, tiny five-elements charm mark, no crowded layout.",
    "Text rules: no text, no letters, no numbers, no badge labels. Use only visual symbols so the icon stays readable.",
    "Background: soft round backdrop using the five-elements accent color, warm off-white outer margin, subtle festival charm details.",
    "Quality: high detail pixel illustration, friendly, not realistic, not scary, no watermark, no logo, no extra limbs, no distorted face.",
    "Output: one finished square SNS icon image, 1:1 aspect ratio, optimized for profile pictures and chat avatars, clearly based on the reference icon's atmosphere plus the diagnosis result."
  ].join("\n");
}

function updateImagePromptModeUi() {
  const isIconMode = imagePromptMode === "icon";

  if (imagePromptEyebrow) {
    imagePromptEyebrow.textContent = isIconMode ? "Image 2.0 Prompt / SNS Icon" : "Image 2.0 Prompt / Result Card";
  }

  if (imagePromptTitle) {
    imagePromptTitle.textContent = isIconMode ? "SNSアイコン用Prompt" : "結果カード用Prompt";
  }

  if (imagePromptDescription) {
    imagePromptDescription.textContent = isIconMode
      ? "本人のアイコン画像をImage 2.0に添付して使うPromptです。雰囲気を参照しながら、診断どうぶつと合成した1:1正方形アイコンにします。"
      : "4:5縦長の診断結果カードを作るためのPromptです。スマホで共有しやすい1枚絵にします。";
  }

  imagePromptModeButtons.forEach((button) => {
    const isActive = button.dataset.promptMode === imagePromptMode;
    button.setAttribute("aria-pressed", String(isActive));
    button.className = isActive
      ? "rounded-full bg-deep px-4 py-2 text-sm font-black text-white"
      : "rounded-full border border-[#eadfd4] bg-white px-4 py-2 text-sm font-black text-deep transition hover:border-festival/40";
  });
}

function renderImagePrompt(animal, elementId, numerology, zodiac, blood) {
  if (!imagePromptOutput) return;
  updateImagePromptModeUi();
  imagePromptOutput.value = buildImagePrompt(animal, elementId, numerology, zodiac, blood);
  if (imagePromptCopyStatus) {
    imagePromptCopyStatus.classList.add("hidden");
    imagePromptCopyStatus.textContent = "";
  }
}

async function copyImagePrompt() {
  if (!imagePromptOutput || !copyImagePromptButton) return;
  const promptText = imagePromptOutput.value;

  try {
    let copied = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(promptText);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      const copyTarget = document.createElement("textarea");
      copyTarget.value = promptText;
      copyTarget.setAttribute("readonly", "");
      copyTarget.style.position = "fixed";
      copyTarget.style.top = "0";
      copyTarget.style.left = "0";
      copyTarget.style.opacity = "0";
      document.body.append(copyTarget);
      copyTarget.focus();
      copyTarget.select();
      copyTarget.setSelectionRange(0, promptText.length);
      copied = document.execCommand("copy");
      copyTarget.remove();
    }

    if (!copied) throw new Error("Copy failed");

    if (imagePromptCopyStatus) {
      imagePromptCopyStatus.textContent = "Promptをコピーしました。Image 2.0にそのまま貼れます。";
      imagePromptCopyStatus.classList.remove("hidden");
    }
  } catch {
    imagePromptOutput.focus();
    imagePromptOutput.select();
    imagePromptOutput.setSelectionRange(0, promptText.length);
    if (imagePromptCopyStatus) {
      imagePromptCopyStatus.textContent = "自動コピーできませんでした。Prompt欄を選択したので、手動でコピーしてください。";
      imagePromptCopyStatus.classList.remove("hidden");
    }
  }
}

function setPdfStatus(message, isError = false) {
  if (!savePdfStatus) return;
  savePdfStatus.textContent = message;
  savePdfStatus.classList.remove("hidden");
  savePdfStatus.className = isError
    ? "no-print mt-3 rounded-lg bg-red-50 px-4 py-3 text-sm font-black leading-7 text-red-700"
    : "no-print mt-3 rounded-lg bg-[#fff4e8] px-4 py-3 text-sm font-black leading-7 text-deep";
}

function createPdfExportStage(source) {
  if (!source) return null;

  const stage = document.createElement("div");
  stage.className = "pdf-export-stage";

  const clone = source.cloneNode(true);
  clone.id = "pdf-report-export-copy";
  clone.classList.remove("no-print");
  clone.classList.add("is-generating");
  clone.removeAttribute("aria-hidden");

  stage.append(clone);
  document.body.append(stage);

  return { stage, target: clone };
}

async function saveResultPdf() {
  if (!savePdfButton || (!pdfReportSection && !resultPdfSection)) return;

  if (!window.html2pdf) {
    setPdfStatus("PDF保存の準備がまだ完了していません。少し待ってからもう一度押してください。", true);
    return;
  }

  const resultName = resultSummaryTitle?.textContent?.trim() || "診断結果";
  const safeFileName = resultName.replace(/[\\/:*?"<>|]/g, "").replace(/\s+/g, "-") || "ketsujirushi-result";

  savePdfButton.disabled = true;
  savePdfButton.textContent = "PDF作成中";
  setPdfStatus("PDFを作成しています。保存が始まるまで少し待ってください。");
  const exportStage = createPdfExportStage(pdfReportSection || resultPdfSection);
  const pdfTarget = exportStage?.target || resultPdfSection;

  try {
    await window.html2pdf()
      .set({
        margin: [10, 10, 10, 10],
        filename: `${safeFileName}.pdf`,
        image: { type: "jpeg", quality: 0.96 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          onclone: (clonedDocument) => {
            clonedDocument.querySelectorAll(".fortune-card").forEach((card) => {
              card.style.background = "#fff6d8";
            });
            clonedDocument.querySelectorAll(".element-sigil").forEach((sigil) => {
              sigil.style.boxShadow = "none";
            });
          }
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait"
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }
      })
      .from(pdfTarget)
      .save();

    setPdfStatus("PDFを保存しました。ダウンロードフォルダを確認してください。");
  } catch (error) {
    console.error(error);
    setPdfStatus("PDF保存に失敗しました。ページを再読み込みしてもう一度試してください。", true);
  } finally {
    exportStage?.stage.remove();
    savePdfButton.disabled = false;
    savePdfButton.textContent = "PDF保存";
  }
}

function renderAnalysis(animal, elementId, numerology, zodiac, blood) {
  const animalCore = diagnosisWarehouse?.animalCore?.[animal.id];
  const element = elements[elementId];
  const numberReading = numerologyReadings[numerology] || numerologyReadings[3];
  const zodiacReading = zodiacReadings[zodiac] || zodiacReadings.capricorn;
  const bloodReading = bloodReadings[blood] || bloodReadings["不明"];

  if (analysisAnimalBadge) analysisAnimalBadge.textContent = animal.nameJa;
  if (analysisAnimalTitle) analysisAnimalTitle.textContent = `${animal.nameJa}タイプ`;
  if (analysisAnimalBody) analysisAnimalBody.textContent = animalCore?.oneLine || "動物タイプの基本傾向を見ます。";
  if (analysisAnimalAdvice) analysisAnimalAdvice.textContent = animalCore?.relationshipTip || "その人らしい距離感を大切にします。";

  if (analysisElementBadge) analysisElementBadge.textContent = element.ja;
  if (analysisElementTitle) analysisElementTitle.textContent = `${element.ja}タイプ`;
  if (analysisElementBody) analysisElementBody.textContent = element.summary;
  if (analysisElementAdvice) analysisElementAdvice.textContent = `${element.title}力を、日常の行動パターンとして見ます。`;

  if (analysisNumberBadge) analysisNumberBadge.textContent = numerology;
  if (analysisNumberTitle) analysisNumberTitle.textContent = `数秘${numerology}：${numberReading.title}`;
  if (analysisNumberBody) analysisNumberBody.textContent = numberReading.body;
  if (analysisNumberAdvice) analysisNumberAdvice.textContent = numberReading.advice;

  if (analysisZodiacBadge) analysisZodiacBadge.textContent = zodiacReading.ja;
  if (analysisZodiacTitle) analysisZodiacTitle.textContent = `${zodiacReading.ja}：${zodiacReading.title}`;
  if (analysisZodiacBody) analysisZodiacBody.textContent = zodiacReading.body;
  if (analysisZodiacAdvice) analysisZodiacAdvice.textContent = zodiacReading.advice;
  if (analysisZodiacNote) analysisZodiacNote.textContent = getZodiacAccuracyNote();

  if (analysisBloodBadge) analysisBloodBadge.textContent = blood;
  if (analysisBloodTitle) analysisBloodTitle.textContent = `${blood}型：${bloodReading.title}`;
  if (analysisBloodBody) analysisBloodBody.textContent = bloodReading.body;
  if (analysisBloodAdvice) analysisBloodAdvice.textContent = bloodReading.advice;
}

function getStoredResults() {
  try {
    return JSON.parse(localStorage.getItem(resultStockKey) || "[]");
  } catch {
    return [];
  }
}

function saveStoredResult(record) {
  const stored = getStoredResults();
  if (stored.some((item) => item.id === record.id)) return;

  const nextStored = [record, ...stored].slice(0, 50);
  localStorage.setItem(resultStockKey, JSON.stringify(nextStored));
}

function consumePendingDiagnosisResult() {
  const pending = sessionStorage.getItem("pendingDiagnosisResult");
  if (!pending) return;

  try {
    const record = JSON.parse(pending);
    saveStoredResult(record);
    sessionStorage.removeItem("pendingDiagnosisResult");
  } catch {
    sessionStorage.removeItem("pendingDiagnosisResult");
  }
}

function renderStoredResults() {
  if (!resultStockList) return;

  const stored = getStoredResults();
  if (stored.length === 0) {
    resultStockList.innerHTML = '<p class="rounded-lg bg-[#fff4e8] px-4 py-3 font-bold leading-7 text-deep">まだ診断結果は保存されていません。</p>';
    return;
  }

  resultStockList.replaceChildren(
    ...stored.map((record) => {
      const animal = animals.find((item) => item.id === record.animal);
      const element = elements[record.element] || elements.wood;
      const date = new Date(record.createdAt);
      const article = document.createElement("article");
      article.className = "rounded-lg border border-[#eadfd4] bg-white p-4";
      article.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 class="text-xl font-black text-deep">${record.name || "あなた"}さん：${element.ja}の${animal?.nameJa || "ライオン"}</h3>
            <p class="mt-1 text-sm font-bold text-slate-600">${Number.isNaN(date.getTime()) ? "" : date.toLocaleString("ja-JP")} 保存</p>
          </div>
          <div class="flex flex-wrap gap-2 text-sm font-black">
            <span class="rounded-full bg-[#fff4e8] px-3 py-2 text-deep">数秘 ${record.numerology}</span>
            <span class="rounded-full bg-[#fff4e8] px-3 py-2 text-deep">血液型 ${record.bloodType}</span>
            <span class="rounded-full bg-[#fff4e8] px-3 py-2 text-deep">五行 ${element.ja}</span>
          </div>
        </div>
      `;
      return article;
    })
  );
}

function applyCardParams() {
  const params = new URLSearchParams(window.location.search);
  const animal = params.get("animal");
  const element = params.get("element");
  const number = params.get("number");
  const zodiac = getResultZodiac();
  const blood = params.get("blood");

  if (animal && animals.some((item) => item.id === animal)) {
    selectedAnimalId = animal;
    if (cardAnimalSelect) cardAnimalSelect.value = animal;
  }

  if (element && elements[element] && cardElementSelect) {
    cardElementSelect.value = element;
  }

  if (number && cardNumerologySelect) {
    cardNumerologySelect.value = number;
  }

  if (blood && cardBloodSelect) {
    cardBloodSelect.value = blood;
  }

  if (zodiac && isPersonalResultMode) {
    resultModeParams.set("zodiac", zodiac);
  }
}

async function loadAnimals() {
  if (!animalGrid) return;

  try {
    const [response, warehouseResponse] = await Promise.all([
      fetch("assets/animals/animals.json"),
      fetch("assets/diagnosis/basic-diagnosis-warehouse.json")
    ]);
    if (!response.ok) throw new Error(`Failed to load animals: ${response.status}`);
    if (!warehouseResponse.ok) throw new Error(`Failed to load diagnosis warehouse: ${warehouseResponse.status}`);
    animals = await response.json();
    diagnosisWarehouse = await warehouseResponse.json();
    populateAnimalSelect();
    applyCardParams();
    applyPageMode();
    consumePendingDiagnosisResult();
    renderAnimals();
    renderFortuneCard();
    renderStoredResults();
  } catch (error) {
    animalGrid.innerHTML = '<p class="rounded-lg bg-red-50 p-4 font-bold text-red-700">どうぶつ素材を読み込めませんでした。</p>';
    console.error(error);
  }
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.viewMode));
});

cardAnimalSelect?.addEventListener("change", () => {
  selectedAnimalId = cardAnimalSelect.value;
  renderFortuneCard();
});

cardElementSelect?.addEventListener("change", renderFortuneCard);
cardNumerologySelect?.addEventListener("change", renderFortuneCard);
cardBloodSelect?.addEventListener("change", renderFortuneCard);

imagePromptModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    imagePromptMode = button.dataset.promptMode || "card";
    renderFortuneCard();
  });
});

clearResultStockButton?.addEventListener("click", () => {
  localStorage.removeItem(resultStockKey);
  renderStoredResults();
});
copyImagePromptButton?.addEventListener("click", copyImagePrompt);
savePdfButton?.addEventListener("click", saveResultPdf);

loadAnimals();
