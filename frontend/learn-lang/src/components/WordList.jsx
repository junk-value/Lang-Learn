import { useState } from "react";
import { wordsList } from "../utils/data";

export default function WordList({ selectedLanguage }) {
  const [filter, setFilter] = useState("");

  const filteredWords = filter
    ? wordsList.filter((word) =>
        word[selectedLanguage].toLowerCase().startsWith(filter.toLowerCase())
      )
    : wordsList;

  return (
    <div className="word-list">
      <h2>Dictionary</h2>
      <input
        type="text"
        placeholder="Filter by first letter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredWords.map((word, index) => (
          <li key={index}>
            {word[selectedLanguage]} — {word.en}
          </li>
        ))}
      </ul>
    </div>
  );
}
