import React, { useEffect, useState } from "react";
import { wordsList } from "../utils/data";

export default function WordOfTheDay({ selectedLanguage }) {
  const [word, setWord] = useState(null);

  const getRandomWord = () => {
    const random = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(random);
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  if (!selectedLanguage) {
    return <p>Please select a language.</p>;
  }

  if (!word) {
    return <p>Loading...</p>;
  }

  return (
    <div className="word-of-day">
      <h3>Word of the Day</h3>
      <p>
        <b>{word[selectedLanguage]}</b> — {word.en}
      </p>
      <button onClick={getRandomWord}>Refresh Word</button>
    </div>
  );
}
