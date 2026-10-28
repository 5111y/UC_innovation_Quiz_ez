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
    question: "울산과학대학교 전문대학혁신지원사업이 추구하는 인재양성 방향으로 가장 적절한 것은?",
    options: [ "AI·디지털 전환 시대에 대응하는 전문직업인 양성",
              "대학 행정업무를 담당하는 인력 양성",
              "교내 행사 운영 인력 양성",
              "해외 대학 진학을 위한 인재 양성" ],
    answer: 0,
    explanation: "울산과학대학교 전문대학혁신지원사업은 AI·디지털 전환 시대에 발맞춰 지역의 혁신성장을 주도할 실무형 전문직업인 양성을 목표로 합니다."
  },

  {
    question: "다음 중 울산과학대학교 전문대학혁신지원사업의 3대 혁신 영역에 포함되지 않는 것은?",
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
    question: "학생들의 쾌적한 학습과 교류를 지원하기 위해 동부캠퍼스에 새롭게 조성될 미래형 캠퍼스 공간의 이름은?",
    options: [
      "북카페 UC책마루",
      "최첨단 실내 체육관",
      "글로벌 전용 기숙사",
      "메타버스 VR 체험관"
    ],
    answer: 0,
    explanation: "학생들이 자유롭게 공부하고 소통할 수 있는 교육환경 개선의 일환으로 북카페 'UC책마루'가 신설될 예정입니다."
  },
  {
    question: "디지털 기술 및 해외 산업 현장을 학생들이 직접 체험하며 시야를 넓히는 글로벌 역량 강화 프로그램은?",
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
    question: "지산학 협력이 필요한 가장 큰 이유는 무엇일까요?",
    options: [
      "대학이 산업체의 모든 업무를 대신하기 위해서",
      "지역과 산업의 요구를 교육과 연결해 현장 맞춤형 인재를 기르기 위해",
      "학생들의 교내 체류 시간을 최대한 늘리기 위해",
      "대학 내부 부서 간의 행정 업무 효율을 높이기 위해"
    ],
    answer: 1,
    explanation: "지역과 산업의 수요를 대학 교육 및 인재양성과 연결하면 현장에 필요한 역량을 갖춘 인재를 양성하는 데 도움이 됩니다."
  },

  {
    question: "다음 중 AI·디지털 전환 시대의 전문직업인에게 필요한 역량과 가장 가까운 것은?",
    options: [
      "산업 현장에서 활용할 수 있는 실무 역량과 디지털 역량",
      "교내 행사를 기획하고 운영하는 전반적인 행정 능력",
      "전공 서적을 빠르게 암기하는 이론 능력",
      "해외 유학을 위한 고급 외국어 구사 능력"
    ],
    answer: 0,
    explanation: "AI·디지털 전환 시대에는 전공 역량과 함께 디지털 기술을 활용하고 산업 현장에 적용할 수 있는 실무 역량이 중요합니다."
  },

  {
    question: "2026 GSL Program in Mongolia와 가장 관련이 높은 활동은 무엇일까요?",
    options: [
      "글로벌 봉사 및 지역사회 참여",
      "전공 심화 이론 집중 교육",
      "국내 타 대학과의 학점 교류 프로그램",
      "신입생 기초 교양 과목 개편"
    ],
    answer: 0,
    explanation: "2026 GSL Program in Mongolia는 몽골에서 글로벌 봉사와 지역사회 참여를 경험하는 프로그램입니다."
  },

  {
    question: "다음 중 글로벌·국제협력 활동에 해당하는 것은 무엇일까요?",
    options: [
      "GTP 구축을 위한 ASU 협약식 및 초청 세미나",
      "교내 주차장 운영 개선",
      "학생증 디자인 변경",
      "강의실 좌석 배치 변경"
    ],
    answer: 0,
    explanation: "GTP 구축을 위한 ASU 협약식 및 초청 세미나는 대학 간 국제협력과 글로벌 네트워크 확대와 관련된 활동입니다."
  },

  {
    question: "Higher VET와 관련된 활동은 무엇일까요?",
    options: [
      "고등직업교육(Higher VET) 헝가리 국제협력방안 세미나",
      "교내 동아리 박람회",
      "학내 식당 운영 개선",
      "도서관 좌석 배정 방식 변경"
    ],
    answer: 0,
    explanation: "Higher VET 헝가리 국제협력방안 세미나는 고등직업교육 분야의 국제협력과 관련된 활동입니다."
  },

  {
    question: "SK AX ‘SKALA’ 울산캠퍼스와 가장 관련이 높은 분야는 무엇일까요?",
    options: [
      "AI·디지털 분야의 산업 및 교육 연계",
      "교내 체육시설 운영",
      "학생식당 운영",
      "기숙사 입주 관리"
    ],
    answer: 0,
    explanation: "SKALA 울산캠퍼스는 AI·디지털 분야의 산업 및 교육과 연계되는 활동으로 사업의 디지털 전환 방향과 연결됩니다."
  },

  {
    question: "숏폼 영상 콘텐츠 공모전의 주요 활동으로 가장 적절한 것은?",
    options: [
      "학생들이 디지털 콘텐츠를 직접 기획하고 제작하는 것",
      "대학 시설을 점검하는 것",
      "학생들의 출결을 관리하는 것",
      "강의실 좌석을 배정하는 것"
    ],
    answer: 0,
    explanation: "숏폼 영상 콘텐츠 공모전은 학생들이 직접 콘텐츠를 기획하고 제작하며 디지털 콘텐츠 제작 역량을 높이는 활동입니다."
  },

  {
    question: "북카페 조성과 같은 교육환경 개선의 목적은 무엇일까요?",
    options: [
      "학생들의 학습과 교류를 지원하는 환경을 만드는 것",
      "외부 연구기관 전용 사무실을 제공하는 것",
      "교수진의 개인 연구 공간을 확충하는 것",
      "졸업생 동문회 정기 모임 장소를 확보하는 것"
    ],
    answer: 0,
    explanation: "북카페와 같은 교육환경 개선은 학생들이 학습하고 교류할 수 있는 환경을 조성하여 교육혁신을 지원합니다."
  },

  {
    question: "우리 대학이 양성하고자 하는 'EDGE 있는 전문직업인'에서 EDGE의 의미에 포함되지 않는 역량은?",
    options: [
      "Ethical (윤리적인)",
      "Economic (경제적인)",
      "Diverse (다양한)",
      "Elastic (회복탄력성)"
    ],
    answer: 1,
    explanation: "EDGE는 Ethical(윤리적), Diverse(다양한), Glocal(글로컬), Elastic(회복탄력성)을 의미하는 우리 대학의 인재상입니다."
  },
  {
    question: "다음 중 지역혁신과 가장 관련이 깊은 활동은 무엇일까요?",
    options: [
      "지역사회 및 산업체와 연계한 교육·협력 활동",
      "순수 기초 학문 중심의 이론 탐구 활동",
      "교내 학생만을 대상으로 하는 폐쇄적인 활동",
      "지역 산업과 대학 교육을 분리하는 활동"
    ],
    answer: 0,
    explanation: "지역혁신은 대학이 지역사회 및 산업체와 연계하여 지역의 변화와 산업 수요에 대응하고 함께 성장하는 것을 의미합니다."
  },

  {
    question: "산업체의 요구를 대학 교육과 연결하는 것이 중요한 이유는 무엇일까요?",
    options: [
      "학생들이 실제 산업 현장에서 필요한 역량을 준비하는 데 도움이 되기 때문",
      "대학의 모든 교육과정을 산업체가 대신 운영하기 때문",
      "대학의 자체적인 수익 창출 사업을 추진할 수 있기 때문",
      "대학과 지역사회의 교류를 줄일 수 있기 때문"
    ],
    answer: 0,
    explanation: "산업 현장의 변화와 요구를 교육에 반영하면 학생들이 실제 직무에 필요한 역량을 준비하는 데 도움이 됩니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 활동과 가장 잘 연결된 것은?",
    options: [
      "GSL Program in Mongolia — 글로벌·지역사회 참여",
      "숏폼 영상 콘텐츠 공모전 — 외국어 자격증 취득 지원",
      "북카페 조성 — 교직원 전용 휴게 공간 확충",
      "ASU 협약식 — 국내 타 대학과의 연합 축제 기획"
    ],
    answer: 0,
    explanation: "GSL Program in Mongolia는 글로벌 활동과 지역사회 참여와 연결되는 프로그램입니다."
  },

