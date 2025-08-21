import { useState } from "react";
import { wordsList } from "../utils/data";
import "./SearchWord.css";

export default function SearchWord({ selectedLanguage }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1); // for keyboard nav

  // suggestions filter
  const suggestions = query
    ? wordsList.filter(
        (w) =>
          w[selectedLanguage]
            ?.toLowerCase()
            .startsWith(query.toLowerCase()) ||
          w.en.toLowerCase().startsWith(query.toLowerCase())
      )
    : [];

  const handleSearch = (word = query) => {
    const found = wordsList.find(
      (w) =>
        w[selectedLanguage]?.toLowerCase() === word.toLowerCase() ||
        w.en.toLowerCase() === word.toLowerCase()
    );
    setResult(found || "Not found");
    setQuery(word);
    setActiveIndex(-1);
  };

  const handleClear = () => {
    setQuery("");
    setResult(null);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) =>
        prev <= 0 ? suggestions.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSearch(suggestions[activeIndex][selectedLanguage] || suggestions[activeIndex].en);
      } else {
        handleSearch();
      }
    }
  };

  return (
    <div className="search-word">
      <input
        type="text"
        placeholder="Search a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleSearch()}>Search</button>
      <button onClick={handleClear}>Clear</button>

      {result && (
        <p className="result">
          {typeof result === "string"
            ? result
            : `${result[selectedLanguage]} — ${result.en}`}
        </p>
      )}

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.slice(0, 5).map((s, idx) => (
            <li
              key={idx}
              className={idx === activeIndex ? "active" : ""}
              onClick={() => handleSearch(s[selectedLanguage] || s.en)}
            >
              {s[selectedLanguage]} — {s.en}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
