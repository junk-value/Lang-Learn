import { useState } from "react";
import Quiz from "./Quiz";

export default function QuizMode({ words }) {
  const [mode, setMode] = useState(null); // "random" or "mcq"
  const [currentWord, setCurrentWord] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const startRandomQuiz = () => {
    if (words.length === 0) {
      setFeedback("No words to quiz yet!");
      return;
    }
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setAnswer("");
    setFeedback("");
    setMode("random");
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
    <div className="quiz-mode">
      <h3 className="text-xl font-bold mb-4">Quiz Mode</h3>

      {!mode && (
        <div className="flex gap-4">
          <button
            onClick={startRandomQuiz}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Start Random Quiz
          </button>
          <button
            onClick={() => setMode("mcq")}
            className="px-4 py-2 bg-green-600 text-white rounded-md"
          >
            Start Multiple Choice Quiz
          </button>
        </div>
      )}

      {mode === "random" && (
        <div className="mt-4">
          <p>
            Translate: <strong>{currentWord.word}</strong>
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border rounded p-2 mt-2"
          />
          <button
            onClick={checkAnswer}
            className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md"
          >
            Check
          </button>
          <p className="mt-2">{feedback}</p>
          <button
            onClick={() => setMode(null)}
            className="mt-4 text-sm text-gray-600 underline"
          >
            Back to Quiz Menu
          </button>
        </div>
      )}

      {mode === "mcq" && (
        <div className="mt-4">
          <Quiz />
          <button
            onClick={() => setMode(null)}
            className="mt-4 text-sm text-gray-600 underline"
          >
            Back to Quiz Menu
          </button>
        </div>
      )}
    </div>
  );
}
