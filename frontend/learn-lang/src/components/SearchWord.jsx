import { useState } from "react";
import { wordsList } from "../utils/data";

export default function SearchWord({ selectedLanguage }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    const found = wordsList.find(
      (w) =>
        w[selectedLanguage]?.toLowerCase() === query.toLowerCase() ||
        w.en.toLowerCase() === query.toLowerCase()
    );
    setResult(found || "Not found");
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

      {result && (
        <p>
          {typeof result === "string"
            ? result
            : `${result[selectedLanguage]} — ${result.en}`}
        </p>
      )}
    </div>
  );
}
