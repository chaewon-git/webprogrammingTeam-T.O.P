
const quizBox = document.getElementById("quizBox");
const quizIndex = Math.floor(Math.random() * quizData.length);

function showInfo(item) {
  const guide = {
    pet: "라벨을 제거하고 물로 헹군 후 투명 플라스틱으로 배출하세요.",
    milk: "내용물을 비우고 물로 헹군 후 종이팩 전용 수거함에 버리세요."
  };
  document.getElementById('info').innerText = guide[item];
}

// 퀴즈 렌더링
function renderQuiz(index) {
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

  if (parseInt(selected.value) === quizData[quizIndex].answer) {
    result.innerText = "정답입니다! ✅";
    result.style.color = "green";
  } else {
    const correct = quizData[quizIndex].answer + 1;
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
renderQuiz(quizIndex);

function loadNextQuiz() {
  const newIndex = Math.floor(Math.random() * quizData.length);
  renderQuiz(newIndex);
}
