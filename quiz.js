// quiz data
const quizData = [
  {
    question: "스티로폼은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 2
  },
  {
    question: "닭 뼈는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "물티슈는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "수박 껍질은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 1
  },
  {
    question: "아보카도 껍질과 씨는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "라이터는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "칫솔은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "계란 껍질은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "우유팩은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 2
  },
  {
    question: "스테인리스 단일 소재의 텀블러는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 2
  },
  {
    question: "실리콘 소재의 텀블러는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "쿠킹 호일은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "종이 컵라면 용기는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "죽은 식물은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "핸드폰 케이스는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "과자 봉지는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 2
  },
  {
    question: "플라스틱, 종이 빨대는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "고무줄은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "해산물 껍데기는 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 0
  },
  {
    question: "유색 페트병은 무슨 쓰레기로 분류되는가?",
    options: [
      "일반 쓰레기",
      "음식물 쓰레기",
      "재활용 쓰레기",
      "기타"
    ],
    answer: 2
  },
  {
    question: "내용물이 남아 있는 음료수 캔을 분리수거 하는 방법은?",
    options: [
      "그대로 재활용 쓰레기로 버린다.",
      "내용물을 비우고 물로 헹군 뒤 재활용 쓰레기로 버린다.",
      "그대로 일반 쓰레기로 버린다.",
      "내용물을 비우고 물로 헹군 뒤 일반 쓰레기로 버린다."
    ],
    answer: 1
  },
  {
    question: "식용류를 분리수거 하는 방법은?",
    options: [
      "그대로 음식물 쓰레기로 버린다.",
      "종이에 흡수시켜 음식물 쓰레기로 버린다.",
      "그대로 일반 쓰레기로 버린다.",
      "종이에 흡수시켜 일반 쓰레기로 버린다."
    ],
    answer: 3
  },
  {
    question: "포도를 분리수거 하는 방법은?",
    options: [
      "껍질, 씨, 줄기를 음식물 쓰레기로 버린다.",
      "껍질은 음식물 쓰레기로, 씨와 줄기는 일반 쓰레기로 버린다.",
      "껍질과 씨는 음식물 쓰레기로, 줄기는 일반 쓰레기로 버린다.",
      "껍질, 씨, 줄기를 일반 쓰레기로 버린다."
    ],
    answer: 2
  },
  {
    question: "깨진 유리를 분리수거 하는 방법은?",
    options: [
      "신문지 등으로 싸서 재활용 쓰레기로 버린다.",
      "그대로 재활용 쓰레기로 버린다.",
      "신문지 등으로 싸서 일반 쓰레기로 버린다.",
      "그대로 일반 쓰레기로 버린다."
    ],
    answer: 2
  },
  {
    question: "건전지를 분리수거 하는 방법은?",
    options: [
      "일반 쓰레기로 버린다.",
      "다른 플라스틱류 재활용 쓰레기들과 함께 버린다.",
      "다른 금속류 재활용 쓰레기들과 함께 버린다.",
      "전용 수거함에 버린다."
    ],
    answer: 3
  },
  {
    question: "향수를 분리수거 하는 방법은?",
    options: [
      "내용물을 물로 흘려보낸 후 용기는 재활용 쓰레기로 버린다.",
      "그래로 일반 쓰레기로 버린다.",
      "내용물을 종이에 흡수시키고 용기와 함께 일반 쓰레기로 버린다.",
      "내용물을 흡수시킨 종이는 일반 쓰레기로, 용기는 재활용 쓰레기로 버린다."
    ],
    answer: 3
  },
  {
    question: "빨대를 분리수거 하는 방법은?",
    options: [
      "플라스틱, 종이 빨대 모두 재활용 쓰레기로 버린다.",
      "플라스틱 빨대는 재활용 쓰레기로, 종이 빨대는 일반 쓰레기로 버린다.",
      "플라스틱 빨대는 일반 쓰레기로, 종이 빨대는 재활용 쓰레기로 버린다.",
      "플라스틱, 종이 빨대 모두 일반 쓰레기로 버린다."
    ],
    answer: 3
  },
  {
    question: "양파망을 분리수거 하는 방법은?",
    options: [
      "일반 쓰레기로 버린다.",
      "종이류 재활용 쓰레기로 버린다.",
      "비닐류 재활용 쓰레기로 버린다.",
      "플라스틱류 재활용 쓰레기로 버린다."
    ],
    answer: 2
  },
  {
    question: "영수증을 분리수거 하는 방법은?",
    options: [
      "일반 쓰레기로 버린다.",
      "종이류 재활용 쓰레기로 버린다.",
      "비닐류 재활용 쓰레기로 버린다.",
      "플라스틱류 재활용 쓰레기로 버린다."
    ],
    answer: 0
  },
  {
    question: "카세트 테이프를 분리수거 하는 방법은?",
    options: [
      "그대로 재활용 쓰레기로 버린다.",
      "케이스는 재활용 쓰레기로, 테이프와 내부 부품은 일반 쓰레기로 버린다.",
      "케이스와 내부 부품은 재활용 쓰레기로, 테이프는 일반 쓰레기로 버린다.",
      "케이스와 테이프는 재활용 쓰레기로, 내부 부품은 일반 쓰레기로 버린다."
    ],
    answer: 1
  },
  {
    question: "노트를 분리수거 하는 방법 중 옳은 것은?",
    options: [
      "그대로 재활용 쓰레기로 버린다.",
      "스프링과 종이를 분리한 후 같은 재활용 쓰레기로 버린다.",
      "스프링은 고철로, 종이는 종이류로 분리하여 버린다.",
      "겉표지가 코팅되어 있다면 속지와 함께 버린다."
    ],
    answer: 2
  },
  {
    question: "다음 중 옳은 것은?",
    options: [
      "건전지는 재활용 쓰레기로 버린다.",
      "형광등은 유리류 재활용 쓰레기로 버린다.",
      "단단한 씨나 껍질은 음식물 쓰레기로 버린다.",
      "조리되지 않은 생쌀은 음식물 쓰레기로 버린다."
    ],
    answer: 3
  },
  {
    question: "페트병을 분리수거 하는 방법 중 틀린 것은?",
    options: [
      "내용물이 남아 있다면 비우고 깨끗이 세척한다.",
      "겉면에 붙은 상표나 비닐 라벨을 제거한다.",
      "페트병 뚜껑을 반드시 분리한다.",
      "유색 페트병과 투명 페트병은 반드시 분리해서 버린다."
    ],
    answer: 2
  },
  {
    question: "컵라면 용기를 분리수거 하는 방법 중 틀린 것은?",
    options: [
      "종이 컵라면 용기는 깨끗이 세척하여 재활용 쓰레기로 버린다.",
      "스티로폼 컵라면 용기는 깨끗이 세척하여 재활용 쓰레기로 버린다.",
      "용기와 뚜껑은 분리하여 버린다.",
      "내용물이 완전히 제거되지 않은 용기는 일반 쓰레기로 버린다."
    ],
    answer: 0
  },
  {
    question: "택배 박스를 분리수거 하는 방법 중 틀린 것은?",
    options: [
      "테이프는 분리하여 버린다.",
      "송장은 분리하여 버리지 않아도 된다.",
      "접어서 부피를 줄인 후 버리는 것을 권장한다.",
      "종이류 재활용 쓰레기로 버린다."
    ],
    answer: 1
  }
];



