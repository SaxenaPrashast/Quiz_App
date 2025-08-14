import React, { useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import TimerDisplay from "./TimerDisplay";

const QuizBoard = () => {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex, handleAnswerClick } =
    useContext(QuizContext);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col w-full bg-white p-8 rounded-3xl shadow-lg h-full">

      {/* Header */}
      <div className="flex justify-between items-center pb-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <TimerDisplay />
      </div>

      {/* Question */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-sm">
        <p className="text-lg font-medium">{currentQuestion?.question}</p>
      </div>

      {/* Answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {currentQuestion?.all_answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(answer)}
            className={`p-4 text-left rounded-xl transition-all duration-300 shadow-sm border ${
              currentQuestion?.user_answer === answer
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-white hover:bg-gray-100 border-gray-300 text-gray-700"
            }`}
          >
            {answer}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-auto pt-6 border-t border-gray-200">
        <button
          onClick={() =>
            setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))
          }
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 bg-gray-200 text-black rounded-full font-medium hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentQuestionIndex(
              Math.min(questions.length - 1, currentQuestionIndex + 1)
            )
          }
          disabled={currentQuestionIndex === questions.length - 1}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizBoard;
