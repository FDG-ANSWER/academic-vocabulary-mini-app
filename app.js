const sections = document.querySelectorAll(".app-section");
const navigationLinks = document.querySelectorAll('a[href^="#"]');
const pageStatus = document.querySelector("#page-status");

function showSection(sectionId) {
  sections.forEach((section) => {
    const isSelected = section.id === sectionId;
    section.hidden = !isSelected;
  });

  const selectedSection = document.querySelector(`#${sectionId}`);
  const heading = selectedSection.querySelector("h1, h2");

  navigationLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${sectionId}`;
    link.setAttribute("aria-current", isCurrent ? "page" : "false");
  });

  pageStatus.textContent = `${heading.textContent} page displayed.`;
  window.scrollTo({ top: 0, behavior: "smooth" });
  heading.focus({ preventScroll: true });
}

navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const sectionId = link.getAttribute("href").slice(1);

    if (document.querySelector(`#${sectionId}`)) {
      event.preventDefault();
      showSection(sectionId);
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  });
});

const initialSectionId = window.location.hash.slice(1);
const validInitialSection = document.querySelector(`#${initialSectionId}`);

showSection(validInitialSection ? initialSectionId : "home");