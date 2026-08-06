# Product Backlog

## Recovery Analysis

The original project had unclear requirements, weak prioritisation, too much work in progress, late testing, insufficient consideration of accessibility and privacy, inconsistent progress records, and no Definition of Done.

These problems conflict with Agile principles and practices. The work was not broken into clear, testable user stories; value was not prioritised; work was started before earlier items were completed; quality checks were delayed; and progress was not made transparent through consistent records and board updates.

The recovery approach is to deliver a small, usable and tested product during one sprint. Core learning and quiz functions are prioritised over optional features such as accounts, databases, saved progress and content management.

## Product Goal

Provide university students with a simple, accessible and privacy-respecting web application for learning academic vocabulary and checking their understanding through an interactive quiz.

## Intended Users

The intended users are university students, particularly students developing academic English skills for reading and writing.

## Estimation Method

Relative estimates use Fibonacci-style story points: 1, 2, 3, 5 and 8. A larger estimate represents greater complexity, uncertainty or effort.

## Prioritised Backlog

| ID | User Story | Acceptance Criteria | Priority | Estimate |
|---|---|---|---|---:|
| US1 | As a university student, I want a landing page explaining the app and how to use it, so that I know its purpose. | Purpose is visible; instructions are visible; user can navigate to Learn and Quiz. | Must | 2 |
| US2 | As a student, I want clear navigation between Home, Learn and Quiz, so that I can move through the app easily. | All navigation links open the correct section; keyboard users can reach and activate navigation. | Must | 2 |
| US3 | As a student, I want to learn academic vocabulary with meanings and examples, so that I can understand how to use the words. | At least eight items are shown; every item has a meaning and English example sentence. | Must | 3 |
| US4 | As a student, I want to complete a vocabulary quiz, so that I can practise what I learned. | Quiz contains at least six multiple-choice questions; one answer can be selected per question. | Must | 5 |
| US5 | As a student, I want immediate feedback after submitting answers, so that I can learn from mistakes. | Correct and incorrect questions are identified; correct answer and explanation are shown; unanswered questions are handled. | Must | 5 |
| US6 | As a student, I want to see a final score, so that I can assess my result. | Score is calculated and displayed after submission as a result out of six. | Must | 2 |
| US7 | As a student, I want to retry the quiz, so that I can practise again. | Retry clears selections, score, feedback and answer styling. | Must | 2 |
| US8 | As a user, I want the app to be accessible and usable on different screen sizes, so that I can use it with keyboard navigation and on a smaller display. | Semantic headings, labels, focus handling and live regions are present; layout is checked at a narrow viewport. | Must | 3 |
| US9 | As the project owner, I want testing and development evidence, so that quality and Agile progress are traceable. | Testing results, decisions and board status are recorded honestly. | Must | 5 |
| US10 | As a future user, I want more questions and saved progress, so that I can practise over time. | Not included in this recovery sprint. | Could | 8 |

## Prioritisation Rationale

Must-have items were selected because they are either mandatory application requirements or directly address failures in the original project. The landing page, learning content, six-question quiz, feedback, score and retry function form the minimum usable learning experience. Accessibility, privacy and testing are also Must-have work because they were previously neglected. Saved progress, accounts, a database and a CMS are out of scope because they are not required and would risk the Sprint Goal.