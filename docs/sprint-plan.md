# Recovery Sprint Plan

## Sprint Goal

Deliver a usable and tested Academic Vocabulary Mini-App that enables university students to study at least eight academic vocabulary items and complete a six-question quiz with immediate feedback, a final score, explanations and a retry option.

## Sprint Backlog

| Backlog Item | Reason Selected |
|---|---|
| US1 Landing page and instructions | Required to explain the product and support first-time users. |
| US2 Clear navigation | Required for a usable application. |
| US3 Eight vocabulary items | Required learning content. |
| US4 Six-question quiz | Required assessment feature. |
| US5 Immediate feedback and explanations | Required learning feedback. |
| US6 Final score | Required result indicator. |
| US7 Retry quiz | Required repeated-practice feature. |
| US8 Accessibility and responsive checks | Addresses an original project weakness. |
| US9 Testing and development evidence | Supports quality assurance and transparent Agile progress. |

## Scope Boundaries

The sprint does not include login, a database, content management, a backend service, analytics, tracking or stored user progress. These were excluded to keep the scope achievable and because they are not required for the usable version.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| A required feature is missed | Product may not meet assessment requirements. | Check the assessment checklist before testing and Sprint Review. |
| Work takes longer than expected | Sprint Goal may be at risk. | Prioritise Must-have items, avoid optional features and reduce non-essential styling work. |
| Testing is delayed | Defects may be discovered too late. | Test each feature when implemented and record results in `testing.md`. |
| Accessibility issue | Users may be unable to operate the app. | Use semantic HTML, form labels, keyboard checks, focus management and live regions. |
| Privacy issue | User data could be handled inappropriately. | Do not collect, store or transmit personal information; do not use analytics or tracking. |
| GitHub evidence is incomplete | Development process may not be traceable. | Update the Board, development log and repository after real work sessions. |
| Deployment link fails | Teaching staff may be unable to access the app. | Test GitHub Pages before submission and include the confirmed URL in the README and report. |

## Stakeholder Communication

Work status, blockers and changes are recorded through GitHub Issues and the Project Board. Development decisions and testing are recorded in the development log and testing evidence. The Sprint Review communicates what was delivered, limitations and next steps. Any material requirement change would be assessed against the Sprint Goal, discussed with the tutor or relevant stakeholder, recorded in GitHub, and either accepted into scope or returned to the product backlog.