(function () {
  "use strict";

  const ANSWER_FEEDBACK_DELAY_MS = 2000; // tempo de exibição do feedback antes de avançar
  const OPTION_LETTERS = ["A", "B", "C", "D"];

  const screens = Array.from(document.querySelectorAll(".screen"));

  const btnStart = document.getElementById("btn-start");
  const categoryGrid = document.getElementById("category-grid");

  const btnQuizBack = document.getElementById("btn-quiz-back");
  const quizProgressLabel = document.getElementById("quiz-progress-label");
  const quizScoreEl = document.getElementById("quiz-score");
  const progressFill = document.getElementById("progress-fill");
  const progressTrack = document.getElementById("progress-track");
  const quizQuestionEl = document.getElementById("quiz-question");
  const quizOptionsEl = document.getElementById("quiz-options");

  const resultScoreEl = document.getElementById("result-score");
  const resultPercentageEl = document.getElementById("result-percentage");
  const resultBreakdownEl = document.getElementById("result-breakdown");
  const resultMessageEl = document.getElementById("result-message");
  const btnPlayAgain = document.getElementById("btn-play-again");
  const btnBackCategories = document.getElementById("btn-back-categories");

  const state = {
    categoryId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    answered: false,
    advanceTimer: null
  };

  function shuffleArray(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function prepareQuestions(categoryId) {
    const category = QUIZ_DATA[categoryId];
    const baseQuestions = category.shuffleQuestions
      ? shuffleArray(category.questions)
      : category.questions.slice();

    return baseQuestions.map((original) => {
      return {
        id: original.id,
        question: original.question,
        correctAnswer: original.correctAnswer,
        explanation: original.explanation,
        options: shuffleArray(original.options)
      };
    });
  }

  function goToScreen(screenName) {
    screens.forEach((screen) => {
      const isTarget = screen.dataset.screen === screenName;
      screen.classList.toggle("is-active", isTarget);
      screen.setAttribute("aria-hidden", isTarget ? "false" : "true");
    });
  }

  function buildCategoryGrid() {
    categoryGrid.innerHTML = "";

    CATEGORY_LIST.forEach((category) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "category-card";
      card.setAttribute("role", "listitem");
      card.setAttribute("aria-label", `Iniciar quiz de ${category.label}`);
      card.dataset.categoryId = category.id;

      const media = document.createElement("div");
      media.className = "card-media";

      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("class", "card-placeholder-icon");
      icon.setAttribute("aria-hidden", "true");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttributeNS("http://www.w3.org/1999/xlink", "href", `#icon-${category.id}`);
      use.setAttribute("href", `#icon-${category.id}`);
      icon.appendChild(use);
      media.appendChild(icon);

      const img = document.createElement("img");
      img.src = category.image;
      img.alt = `Modelo ${category.label} Confort Flex`;
      img.loading = "lazy";
      img.addEventListener("error", () => img.remove());
      media.appendChild(img);

      const label = document.createElement("span");
      label.className = "card-label";
      label.textContent = category.label;

      card.appendChild(media);
      card.appendChild(label);
      card.addEventListener("click", () => startQuiz(category.id));

      categoryGrid.appendChild(card);
    });
  }

   function startQuiz(categoryId) {
    clearTimeout(state.advanceTimer);

    state.categoryId = categoryId;
    state.questions = prepareQuestions(categoryId);
    state.currentIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.wrongCount = 0;
    state.answered = false;

    goToScreen("quiz");
    renderCurrentQuestion();
  }

  function updateScoreDisplay() {
    quizScoreEl.textContent = `Pontos: ${state.score}`;
  }

  function updateProgressDisplay() {
    const total = state.questions.length;
    const current = state.currentIndex + 1;
    quizProgressLabel.textContent = `Pergunta ${current} de ${total}`;

    const percent = Math.round((state.currentIndex / total) * 100);
    progressFill.style.width = `${percent}%`;
    progressTrack.setAttribute("aria-valuenow", String(percent));
  }

  function renderCurrentQuestion() {
    state.answered = false;
    const question = state.questions[state.currentIndex];

    updateProgressDisplay();
    updateScoreDisplay();

    quizQuestionEl.textContent = question.question;
    quizOptionsEl.innerHTML = "";

    question.options.forEach((optionText, index) => {
      const optionBtn = document.createElement("button");
      optionBtn.type = "button";
      optionBtn.className = "option-btn";
      optionBtn.setAttribute("role", "listitem");

      const marker = document.createElement("span");
      marker.className = "option-marker";
      marker.textContent = OPTION_LETTERS[index] || "";
      marker.setAttribute("aria-hidden", "true");

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = optionText;

      optionBtn.appendChild(marker);
      optionBtn.appendChild(text);

      optionBtn.addEventListener("click", () => {
        handleAnswer(optionText, index, question);
      });

      quizOptionsEl.appendChild(optionBtn);
    });
  }

  function handleAnswer(selectedText, selectedIndex, question) {
    if (state.answered) return;
    state.answered = true;

    const optionButtons = Array.from(quizOptionsEl.querySelectorAll(".option-btn"));
    const isCorrect = selectedText === question.correctAnswer;

    optionButtons.forEach((btn, index) => {
      btn.disabled = true;
      const optionText = question.options[index];

      if (optionText === question.correctAnswer) {
        btn.classList.add("is-correct");
      } else if (index === selectedIndex) {
        btn.classList.add("is-wrong");
      } else {
        btn.classList.add("is-muted");
      }
    });

    if (isCorrect) {
      state.score += 1;
      state.correctCount += 1;
    } else {
      state.wrongCount += 1;
    }

    updateScoreDisplay();

    state.advanceTimer = setTimeout(() => {
      advanceToNextStep();
    }, ANSWER_FEEDBACK_DELAY_MS);
  }

  function advanceToNextStep() {
    const isLastQuestion = state.currentIndex >= state.questions.length - 1;

    if (isLastQuestion) {
      showResult();
    } else {
      state.currentIndex += 1;
      renderCurrentQuestion();
    }
  }

   function getPerformanceMessage(percentage) {
    if (percentage === 100) return "Domínio completo. Excelente!";
    if (percentage >= 70) return "Muito bom! Você conhece bem a linha.";
    if (percentage >= 40) return "Bom trabalho. Vale revisar alguns detalhes.";
    return "Que tal tentar novamente?";
  }

  function showResult() {
    progressFill.style.width = "100%";
    progressTrack.setAttribute("aria-valuenow", "100");

    const total = state.questions.length;
    const percentage = Math.round((state.correctCount / total) * 100);

    resultScoreEl.textContent = `${state.correctCount} / ${total}`;
    resultPercentageEl.textContent = `${percentage}% de aproveitamento`;
    resultBreakdownEl.textContent = `${state.correctCount} acertos · ${state.wrongCount} erros`;
    resultMessageEl.textContent = getPerformanceMessage(percentage);

    restartEntranceAnimations("#screen-result [class*='result-']");

    goToScreen("result");
  }

   function restartEntranceAnimations(selector) {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.animation = "none";
      el.offsetHeight;
      el.style.animation = "";
    });
  }

  function backToCategories() {
    clearTimeout(state.advanceTimer);
    goToScreen("categories");
  }

 function bindEvents() {
    btnStart.addEventListener("click", () => {
      goToScreen("categories");
    });

    btnQuizBack.addEventListener("click", backToCategories);

    btnPlayAgain.addEventListener("click", () => {
      startQuiz(state.categoryId);
    });

    btnBackCategories.addEventListener("click", backToCategories);
  }

  function init() {
    buildCategoryGrid();
    bindEvents();
    goToScreen("home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();