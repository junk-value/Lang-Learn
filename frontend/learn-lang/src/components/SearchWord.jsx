import { useState } from "react";
import { wordsList } from "../utils/data";
import "./SearchWord.css";

export default function SearchWord({ selectedLanguage }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  // compute suggestions dynamically instead of useState
  const suggestions = query
    ? wordsList.filter(
        (w) =>
          w[selectedLanguage]
            ?.toLowerCase()
            .startsWith(query.toLowerCase()) ||
          w.en.toLowerCase().startsWith(query.toLowerCase())
      )
    : [];

  const handleSearch = () => {
    const found = wordsList.find(
      (w) =>
        w[selectedLanguage]?.toLowerCase() === query.toLowerCase() ||
        w.en.toLowerCase() === query.toLowerCase()
    );
    setResult(found || "Not found");
  };

  const handleClear = () => {
    setQuery("");
    setResult(null);
  };

  return (
    <div className="search-word">
      <input
        type="text"
        placeholder="Search a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>

      {result && (
        <p>
          {typeof result === "string"
            ? result
            : `${result[selectedLanguage]} — ${result.en}`}
        </p>
      )}

      {suggestions.length > 0 && (
        <ul>
          {suggestions.slice(0, 5).map((s, idx) => (
            <li key={idx}>
              {s[selectedLanguage]} — {s.en}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
