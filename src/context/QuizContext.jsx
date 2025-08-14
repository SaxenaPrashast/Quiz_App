import React, { createContext, useState, useEffect } from "react";
import { fetchQuestions } from "../api/quizApi";
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [email, setEmail] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fetch questions only after login
  useEffect(() => {
    if (isSignedIn && questions.length === 0) {
      setIsLoading(true);
      fetchQuestions().then(qs => {
        setQuestions(qs);
        setIsLoading(false);
      });
    }
  }, [isSignedIn, questions.length]);

  const handleAnswerClick = (answer) => {
    setQuestions(prevQuestions =>
      prevQuestions.map((q, idx) =>
        idx === currentQuestionIndex
          ? { ...q, user_answer: answer }
          : q
      )
    );
  };

  return (
    <QuizContext.Provider value={{
      questions, setQuestions,
      email, setEmail,
      isSignedIn, setIsSignedIn,
      currentPage, setCurrentPage,
      currentQuestionIndex, setCurrentQuestionIndex,
      isLoading, setIsLoading,
      quizCompleted, setQuizCompleted,
      handleAnswerClick
    }}>
      {children}
    </QuizContext.Provider>
  );
};