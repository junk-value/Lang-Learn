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
    <div className="quiz-mode">
      <h3>Random Quiz</h3>
      {!currentWord ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <>
          <p>Translate: <strong>{currentWord.word}</strong></p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <button onClick={checkAnswer}>Check</button>
        </>
      )}
      <p>{feedback}</p>
    </div>
  );
}
