import React, { useState, useContext } from "react";
import { QuizContext } from "../context/QuizContext";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const { setEmail, setIsSignedIn } = useContext(QuizContext);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(inputEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmail(inputEmail);
    setIsSignedIn(true);
    navigate("/quiz");
  };

  return (
    <div className="flex h-screen font-inter">
      {/* Left Side - Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-gradient-to-b from-yellow-50 to-yellow-100">
        <div className="mb-10">
          <h1 className="flex items-center justify-center text-3xl font-bold text-gray-800">Welcome to the Quiz</h1>
          
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-m font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={inputEmail}
              onChange={(e) => {
                e.preventDefault();
                setInputEmail(e.target.value);
                setEmailError("");
              }}
              placeholder="you@example.com"
              className={`mt-1 block w-full px-4 py-3 rounded-full border ${
                emailError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-yellow-400"
              } focus:outline-none focus:ring-2`}
              required
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-600">{emailError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>

        
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 relative bg-cover bg-center" style={{
          backgroundImage:
            "url('https://as1.ftcdn.net/v2/jpg/16/38/12/56/1000_F_1638125606_cJQOfbozFwfC1DwaQ4CGDUheItrV9cUL.jpg')",
        }}
      ></div>
    </div>
  );
};

export default StartPage;
