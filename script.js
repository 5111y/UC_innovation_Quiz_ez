/* =========================================================
   전문대학혁신지원사업단 퀴즈 룰렛
   이지모드
========================================================= */


/* =========================
   기본 설정
========================= */

const QUIZ_COUNT = 3;
const AUTO_NEXT_DELAY = 2000;


/* =========================
   문제 데이터
   - 전체 문제 중 랜덤 3문제
   - 보기 순서도 문제마다 랜덤
========================= */

const QUESTIONS = [

{
    question: "울산과학대학교 혁신지원사업이 양성하고자 하는 핵심 인재상은 무엇일까요?",
    options: [
      "AI·디지털 전환 시대에 대응하는 실무형 전문직업인",
      "대학 행정업무만을 전담하는 보조 인력",
      "교내 행사 기획 및 운영 전담 인력",
      "해외 대학 진학만을 목표로 하는 인재"
    ],
    answer: 0,
    explanation: "울산과학대학교 전문대학혁신지원사업은 AI·디지털 전환 시대에 발맞춰 지역의 혁신성장을 주도할 '실무형 전문직업인' 양성을 목표로 합니다."
  },

  {
    question: "다음 중 울산과학대학교 전문대학혁신지원사업의 3대 혁신 영역에 포함되지 '않는' 것은?",
    options: [
      "등록금 운영혁신",
      "고등직업교육혁신",
      "산학·지역협력혁신",
      "자율혁신"
    ],
    answer: 0,
    explanation: "사업은 크게 '고등직업교육혁신', '산학·지역협력혁신', '자율혁신'이라는 3대 핵심 영역을 중심으로 추진됩니다."
  },

  {
    question: "학생들이 해외의 앞선 디지털 기술과 산업 현장을 직접 체험하며 시야를 넓히는 프로그램은?(힌트: 영어임)",
    options: [
      "우수동아리 해외 문화 탐방",
      "외국인 유학생 멘토링 프로그램",
      "글로벌 어학연수 튜터링",
      "2026 Digitech Global Field Trip"
    ],
    answer: 3,
    explanation: "Digitech Global Field Trip은 학생들이 해외의 앞선 디지털 기술과 산업 현장을 직접 경험하며 미래 역량을 키우는 활동입니다."
  },

{
    question: "대학이 지역사회 및 산업체와 협력(지산학 협력)해야 하는 가장 큰 이유는 무엇일까요?",
    options: [
      "대학이 산업체의 모든 업무를 무상으로 대행하기 위해",
      "지역과 산업의 요구를 교육에 반영해 현장 맞춤형 인재를 기르기 위해",
      "학생들의 교내 체류 시간을 최대한 늘리기 위해",
      "대학 내부의 행정 업무 효율을 높이기 위해"
    ],
    answer: 1,
    explanation: "지역과 산업의 수요를 대학 교육과 연결하면, 학생들이 실제 현장에서 필요로 하는 실무 역량을 탄탄하게 준비할 수 있습니다."
  },

  {
    question: "AI·디지털 전환 시대의 전문직업인에게 가장 필요한 역량은 무엇일까요?",
    options: [
      "전공 지식에 디지털 기술을 더해 현장에 적용할 수 있는 실무 역량",
      "교내 행사를 기획하고 운영하는 전반적인 행정 능력",
      "전공 서적을 빠르게 암기하는 이론 능력",
      "해외 유학을 위한 고급 외국어 구사 능력"
    ],
    answer: 0,
    explanation: "AI·디지털 전환 시대에는 전공 역량과 더불어, 디지털 기술을 능숙하게 활용하고 산업 현장에 바로 적용할 수 있는 실무 역량이 중요합니다."
  },

  {
    question: "'2026 GSL Program in Mongolia'를 통해 학생들이 주로 경험하게 될 활동은 무엇일까요?(힌트: 몽골에 감)",
    options: [
      "글로벌 봉사 및 지역사회 참여",
      "전공 심화 이론 집중 교육",
      "국내 타 대학과의 학점 교류 프로그램",
      "신입생 기초 교양 과목 개편"
    ],
    answer: 0,
    explanation: "2026 GSL Program in Mongolia는 몽골 현지에서 글로벌 봉사와 지역사회 참여를 뜻깊게 경험하는 프로그램입니다."
  },

{
    question: "다음 중 글로벌 네트워크 확대 및 국제협력 활동에 해당하는 것은?",
    options: [
      "미국 애리조나 주립대(ASU) 협약식 및 초청 세미나",
      "교내 주차장 확장 및 운영 개선",
      "모바일 학생증 디자인 개편",
      "강의실 좌석 및 기자재 교체"
    ],
    answer: 0,
    explanation: "ASU 협약식 및 초청 세미나는 세계적인 대학과의 교류를 통해 우리 대학의 글로벌 네트워크를 넓히는 중요한 국제협력 활동입니다."
  },

{
    question: "'Higher VET'와 가장 관련이 깊은 글로벌 활동은 무엇일까요?",
    options: [
      "고등직업교육(Higher VET) 헝가리 국제협력방안 세미나",
      "교내 우수 동아리 홍보 박람회",
      "학생 식당 메뉴 개편 및 운영 개선",
      "도서관 좌석 배정 시스템 변경"
    ],
    answer: 0,
    explanation: "Higher VET 헝가리 국제협력방안 세미나는 고등직업교육 분야의 글로벌 교류와 국제협력 방안을 모색하는 활동입니다."
  },

{
    question: "'SK AX SKALA 울산캠퍼스'와 가장 관련이 높은 분야는 무엇일까요?(힌트: AX는 AI Transformation의 줄임말)",
    options: [
      "AI·디지털 분야의 산업 현장과 교육의 연계",
      "교내 체육시설 및 헬스장 운영",
      "교내 학생식당 및 매점 운영 관리",
      "기숙사 입주생 관리 및 통금 운영"
    ],
    answer: 0,
    explanation: "SKALA 울산캠퍼스는 AI·디지털 분야의 산업 현장과 교육을 연결하여 사업의 디지털 전환 방향을 이끄는 활동입니다."
  },

{
    question: "'숏폼 영상 콘텐츠 공모전'을 통해 학생들이 얻을 수 있는 주된 기대 효과는?",
    options: [
      "학생들이 직접 디지털 콘텐츠를 기획하고 제작하는 역량 강화",
      "대학 시설물의 안전 상태 점검 및 보고",
      "동료 학생들의 출결 상태 관리 및 독려",
      "대규모 강의실의 좌석 배정 및 관리"
    ],
    answer: 0,
    explanation: "이 공모전은 학생들이 스스로 아이디어를 내고 영상을 기획·제작해 보며 디지털 콘텐츠 제작 역량을 키우는 활동입니다."
  },

{
    question: "북카페 조성과 같은 교육환경 개선의 가장 큰 목적은 무엇일까요?",
    options: [
      "학생들이 편안하게 학습하고 교류할 수 있는 최적의 환경 제공",
      "외부 연구기관 전용 프라이빗 사무실 제공",
      "교수진의 개인 연구 공간 및 휴게실 확충",
      "졸업생 동문회 정기 모임을 위한 전용 장소 확보"
    ],
    answer: 0,
    explanation: "교육환경 개선은 학생들이 보다 쾌적한 공간에서 학업에 집중하고 활발하게 소통할 수 있도록 지원하는 핵심 사업입니다."
  },

{
    question: "대학이 추진하는 '지역혁신' 활동에 대한 설명으로 가장 적절한 것은?",
    options: [
      "대학이 지역사회 및 산업체와 연계하여 지역의 발전을 이끌고 함께 성장하는 것",
      "순수 기초 학문 중심의 이론 탐구에만 집중하는 것",
      "외부와의 교류 없이 교내 학생들만을 대상으로 하는 폐쇄적인 활동",
      "대학 교육과 지역 산업의 연관성을 최소화하는 방향으로 운영하는 것"
    ],
    answer: 0,
    explanation: "지역혁신은 대학이 캠퍼스 안에 머물지 않고, 지역사회 및 산업체와 적극적으로 협력하여 지역의 혁신성장에 기여하는 것을 뜻합니다."
  },

{
    question: "혁신지원사업에서 강조하는 '전문직업인 양성'과 가장 부합하는 교육 방향은?",
    options: [
      "단순한 이론 지식 습득을 넘어, 산업 현장에서 문제 해결 능력을 발휘하는 실무 역량 강화",
      "전공과 무관하게 스펙 쌓기를 위한 무분별한 자격증 취득 위주의 교육",
      "학술지 논문 게재만을 최종 목표로 하는 심화 이론 중심 교육",
      "교내 행사 및 단순 동아리 참여 횟수 확대를 최우선으로 하는 교육"
    ],
    answer: 0,
    explanation: "전문직업인 양성은 단순 암기나 이론을 넘어, 실제 산업 현장에서 겪는 다양한 문제를 해결할 수 있는 탄탄한 실무 역량을 키우는 데 집중합니다."
  },
   
{
    question: "학생들이 혁신지원사업의 다양한 프로그램에 참여함으로써 얻을 수 있는 가장 큰 기대 효과는?",
    options: [
      "정규 수업을 수강하지 않아도 쉽게 학점을 취득할 수 있음",
      "교육, 글로벌, 산학 등 다채로운 경험을 통해 스스로의 잠재력과 실무 역량을 키울 수 있음",
      "교내 근로장학생으로 우선 선발되어 대학 행정 업무만을 전담할 수 있음",
      "프로그램 참여 횟수만으로 졸업 시험 및 논문을 자동 대체할 수 있음"
    ],
    answer: 1,
    explanation: "혁신지원사업의 본질은 학생들이 다양한 무대에서 직접 부딪히고 경험하며 미래 인재로서의 역량을 스스로 확장하도록 돕는 것입니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 방향과 가장 거리가 '먼' 것은?",
    options: [
      "학생의 미래 역량을 키우는 다채로운 교육과 프로그램 제공",
      "지역사회 및 산업체와의 긴밀한 연계와 협력",
      "AI·디지털 전환 등 시대적 변화에 선제적으로 대응하는 인재 양성",
      "대학과 지역사회 간의 교류를 축소하고 독립적인 학사 운영 강화"
    ],
    answer: 3,
   explanation: "전문대학혁신지원사업은 고립된 학사 운영이 아닌, 지역사회 및 산업 생태계와 적극적으로 소통하고 연계하여 함께 성장하는 것을 지향합니다."
  },

{
    question: "혁신지원사업이 우리 대학 학생들에게 궁극적으로 제공하고자 하는 핵심 가치는 무엇일까요?",
    options: [
      "성적 우수자 중심의 제한적인 심화 학습반 집중 운영",
      "대학원 진학을 위한 소수 정예 연구실 중심의 지원",
      "수준 높은 교육과 다채로운 경험을 통한 학생 개인의 폭넓은 성장 지원",
      "특정 희망 기업으로의 무조건적인 취업 알선 보장"
    ],
    answer: 2,
    explanation: "이 사업은 모든 학생에게 더 나은 교육 환경과 글로벌, 지역사회 참여 등 다채로운 기회를 제공하여 스스로 성장할 수 있는 든든한 기반을 마련해 줍니다."
  },

];

