const sections = document.querySelectorAll(".app-section");
const quizForm = document.querySelector("#quiz-form");
const retryButton = document.querySelector("#retry-button");
const quizResult = document.querySelector("#quiz-result");
const pageStatus = document.querySelector("#page-status");
const answeredCount = document.querySelector("#answered-count");
const questionCount = document.querySelector("#question-count");
const quizProgressBar = document.querySelector("#quiz-progress-bar");

const validSectionIds = ["home", "learn", "quiz"];

const questions = {
  "question-1": {
    answer: "analyse",
    answerText: "Analyse",
    explanation: "Analyse means to examine something carefully in order to understand it."
  },
  "question-2": {
    answer: "data",
    answerText: "Data",
    explanation: "Data means facts or information collected for study or analysis."
  },
  "question-3": {
    answer: "evaluate",
    answerText: "Evaluate",
    explanation: "Evaluate means to judge the quality, value or effectiveness of something."
  },
  "question-4": {
    answer: "significant",
    answerText: "Significant",
    explanation: "Significant means important or large enough to have an effect."
  },
  "question-5": {
    answer: "assess",
    answerText: "Assess",
    explanation: "Assess means to evaluate or make a judgement about something."
  },
  "question-6": {
    answer: "approach",
    answerText: "Approach",
    explanation: "Approach means a method or way of dealing with a task or problem."
  }
};

function showSection(sectionId) {
  const targetSectionId = validSectionIds.includes(sectionId)
    ? sectionId
    : "home";

  sections.forEach((section) => {
    section.hidden = section.id !== targetSectionId;
  });

  const heading = document.querySelector(
    `#${targetSectionId} h1, #${targetSectionId} h2`
  );

  if (heading) {
    heading.focus();
  }

  pageStatus.textContent = `${targetSectionId} section opened`;
}

function showSectionFromHash() {
  const sectionId = window.location.hash.replace("#", "") || "home";
  showSection(sectionId);
}

function clearQuestionFeedback() {
  document.querySelectorAll("#quiz-form fieldset").forEach((fieldset) => {
    fieldset.classList.remove("question-correct", "question-incorrect");

    const oldFeedback = fieldset.querySelector(".question-feedback");
    if (oldFeedback) {
      oldFeedback.remove();
    }
  });

  document.querySelectorAll("#quiz-form label").forEach((label) => {
    label.classList.remove("answer-correct", "answer-incorrect");
  });
}

function updateQuizProgress() {
  const totalQuestions = Object.keys(questions).length;
  const answeredQuestions = document.querySelectorAll(
    '#quiz-form input[type="radio"]:checked'
  ).length;

  answeredCount.textContent = answeredQuestions;
  questionCount.textContent = totalQuestions;
  quizProgressBar.value = answeredQuestions;
  quizProgressBar.max = totalQuestions;
  quizProgressBar.textContent = `${answeredQuestions} of ${totalQuestions} answered`;
}

function createFeedback(isCorrect, selectedText, question) {
  const feedback = document.createElement("p");
  const status = document.createElement("strong");

  feedback.className = "question-feedback";
  status.textContent = isCorrect ? "Correct. " : "Incorrect. ";
  feedback.appendChild(status);

  if (isCorrect) {
    feedback.append(question.explanation);
  } else if (selectedText) {
    feedback.append(
      `You selected "${selectedText}". The correct answer is "${question.answerText}". ${question.explanation}`
    );
  } else {
    feedback.append(
      `No answer was selected. The correct answer is "${question.answerText}". ${question.explanation}`
    );
  }

  return feedback;
}

window.addEventListener("hashchange", showSectionFromHash);
showSectionFromHash();
document.querySelectorAll('#quiz-form input[type="radio"]').forEach((input) => {
  input.addEventListener("change", updateQuizProgress);
});

updateQuizProgress();

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearQuestionFeedback();

  let score = 0;

  Object.entries(questions).forEach(([questionName, question]) => {
    const firstInput = document.querySelector(`input[name="${questionName}"]`);
    const selectedInput = document.querySelector(
      `input[name="${questionName}"]:checked`
    );
    const correctInput = document.querySelector(
      `input[name="${questionName}"][value="${question.answer}"]`
    );
    const fieldset = firstInput.closest("fieldset");
    const correctLabel = correctInput.closest("label");
    const isCorrect = selectedInput && selectedInput.value === question.answer;

    correctLabel.classList.add("answer-correct");

    if (isCorrect) {
      score += 1;
      fieldset.classList.add("question-correct");
    } else {
      fieldset.classList.add("question-incorrect");

      if (selectedInput) {
        selectedInput.closest("label").classList.add("answer-incorrect");
      }
    }

    const selectedText = selectedInput
      ? selectedInput.closest("label").textContent.trim()
      : "";

    fieldset.appendChild(createFeedback(isCorrect, selectedText, question));
  });

  quizResult.textContent = `Your final score: ${score} out of 6.`;
  quizResult.focus();
});

retryButton.addEventListener("click", () => {
  quizForm.reset();
  quizResult.textContent = "";
  clearQuestionFeedback();
  updateQuizProgress();
});