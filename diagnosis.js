const profileStep = document.querySelector("#step-profile");
const questionsStep = document.querySelector("#step-questions");
const profileForm = document.querySelector("#profile-form");
const questionsForm = document.querySelector("#questions-form");
const profileError = document.querySelector("#profile-error");
const profileSummary = document.querySelector("#profile-summary");
const backToProfile = document.querySelector("#back-to-profile");
const birthDateInput = document.querySelector("#birth-date");
const calculatedAnimal = document.querySelector("#calculated-animal");
const calculatedAnimalDetail = document.querySelector("#calculated-animal-detail");
const fiveElementsQuestions = document.querySelector("#five-elements-questions");
const questionsError = document.querySelector("#questions-error");

const profile = {
  name: "",
  birthDate: "",
  animal: "",
  characterNumber: null,
  zodiac: "",
  bloodType: ""
};

const animalNames = {
  wolf: "狼",
  deer: "こじか",
  monkey: "猿",
  cheetah: "チータ",
  "black-panther": "黒ひょう",
  lion: "ライオン",
  tiger: "虎",
  tanuki: "たぬき",
  koala: "子守熊",
  elephant: "ゾウ",
  sheep: "ひつじ",
  pegasus: "ペガサス"
};

const characterNumberToAnimal = {
  1: "cheetah",
  2: "tanuki",
  3: "monkey",
  4: "koala",
  5: "black-panther",
  6: "tiger",
  7: "cheetah",
  8: "tanuki",
  9: "monkey",
  10: "koala",
  11: "deer",
  12: "elephant",
  13: "wolf",
  14: "sheep",
  15: "monkey",
  16: "koala",
  17: "deer",
  18: "elephant",
  19: "wolf",
  20: "sheep",
  21: "pegasus",
  22: "pegasus",
  23: "sheep",
  24: "wolf",
  25: "wolf",
  26: "sheep",
  27: "pegasus",
  28: "pegasus",
  29: "sheep",
  30: "wolf",
  31: "elephant",
  32: "deer",
  33: "koala",
  34: "monkey",
  35: "sheep",
  36: "wolf",
  37: "elephant",
  38: "deer",
  39: "koala",
  40: "monkey",
  41: "tanuki",
  42: "cheetah",
  43: "tiger",
  44: "black-panther",
  45: "koala",
  46: "monkey",
  47: "tanuki",
  48: "cheetah",
  49: "tiger",
  50: "black-panther",
  51: "lion",
  52: "lion",
  53: "black-panther",
  54: "tiger",
  55: "tiger",
  56: "black-panther",
  57: "lion",
  58: "lion",
  59: "black-panther",
  60: "tiger"
};

