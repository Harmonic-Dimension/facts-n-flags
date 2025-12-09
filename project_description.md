# Facts n Flags – Project Description

Lightweight Vue hobby app that helps users learn country flags and trivia through a quick, 10-question quiz with lives and simple visual feedback (confetti for correct, snow for wrong). Intended to be deployable to GitHub Pages.

## Goals
- Deliver a minimal, playable flag-and-facts quiz with a start screen, question flow, and win/lose screens.
- Keep all country data (name, flags, facts, correctness markers) in a simple config file that is easy to edit manually.
- Support quick iteration and GitHub Pages hosting without backend dependencies.

## Non-goals (for v1)
- Accounts, leaderboards, timers, scoring multipliers.
- Dynamic data fetch from APIs; everything is static/local.
- Mobile-perfect polish beyond basic responsiveness.

## Core Experience
- Start screen with a “Begin” CTA and a brief blurb.
- For each question (total target: 10 correct answers to win):
  - Show the country name.
  - Present three flag options with radio buttons (one correct).
  - Present three fact options with radio buttons (one true).
  - User can pick a flag, a fact, or both in the same submission.
  - “Next”/“Submit” button evaluates choices:
    - Flag OR fact correct (only one picked): confetti; +1 correct; move on.
    - Both picked and both correct: confetti; +1 correct; gain 1 life (bonus), move on.
    - Any wrong when both picked: snow; lose 2 lives.
    - Wrong when only one picked: snow; lose 1 life.
  - Player starts with 3 lives.
- Win screen after 10 correct answers; lose screen at 0 lives.
- Ability to restart from win/lose screens.

## Data Model (static config)
- A single JSON/TS file exporting an array of country entries.
- Each entry contains:
  - `name`: string.
  - `flags`: array of 3 CDN image URLs with `isCorrect` boolean (one true, two false).
  - `facts`: array of true facts for that country (store only true entries here).
- For each question, the app selects:
  - Three flags: one correct, two wrong (from other countries’ flags).
  - Three facts: one true from the current country, two false pulled from other countries’ true-fact pools.
- Images use CDN sources (no local assets needed).
- Game picks entries in sequence or shuffled; more than 10 countries will be provided.

## User Stories
- As a player, I can start a game from a welcome screen to begin the quiz.
- As a player, I can view a country name and choose one of three flag options.
- As a player, I can view three facts and choose one as true instead of a flag if I prefer.
- As a player, I get immediate feedback (confetti for correct, snow for wrong) and see my remaining lives.
- As a player, I see my progress toward 10 correct answers.
- As a player, I see a win screen after 10 correct answers or a lose screen when lives reach zero, and I can restart.
- As a maintainer, I can add or edit countries, flag images, and facts via a simple config without code changes elsewhere.

## MVP Feature Checklist
- Vue single-page app with three screens: start, quiz, end (win/lose state).
- Local state for lives (3), correct count (target 10), current question index.
- Question component that renders flag options and fact options; allows selecting flag, fact, or both; single submission button.
- Validation to ensure one selection before “Next”.
- Simple animations: confetti on correct, snowflakes on wrong (CSS or lightweight library).
- Responsive layout suitable for desktop/tablet and acceptable on mobile.
- Static assets ready for GitHub Pages deployment.

## Nice-to-haves (optional later)
- Shuffle order of correct answers within flags/facts per question.
- Sound effects toggle.
- Simple progress bar.
- Persist best streak in `localStorage`.

## Technical Notes
- Stack: Vue 3 + Vite for lightweight builds; deploy via GitHub Pages workflow.
- Keep dependencies minimal; prefer CSS animations over heavy libraries.
- Testing (lightweight): smoke test that the quiz loads and a question advances on selection.
- If the pool ever falls below 10 (e.g., future trimming), questions should repeat rather than blocking the game start.
