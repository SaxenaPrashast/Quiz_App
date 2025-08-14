# Quiz App

A modern React quiz application question fetching from Open Trivia DB, timer, and result reporting.

## Features

- **Email Sign-In:** Users must enter a valid email to start the quiz.
- **Question Fetching:** Fetches 15 questions from [Open Trivia DB](https://opentdb.com/api.php?amount=15) after login (with caching to avoid rate limits).
- **Quiz Flow:** Users answer questions, see an overview, and submit to view their score/report.
- **Timer:** Quiz timer.
- **Result Page:** Displays score, correct answers, and allows starting a new quiz.
- **Protected Routes:** Only signed-in users can access quiz and result pages.
- **Responsive UI:** Styled with Tailwind CSS.

## Folder Structure

```
quiz_app/
├── public/
│   └── quizde.svg
├── src/
│   ├── api/
│   │   └── quizApi.js
│   ├── components/
│   │   ├── index.js
│   │   ├── QuizBoard.jsx
│   │   ├── QuizOverview.jsx
│   │   └── TimerDisplay.jsx
│   ├── context/
│   │   ├── QuizContext.jsx
│   │   └── TimerContext.jsx
│   ├── pages/
│   │   ├── StartPage.jsx
│   │   ├── QuizPage.jsx
│   │   └── ReportPage.jsx
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
│  
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## How It Works

1. **StartPage:** User enters email.
2. **QuizPage:** Questions are fetched (once per session), timer starts, user answers questions.
3. **QuizOverview:** Shows progress and allows submitting the quiz.
4. **ReportPage:** Displays score, answers, and a button to start a new quiz.

## Tech Stack

- React 19
- React Router v7
- Tailwind CSS
- Vite

## Setup & Run

```bash
npm install
npm run dev
```

## Notes

- API requests are cached to avoid rate-limiting.
- Only one request is made per login session.
- To reset the quiz, use the "Start New Quiz" button on the report page.


