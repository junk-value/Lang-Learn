// src/components/QuizMode.jsx
import { useState } from "react";

export default function QuizMode({ words }) {
  const [currentWord, setCurrentWord] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const startQuiz = () => {
    if (words.length === 0) {
      setFeedback("No words to quiz yet!");
      return;
    }
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setAnswer("");
    setFeedback("");
  };

  const checkAnswer = () => {
    if (!currentWord) return;
    if (answer.trim().toLowerCase() === currentWord.translation.toLowerCase()) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect! Correct answer: ${currentWord.translation}`);
    }
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto text-center">
      <h3 className="text-xl font-bold mb-4">🎯 Random Quiz</h3>
      {!currentWord ? (
        <button
          onClick={startQuiz}
          className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Start Quiz
        </button>
      ) : (
        <>
          <p className="mb-3 text-lg">
            Translate: <strong>{currentWord.word}</strong>
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-3"
          />
          <button
            onClick={checkAnswer}
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Check
          </button>
        </>
      )}
      <button
      onClick={startQuiz}
      className="mt-3 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
>
  Next Word
</button>
      <p
        className={`mt-4 font-medium ${
          feedback.includes("✅") ? "text-green-600" : "text-red-600"
        }`}
      >
        {feedback}
      </p>
    </div>
  );
}
