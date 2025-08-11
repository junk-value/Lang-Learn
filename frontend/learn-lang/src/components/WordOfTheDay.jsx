import { useEffect, useState } from "react";
import { wordsList } from "../utils/data";

export default function WordOfTheDay({ selectedLanguage }) {
  const [word, setWord] = useState(null);

  useEffect(() => {
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(randomWord);
  }, []);

  if (!selectedLanguage || !word) return null;

  return (
    <div className="word-of-day">
      <h3>Word of the Day</h3>
      <p>
        <b>{word[selectedLanguage]}</b> — {word.en}
      </p>
    </div>
  );
}
