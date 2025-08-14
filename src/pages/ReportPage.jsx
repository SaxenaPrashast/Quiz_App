import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const ReportPage = () => {
  const { setQuestions, setIsSignedIn, setCurrentQuestionIndex, setCurrentPage, setQuizCompleted, questions } = useContext(QuizContext);
  const score = questions.filter(q => q.user_answer === q.correct_answer).length;
  const total = questions.length;
  const navigate = useNavigate();

  const handleNewQuiz = () => {
    setQuestions([]);
    setIsSignedIn(false);
    setCurrentQuestionIndex(0);
    setCurrentPage('start');
    setQuizCompleted(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 items-center justify-center font-inter">
      <div className="w-full p-3 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Quiz Report</h1>
        <p className="text-center text-2xl font-semibold text-gray-700 mb-8">
          You scored <span className="text-blue-600">{score}</span> out of <span className="text-blue-600">{total}</span>
        </p>
        <div className="grid gap-6 max-h-[70vh] overflow-y-auto pr-4">
          {questions.map((q, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg transition-all duration-300 hover:shadow-md">
              <h3 className="text-lg font-bold mb-2 text-gray-900">{`Q${index + 1}: ${q.question}`}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <p className="font-semibold text-sm text-gray-600">Your Answer:</p>
                  <p
                    className={`p-3 rounded-md mt-1 font-medium
                      ${q.user_answer === q.correct_answer
                        ? "bg-green-100 text-green-800"
                        : q.user_answer !== null
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    {q.user_answer !== null ? q.user_answer : "No answer provided"}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-sm text-gray-600">Correct Answer:</p>
                  <p className="p-3 rounded-md bg-green-200 text-green-900 font-medium mt-1">
                    {q.correct_answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={handleNewQuiz}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700"
          >
            Start New Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