/* =========================
   상태값
========================= */

const state = {
  questions: [],
  currentQuestion: 0,
  score: 0,
  answered: false,
  nextTimer: null,
};


/* =========================
   DOM
========================= */

const $ = (id) => document.getElementById(id);

const screens = {
  start: $("startScreen"),
  quiz: $("quizScreen"),
  quizComplete: $("quizCompleteScreen")
};


/* =========================
   화면 전환
========================= */

function showScreen(screen) {

  Object.values(screens).forEach((element) => {

    if (element) {
      element.classList.remove("active");
    }

  });

  if (screen) {
    screen.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================
   배열 섞기
========================= */

function shuffle(array) {

  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [copied[i], copied[j]] =
      [copied[j], copied[i]];

  }

  return copied;
}


/* =========================
   퀴즈 준비
   - 전체 문제 중 랜덤 3문제
========================= */

function prepareQuiz() {

  state.questions =
    shuffle(QUESTIONS).slice(0, QUIZ_COUNT);

  state.currentQuestion = 0;
  state.score = 0;
  state.answered = false;

  renderQuestion();
}


/* =========================
   문제 출력
   - 보기 순서 랜덤
========================= */

function renderQuestion() {

  const question =
    state.questions[state.currentQuestion];

  if (!question) {
    showQuizComplete();
    return;
  }

  state.answered = false;


  /* 문제 번호 */

  $("questionNumber").textContent =
    `Q${state.currentQuestion + 1}`;


  /* 문제 */

  $("questionText").textContent =
    question.question;


  /* 기존 보기 제거 */

  $("options").innerHTML = "";


  /* 정답 오버레이 초기화 */

  if ($("answerOverlay")) {

    $("answerOverlay").hidden = true;

    $("answerOverlay").classList.remove(
      "correct",
      "wrong"
    );

  }

  if ($("answerIcon")) {
    $("answerIcon").textContent = "";
  }

  if ($("answerTitle")) {
    $("answerTitle").textContent = "";
  }

  if ($("answerText")) {
    $("answerText").textContent = "";
  }


  /* =================================================
     보기 랜덤화

     원래 정답 번호를 그대로 쓰지 않고
     각 보기마다 isCorrect를 붙여서 섞음
  ================================================= */

  const optionsWithAnswer =
    question.options.map((option, index) => {

      return {
        text: option,
        isCorrect: index === question.answer
      };

    });


  const randomizedOptions =
    shuffle(optionsWithAnswer);


  /* 보기 버튼 생성 */

  randomizedOptions.forEach((item) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      "option-btn";

    button.textContent =
      item.text;


    button.addEventListener(
      "click",
      () => {

        answerQuestion(
          item.isCorrect,
          button,
          question
        );

      }
    );


    $("options").appendChild(button);

  });


  /* 진행 표시 */

  if ($("progressText")) {

    $("progressText").textContent =
      `${state.currentQuestion + 1} / ${QUIZ_COUNT}`;

  }

}


