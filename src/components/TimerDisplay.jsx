import React, { useEffect, useContext } from "react";
import { TimerContext } from "../context/TimerContext";
import { useNavigate } from "react-router-dom";

const TimerDisplay = () => {
  const { time, setTime } = useContext(TimerContext);
  const navigate = useNavigate();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (time === 0) {
      navigate("/result");
    }
  }, [time, setTime, navigate]);

  return (
    <div className="flex items-center p-3 bg-red-100 rounded-3xl space-x-2 text-xl font-semibold text-red-500">
      <span>Time Left:</span>
      <span>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};

export default TimerDisplay;
