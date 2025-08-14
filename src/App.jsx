import React, { useContext } from "react";
import { QuizProvider, QuizContext } from "./context/QuizContext";
import { Routes, Route, Navigate } from "react-router-dom";
import StartPage from "./pages/StartPage";
import QuizPage from "./pages/QuizPage";
import ReportPage from "./pages/ReportPage";
import { TimerProvider } from "./context/TimerContext";


function ProtectedRoute({ children }) {
  const context = useContext(QuizContext);
  if (!context) return <Navigate to="/" />;
  const { isSignedIn } = context;
  return isSignedIn ? children : <Navigate to="/" />;
}

function App() {
  return (
    <TimerProvider>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <QuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <ProtectedRoute>
                <ReportPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </QuizProvider>
    </TimerProvider>
  );
}


export default App;
