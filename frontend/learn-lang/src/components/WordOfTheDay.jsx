// src/components/WordOfTheDay.jsx
import { useMemo } from "react";
import { wordsList } from "../utils/data";

export default function WordOfTheDay({ selectedLanguage }) {
  const word = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
  }, []);

  return (
    <div className="word-of-day p-4 bg-blue-100 rounded shadow">
      <h2 className="text-lg font-bold mb-2">Word of the Day</h2>
      <p className="text-lg">
        {word[selectedLanguage]} — {word.en}
      </p>
    </div>
  );
}
