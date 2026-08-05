const sections = document.querySelectorAll(".app-section");
const quizForm = document.querySelector("#quiz-form");
const retryButton = document.querySelector("#retry-button");
const quizResult = document.querySelector("#quiz-result");
const pageStatus = document.querySelector("#page-status");

const validSectionIds = ["home", "learn", "quiz"];

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

  if (pageStatus) {
    pageStatus.textContent = `${targetSectionId} section opened`;
  }
}

function showSectionFromHash() {
  const sectionId = window.location.hash.replace("#", "") || "home";
  showSection(sectionId);
}

window.addEventListener("hashchange", showSectionFromHash);

showSectionFromHash();

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = {
    "question-1": "analyse",
    "question-2": "data",
    "question-3": "evaluate",
    "question-4": "significant"
  };

  let score = 0;

  Object.entries(answers).forEach(([questionName, correctAnswer]) => {
    const selectedAnswer = document.querySelector(
      `input[name="${questionName}"]:checked`
    );

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
      score += 1;
    }
  });

  quizResult.textContent = `Your score: ${score} out of 4.`;
});

retryButton.addEventListener("click", () => {
  quizForm.reset();
  quizResult.textContent = "";
});