import React, { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";
import { QuizBoard, QuizOverview } from "../components";

function QuizPage() {
  const { quizCompleted } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (quizCompleted) {
      navigate("/result", { replace: true });
    }
  }, [quizCompleted, navigate]);

  return (
    <div className="flex flex-col lg:flex-row h-screen font-inter">
      {/* Quiz Board */}
      <div className="flex w-full items-center justify-center p-6">
        <QuizBoard />
      </div>

      {/* Quiz Overview */}
      <div className="w-full lg:w-1/2 p-6 flex">
        <QuizOverview />
      </div>
    </div>
  );
}

export default QuizPage;