const fiveElementQuestions = [
  {
    id: "q1",
    text: "新しいことを始める時、あなたは？",
    options: [
      ["wood", "まず動いて形にする"],
      ["fire", "周りを巻き込んで盛り上げる"],
      ["earth", "安全を確認してから進める"],
      ["metal", "ルールや完成度を考える"],
      ["water", "情報を集めて流れを見る"]
    ]
  },
  {
    id: "q2",
    text: "人から頼られた時に出やすい反応は？",
    options: [
      ["earth", "落ち着いて受け止める"],
      ["fire", "元気づけながら動く"],
      ["wood", "解決へ向けて引っぱる"],
      ["water", "相手の事情を深く聞く"],
      ["metal", "必要なことを整理する"]
    ]
  },
  {
    id: "q3",
    text: "疲れた時に戻りやすい方法は？",
    options: [
      ["water", "静かにひとりで考える"],
      ["earth", "安心できる場所で休む"],
      ["fire", "好きな人と話して気分を上げる"],
      ["metal", "散らかったものを整える"],
      ["wood", "体を動かして切り替える"]
    ]
  },
  {
    id: "q4",
    text: "チームの中で自然にやりがちな役割は？",
    options: [
      ["fire", "場を明るくする"],
      ["metal", "基準やルールを作る"],
      ["earth", "みんなの土台を支える"],
      ["wood", "先に進める流れを作る"],
      ["water", "全体の空気を読む"]
    ]
  },
  {
    id: "q5",
    text: "褒められると一番うれしい言葉は？",
    options: [
      ["wood", "行動力があるね"],
      ["fire", "一緒にいると楽しいね"],
      ["earth", "安心するね"],
      ["metal", "センスがいいね"],
      ["water", "よく見ているね"]
    ]
  },
  {
    id: "q6",
    text: "苦手になりやすい状況は？",
    options: [
      ["wood", "停滞して何も進まない"],
      ["fire", "反応がなく場が冷えている"],
      ["earth", "安心できる土台がない"],
      ["metal", "雑で筋が通っていない"],
      ["water", "考える余白がない"]
    ]
  },
  {
    id: "q7",
    text: "お金や時間の使い方で近いものは？",
    options: [
      ["metal", "価値あるものを見極めて使う"],
      ["fire", "楽しい経験に使う"],
      ["earth", "生活や安心のために使う"],
      ["wood", "成長や挑戦のために使う"],
      ["water", "学びや情報のために使う"]
    ]
  },
  {
    id: "q8",
    text: "考えをまとめる時に近いものは？",
    options: [
      ["water", "まず深く観察する"],
      ["metal", "不要なものを削って整理する"],
      ["wood", "目的に向かって組み立てる"],
      ["earth", "現実的に続く形を考える"],
      ["fire", "人に話しながら熱を作る"]
    ]
  },
  {
    id: "q9",
    text: "人間関係で大事にしたいものは？",
    options: [
      ["earth", "安心感と信頼"],
      ["fire", "明るさとノリ"],
      ["water", "深い理解"],
      ["metal", "礼儀と距離感"],
      ["wood", "一緒に成長する感じ"]
    ]
  },
  {
    id: "q10",
    text: "今の自分に一番ほしいエネルギーは？",
    options: [
      ["wood", "前に進む力"],
      ["fire", "熱量と明るさ"],
      ["earth", "安定と安心"],
      ["metal", "整える力"],
      ["water", "静けさと知恵"]
    ]
  }
];

