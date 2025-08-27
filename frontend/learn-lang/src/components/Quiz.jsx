import React, { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "What is the Spanish word for 'Apple'?",
      options: ["Manzana", "Pera", "Banana", "Naranja"],
      answer: "Manzana",
    },
    {
      question: "What is the French word for 'Book'?",
      options: ["Livre", "Stylo", "Chien", "Chat"],
      answer: "Livre",
    },
    {
      question: "What is the German word for 'Water'?",
      options: ["Milch", "Wasser", "Saft", "Tee"],
      answer: "Wasser",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQ].answer) {
      setScore(score + 1);
    }

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
      {!showResult ? (
        <>
          <h2 className="text-xl font-bold mb-4">
            {questions[currentQ].question}
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {questions[currentQ].options.map((option, idx) => (
              <button
                key={idx}
                className="p-3 border rounded-xl hover:bg-blue-100"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-gray-600">
            Question {currentQ + 1} of {questions.length}
          </p>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Quiz Completed!</h2>
          <p className="mt-4 text-lg">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            {questions.length}
          </p>
          <button
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => {
              setCurrentQ(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            Retry Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
