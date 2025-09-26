import { useEffect, useState } from "react";

export default function ReviewMistakes() {
  const [mistakes, setMistakes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mistakes")) || [];
    setMistakes(stored);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">❌ Review Mistakes</h2>
      {mistakes.length === 0 ? (
        <p>No mistakes recorded yet 🎉</p>
      ) : (
        <ul className="space-y-2">
          {mistakes.map((m, i) => (
            <li key={i} className="p-3 bg-red-100 rounded-lg dark:bg-red-800">
              <strong>{m.word}</strong> → Correct: {m.translation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