function setStep(step) {
  const isProfile = step === "profile";
  profileStep.classList.toggle("hidden", !isProfile);
  questionsStep.classList.toggle("hidden", isProfile);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateBloodStyles() {
  document.querySelectorAll(".blood-option").forEach((label) => {
    const input = label.querySelector("input");
    const selected = input.checked;
    label.className = selected
      ? "blood-option rounded-lg border border-festival bg-[#fff4e8] px-4 py-3 text-center font-black text-festivalDark shadow-sm"
      : "blood-option rounded-lg border border-[#eadfd4] bg-white px-4 py-3 text-center font-black text-deep";
  });
}

function calculateLifePath(dateValue) {
  const digits = dateValue.replaceAll("-", "").split("").map(Number);
  let total = digits.reduce((sum, digit) => sum + digit, 0);
  while (![11, 22, 33].includes(total) && total > 9) {
    total = String(total).split("").map(Number).reduce((sum, digit) => sum + digit, 0);
  }
  return total;
}

function calculateJulianDayNumber(year, month, day) {
  const offset = Math.floor((14 - month) / 12);
  const adjustedYear = year + 4800 - offset;
  const adjustedMonth = month + 12 * offset - 3;
  return day
    + Math.floor((153 * adjustedMonth + 2) / 5)
    + 365 * adjustedYear
    + Math.floor(adjustedYear / 4)
    - Math.floor(adjustedYear / 100)
    + Math.floor(adjustedYear / 400)
    - 32045;
}

function calculateCharacterNumber(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  if (!year || !month || !day) return null;

  const julianDayNumber = calculateJulianDayNumber(year, month, day);
  return ((julianDayNumber + 49) % 60) + 1;
}

function calculateAnimalType(dateValue) {
  const characterNumber = calculateCharacterNumber(dateValue);
  if (!characterNumber) return null;

  return {
    characterNumber,
    animal: characterNumberToAnimal[characterNumber]
  };
}

function calculateZodiacSign(dateValue) {
  const [, month, day] = dateValue.split("-").map(Number);
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

function getBirthMonthDay(dateValue) {
  const [, month, day] = dateValue.split("-");
  if (!month || !day) return "";
  return `${month}-${day}`;
}

function updateCalculatedAnimal() {
  const result = calculateAnimalType(birthDateInput.value);
  if (!result) {
    calculatedAnimal.textContent = "生年月日を入れると自動で出ます";
    calculatedAnimalDetail.textContent = "60分類番号をもとに12動物へ変換します。";
    return;
  }

  calculatedAnimal.textContent = animalNames[result.animal];
  calculatedAnimalDetail.textContent = `60分類番号：${result.characterNumber}`;
}

function showProfileError(message) {
  profileError.textContent = message;
  profileError.classList.remove("hidden");
}

function renderFiveElementQuestions() {
  fiveElementsQuestions.replaceChildren(
    ...fiveElementQuestions.map((question, index) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "grid gap-3 rounded-lg border border-[#eadfd4] bg-[#fffaf4] p-4";
      fieldset.innerHTML = `
        <legend class="px-2 text-sm font-black text-deep">Q${index + 1}. ${question.text}</legend>
        ${question.options.map(([value, label]) => `
          <label class="flex gap-3 rounded-lg bg-white px-4 py-3 font-bold text-deep">
            <input type="radio" name="${question.id}" value="${value}" required>
            ${label}
          </label>
        `).join("")}
      `;
      return fieldset;
    })
  );
}

function calculateFiveElementResult(formData) {
  const scores = {
    wood: 0,
    fire: 0,
    earth: 0,
    metal: 0,
    water: 0
  };

  for (const question of fiveElementQuestions) {
    const answer = formData.get(question.id);
    if (!answer) return null;
    scores[answer] += 1;
  }

  const priority = ["wood", "fire", "earth", "metal", "water"];
  const element = priority.reduce((best, candidate) => {
    if (scores[candidate] > scores[best]) return candidate;
    return best;
  }, "wood");

  return {
    element,
    scores
  };
}

document.querySelectorAll('input[name="blood-type"]').forEach((input) => {
  input.addEventListener("change", updateBloodStyles);
});

birthDateInput.addEventListener("change", updateCalculatedAnimal);
birthDateInput.addEventListener("input", updateCalculatedAnimal);
renderFiveElementQuestions();

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profileError.classList.add("hidden");

  const formData = new FormData(profileForm);
  const birthDate = birthDateInput.value;
  const animalResult = calculateAnimalType(birthDate);
  const bloodType = formData.get("blood-type");
  const name = document.querySelector("#user-name").value.trim() || "あなた";

  if (!birthDate) {
    showProfileError("生年月日を入れてください。");
    return;
  }

  if (!bloodType) {
    showProfileError("血液型を選んでください。");
    return;
  }

  if (!animalResult) {
    showProfileError("動物タイプを計算できませんでした。生年月日を確認してください。");
    return;
  }

  profile.name = name;
  profile.birthDate = birthDate;
  profile.animal = animalResult.animal;
  profile.characterNumber = animalResult.characterNumber;
  profile.zodiac = calculateZodiacSign(birthDate);
  profile.bloodType = bloodType;

  const lifePath = calculateLifePath(birthDate);
  profileSummary.textContent = `${profile.name}さん / 生年月日 ${profile.birthDate} / 動物 ${animalNames[profile.animal]} / 血液型 ${profile.bloodType} / 数秘 ${lifePath}`;
  setStep("questions");
});

backToProfile.addEventListener("click", () => setStep("profile"));

questionsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  questionsError.classList.add("hidden");
  const formData = new FormData(questionsForm);
  const fiveElementResult = calculateFiveElementResult(formData);

  if (!fiveElementResult) {
    questionsError.textContent = "すべての質問に答えてください。";
    questionsError.classList.remove("hidden");
    return;
  }

  const lifePath = calculateLifePath(profile.birthDate);
  sessionStorage.setItem("pendingDiagnosisResult", JSON.stringify({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    name: profile.name,
    birthDate: profile.birthDate,
    bloodType: profile.bloodType,
    numerology: lifePath,
    animal: profile.animal,
    characterNumber: profile.characterNumber,
    zodiac: profile.zodiac,
    element: fiveElementResult.element,
    elementScores: fiveElementResult.scores
  }));

  const params = new URLSearchParams({
    animal: profile.animal,
    element: fiveElementResult.element,
    number: String(lifePath),
    birthDate: profile.birthDate,
    birth: getBirthMonthDay(profile.birthDate),
    zodiac: profile.zodiac,
    blood: profile.bloodType
  });
  window.location.href = `animals.html?${params.toString()}`;
});
