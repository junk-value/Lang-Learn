import React, { useState } from "react";
import { quizQuestions } from "../data/quizData";

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleAnswerClick = (selected) => {
    if (selected === quizQuestions[currentQ].answer) {
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    if (nextQ < quizQuestions.length) {
      setCurrentQ(nextQ);
      setShowHint(false);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-2xl">
      {showScore ? (
        <h2 className="text-xl font-bold text-center">
          You scored {score} out of {quizQuestions.length}
        </h2>
      ) : (
        <div>
          {/* ✅ Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{
                width: `${((currentQ + 1) / quizQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mb-4 text-center">
            Question {currentQ + 1} of {quizQuestions.length}
          </p>

          {/* Question */}
          <h2 className="text-lg font-semibold mb-3">
            {quizQuestions[currentQ].question}
          </h2>

          {/* Options */}
          <div className="grid gap-3">
            {quizQuestions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswerClick(opt)}
                className="p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Hint Section */}
          <div className="mt-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 bg-yellow-400 text-black rounded-xl hover:bg-yellow-500 transition"
            >
              {showHint ? "Hide Hint" : "Show Hint"}
            </button>
            {showHint && (
              <p className="mt-2 p-3 bg-yellow-100 rounded-lg text-sm italic">
                💡 {quizQuestions[currentQ].hint}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
