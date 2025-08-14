import React, { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const QuizOverview = () => {
  const {
    questions,
    setQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setQuizCompleted,
    email,
    setCurrentPage
  } = useContext(QuizContext);

  const attemptedCount = questions.filter(q => q.user_answer !== null).length;

  // Mark as visited
  useEffect(() => {
    setQuestions(prev =>
      prev.map((q, idx) =>
        idx === currentQuestionIndex ? { ...q, visited: true } : q
      )
    );
  }, [currentQuestionIndex, setQuestions]);

  const navigate = useNavigate();
    const handleSubmit = () => {
      setQuizCompleted(true);
      setCurrentPage("report");
      navigate("/result");
  };

  return (
    <div className="flex flex-col w-full bg-white p-6 rounded-3xl shadow-lg ">
      <h3 className="flex justify-center text-xl font-bold mb-6">Quiz Overview</h3>

      {/* Question Grid */}
      <div className="grid grid-cols-5 gap-2 overflow-y-auto mb-2">
        {questions.map((q, index) => {
          let btnClass =
            "p-2 text-sm rounded-lg border font-medium transition-all duration-200";

          if (index === currentQuestionIndex) {
            btnClass += " bg-blue-600 text-white border-blue-600";
          } else if (q.user_answer !== null) {
            btnClass += " bg-green-200 text-green-800 border-green-300";
          } else if (q.visited) {
            btnClass += " bg-red-200 text-red-800 border-red-300";
          } else {
            btnClass +=
              " bg-gray-200 text-gray-600 border-gray-300 hover:bg-gray-300";
          }

          return (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={btnClass}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* User Info */}
      <div className="bg-gray-50 p-4 rounded-xl text-sm mb-4">
        <p>
          <strong>Email :</strong> {email}
        </p>
        <p className="mt-1">
          <strong>Questions Attempted :</strong> {attemptedCount} /{" "}
          {questions.length}
        </p>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="w-full py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizOverview;