{
    question: "글로벌 테크니션 양성을 위해 우리 대학이 든든한 글로벌 산학협력 협약을 맺은 미국의 대학교는 어디일까요?",
    options: [
      "애리조나 주립대(ASU)",
      "스탠퍼드 대학교",
      "매사추세츠 공과대학교(MIT)",
      "캘리포니아 대학교(UC)"
    ],
    answer: 0,
    explanation: "국제협력망 확대를 위해 미국 애리조나 주립대(ASU)와 글로벌 테크니션 양성 협약식 및 초청 세미나를 진행했습니다."
  },

{
    question: "혁신지원사업에서 강조하는 ‘전문직업인 양성’과 가장 가까운 교육 방향은?",
    options: [
      "전공과 무관하게 취업률을 높이기 위한 자격증 취득 위주의 교육",
      "전공 지식과 더불어 산업 현장에 바로 투입될 수 있는 실무 역량 강화",
      "학술지 논문 게재를 목표로 하는 심화 이론 중심 교육",
      "교내 행사와 동아리 참여 횟수 확대를 최우선으로 하는 교육"
    ],
    answer: 1,
    explanation: "전문직업인 양성은 단순한 이론 지식 습득을 넘어, 실제 산업 현장에서 문제 해결 능력을 발휘할 수 있는 실무 역량을 키우는 데 집중합니다."
  },

  {
    question: "다음 중 글로벌 활동 및 국제협력 네트워크 확대와 직접적인 관련이 없는 프로그램은?",
    options: [
      "GSL Program in Mongolia",
      "Higher VET 헝가리 국제협력방안 세미나",
      "ASU 글로벌 테크니션 양성 협약",
      "북카페 UC책마루 조성"
    ],
    answer: 3,
    explanation: "북카페 UC책마루 조성은 글로벌 활동이 아닌, 교내 학생들을 위한 미래형 캠퍼스 교육환경 개선 사업의 일환입니다."
  },