const quizBox = document.getElementById("quizBox");
let currentIndex = null;

// 퀴즈 렌더링
function renderQuiz(index) {
  currentIndex = index;
  const quiz = quizData[index];
  let html = `
    <h2>Q. ${quiz.question}</h2>
    ${quiz.options
      .map(
        (opt, i) =>
          `<div class="option">
            <input type="radio" name="q" id="opt${i}" value="${i}">
            <label for="opt${i}">${i + 1}) ${opt}</label>
          </div>`
      )
      .join("")}
    <button class="submit-btn" onclick="checkAnswer()">정답 확인</button>
    <div id="result"></div>
  `;
  quizBox.innerHTML = html;
}

// 정답 확인
function checkAnswer() {
  const selected = document.querySelector('input[name="q"]:checked');
  const result = document.getElementById("result");

  if (!selected) {
    result.innerText = "답을 선택해 주세요!";
    result.style.color = "orange";
    return;
  }

  if (parseInt(selected.value) === quizData[currentIndex].answer) {
    result.innerText = "정답입니다! ✅";
    result.style.color = "green";
  } else {
    const correct = quizData[currentIndex].answer + 1;
    result.innerText = `틀렸습니다. 😢 정답은 ${correct}번입니다.`;
    result.style.color = "red";
  }

  // 선택 후 버튼 비활성화
  const options = document.querySelectorAll('input[name="q"]');
  options.forEach(opt => {
    opt.disabled = true;
    opt.parentElement.style.pointerEvents = "none";
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.disabled = true;
  const oldNextBtn = document.querySelector(".next-btn");
  if (oldNextBtn) oldNextBtn.remove();
  const nextQuizButton = document.createElement("button");

  nextQuizButton.innerText = "다음 문제";
  nextQuizButton.className = "next-btn";
  nextQuizButton.onclick = loadNextQuiz;
  result.after(nextQuizButton);
}
renderQuiz(Math.floor(Math.random() * quizData.length));

function loadNextQuiz() {
  const newIndex = Math.floor(Math.random() * quizData.length);
  renderQuiz(newIndex);
}