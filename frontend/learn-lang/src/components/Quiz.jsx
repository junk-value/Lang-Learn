import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the French word for 'apple'?",
      options: ["Pomme", "Banane", "Orange", "Raisin"],
      answer: "Pomme",
    },
    {
      question: "What does 'Hola' mean in Spanish?",
      options: ["Goodbye", "Hello", "Thanks", "Please"],
      answer: "Hello",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50 p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed 🎉</h2>
            <p className="text-lg text-gray-600">
              You scored <span className="font-semibold text-indigo-600">{score}</span> out of{" "}
              {questions.length}
            </p>
            <button
              className="mt-6 px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-600 transition"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Question {currentQuestion + 1} of {questions.length}
            </h2>
            <p className="mb-6 text-lg text-gray-700">{questions[currentQuestion].question}</p>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full px-4 py-3 text-left bg-gray-100 hover:bg-indigo-100 text-gray-700 rounded-lg shadow-sm border border-gray-200 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