/* =========================
   정답 선택
========================= */

function answerQuestion(
  isCorrect,
  selectedButton,
  question
) {

  if (state.answered) {
    return;
  }

  state.answered = true;


  /* 점수 */

  if (isCorrect) {
    state.score++;
  }


  /* 모든 보기 잠금 */

  const buttons =
    [
      ...$("options")
        .querySelectorAll(".option-btn")
    ];


  buttons.forEach((button) => {

    button.disabled = true;

  });


  /* 선택한 답 표시 */

  if (selectedButton) {

    selectedButton.classList.add(
      isCorrect
        ? "correct"
        : "wrong"
    );

  }


  /* =========================
     오답이면 실제 정답 표시
  ========================= */

  if (!isCorrect) {

    buttons.forEach((button) => {

      if (
        button.textContent ===
        question.options[question.answer]
      ) {

        button.classList.add(
          "correct"
        );

      }

    });

  }


  /* =========================
     정답/오답 오버레이
  ========================= */

  const overlay =
    $("answerOverlay");

  const icon =
    $("answerIcon");

  const title =
    $("answerTitle");

  const text =
    $("answerText");


  if (!overlay) {
    return;
  }


  overlay.hidden = false;


  overlay.classList.remove(
    "correct",
    "wrong"
  );


  /* 정답 */

  if (isCorrect) {

    overlay.classList.add(
      "correct"
    );

    icon.textContent = "✓";

    title.textContent =
      "정답이에요!";

    text.textContent =
      question.explanation;

  }


  /* 오답 */

  else {

    overlay.classList.add(
      "wrong"
    );

    icon.textContent = "✕";

    title.textContent =
      "아쉬워요!";

    text.textContent =
      `정답은 "${question.options[question.answer]}"입니다. ${question.explanation}`;

  }


  /* =========================
     2.0초 후 다음 문제
  ========================= */

  clearTimeout(
    state.nextTimer
  );


  state.nextTimer =
    setTimeout(() => {

      goNextQuestion();

    }, AUTO_NEXT_DELAY);

}


/* =========================
   다음 문제
========================= */

function goNextQuestion() {

  clearTimeout(
    state.nextTimer
  );


  state.currentQuestion++;


  if (
    state.currentQuestion >=
    QUIZ_COUNT
  ) {

    showQuizComplete();

    return;

  }


  renderQuestion();
}


/* =========================
   퀴즈 완료
========================= */

function showQuizComplete() {

  clearTimeout(state.nextTimer);

  // "3문제 중 n문제 정답!" 형식으로 점수 표시
  const scoreSummary = $("scoreSummary");
  if (scoreSummary) {
    scoreSummary.innerHTML =
      `${QUIZ_COUNT}문제 중 <strong>${state.score}문제</strong> 정답!`;
  }

  showScreen(screens.quizComplete);
}


/* =========================
   이벤트 연결
========================= */


/* 시작하기 */

if ($("startBtn")) {

  $("startBtn").addEventListener(
    "click",
    () => {

      prepareQuiz();

      showScreen(
        screens.quiz
      );

    }
  );

}
