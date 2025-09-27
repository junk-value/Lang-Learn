import { useState } from "react";

export default function QuizMode({ words }) {
  const [currentWord, setCurrentWord] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);


  useEffect(() => {
  const handleKey = (e) => {
    if (e.key === "Enter") checkAnswer();
    if (e.key.toLowerCase() === "n") startQuiz();
  };
  window.addEventListener("keydown", handleKey);
  return () => window.removeEventListener("keydown", handleKey);
}, [answer, currentWord]);

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("quizProgress"));
  if (stored) {
    setCurrentWord(stored.currentWord);
    setFeedback(stored.feedback);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    "quizProgress",
    JSON.stringify({ currentWord, feedback })
  );
}, [currentWord, feedback]);


  const startQuiz = () => {
    if (words.length === 0) {
      setFeedback("No words to quiz yet!");
      return;
    }
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setAnswer("");
    setFeedback("");
    setScore(0);
    setQuestionCount(1);
  };

  const checkAnswer = () => {
    if (!currentWord) return;
    if (answer.trim().toLowerCase() === currentWord.translation.toLowerCase()) {
      setFeedback("✅ Correct!");
      setScore((prev) => prev + 1);
    } else {
      setFeedback(`❌ Incorrect! Correct answer: ${currentWord.translation}`);
    }
  };

  const nextQuestion = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setAnswer("");
    setFeedback("");
    setQuestionCount((prev) => prev + 1);
  };

  return (
    <div className="quiz-mode p-4 border rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-2">Random Quiz</h3>

      {!currentWord ? (
        <button
          onClick={startQuiz}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Start Quiz
        </button>
      ) : (
        <>
          <p className="mb-2">
            Question {questionCount}: Translate{" "}
            <strong>{currentWord.word}</strong>
          </p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="border px-2 py-1 rounded-md mr-2"
          />
          <button
            onClick={checkAnswer}
            className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mr-2"
          >
            Check
          </button>
          {feedback && (
            <button
              onClick={nextQuestion}
              className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Next
            </button>
          )}
        </>
      )}

      <p className="mt-3 font-medium">{feedback}</p>
      <p className="mt-1 text-sm text-gray-600">Score: {score}</p>
    </div>
  );
}