{
    question: "학생들이 혁신지원사업의 다양한 프로그램에 직접 참여하고 경험하는 것의 가장 큰 의미는?",
    options: [
      "정규 전공 수업을 전혀 듣지 않아도 쉽게 학점을 딸 수 있음",
      "다양한 경험을 통해 학생 스스로 자신의 잠재력과 실무 역량을 확장할 수 있음",
      "교내 근로장학생으로 선발되어 대학 행정 업무만 전담할 수 있음",
      "프로그램 참여 횟수로만 졸업 시험 및 논문을 대체할 수 있음"
    ],
    answer: 1,
    explanation: "혁신지원사업의 본질은 학생들이 글로벌, 디지털, 지산학 등 다채로운 경험을 통해 스스로 성장하고 역량을 키울 수 있도록 무대를 제공하는 것입니다."
  },

  {
    question: "다음 중 전문대학혁신지원사업의 방향과 가장 거리가 먼 것은?",
    options: [
      "학생의 미래 역량을 키우는 교육과 프로그램",
      "지역 및 산업과 연계한 협력",
      "AI·디지털 전환에 대응하는 인재양성",
      "대학과 지역사회의 교류를 줄이는 것"
    ],
    answer: 3,
    explanation: "전문대학혁신지원사업은 학생 성장과 AI·디지털 전환, 지역·산업과의 연계 등을 통해 대학의 혁신을 추진합니다."
  },

{
    question: "전문대학혁신지원사업이 우리 대학 학생들에게 궁극적으로 제공하고자 하는 핵심 혜택은?",
    options: [
      "성적 우수자 중심의 제한적인 심화 학습반 운영",
      "대학원 진학을 위한 소수 정예 연구실 지원",
      "교육·비교과·글로벌·산학 등 다채로운 경험을 통한 학생 개인의 성장 지원",
      "희망하는 해외 대기업으로의 무조건적인 취업 보장"
    ],
    answer: 2,
    explanation: "사업은 학생들에게 수준 높은 교육 환경과 비교과, 글로벌 활동 등 다양한 참여 기회를 제공하여 역량을 넓히는 데 집중합니다."
  },

  {
    question: "전문대학혁신지원사업을 통해 우리 대학이 끊임없이 교육 혁신을 거듭하는 가장 근본적인 이유는?",
    options: [
      "AI·디지털 전환 등 급변하는 지역·산업 환경에 발맞춰 진화하기 위해",
      "대학의 행정 서류 작업과 교직원들의 업무량을 줄이기 위해",
      "교육부의 규제망에서 벗어나 완전한 독립 운영을 하기 위해",
      "다른 대학과의 입시 경쟁에서 단순 홍보성 스펙을 쌓기 위해"
    ],
    answer: 0,
    explanation: "시대의 흐름인 AI·디지털 전환과 지역 산업 생태계의 변화에 선제적으로 대응하여, 현장이 원하는 인재를 길러내기 위함입니다."
  },

  {
    question: "다음 중 울산과학대학교 전문대학혁신지원사업 부스의 핵심 홍보 메시지로 가장 적절한 것은?",
    options: [
      "등록금 걱정 없는 완전 무료 대학 생활의 시작!",
      "전공 공부 없이도 취업이 보장되는 마법 같은 학교!",
      "학생의 성장과 지역의 혁신성장을 주도하는 맞춤형 고등직업교육!",
      "오직 교직원의 편의만을 위해 변화하는 스마트 행정!"
    ],
    answer: 2,
    explanation: "전문대학혁신지원사업은 학생의 성장과 교육혁신을 지원하고, 지역 및 산업과 연계하여 지역의 혁신성장을 함께 추진합니다."
  }

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
