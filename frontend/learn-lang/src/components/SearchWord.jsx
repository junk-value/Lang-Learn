import { useState } from "react";
import { wordsList } from "../utils/data";
import "./SearchWord.css";

export default function SearchWord({ selectedLanguage }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) {
      setResults(["Please enter a word to search"]);
      return;
    }

    const found = wordsList.filter(
      (w) =>
        w[selectedLanguage]?.toLowerCase().includes(query.toLowerCase()) ||
        w.en.toLowerCase().includes(query.toLowerCase())
    );

    setResults(found.length ? found : ["Not found"]);
  };

  return (
    <div className="search-word p-4">
      <input
        type="text"
        placeholder="Search a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-4">
        {results.map((res, idx) =>
          typeof res === "string" ? (
            <p key={idx} className="text-red-500">
              {res}
            </p>
          ) : (
            <p key={idx} className="text-green-700">
              {res[selectedLanguage]} — {res.en}
            </p>
          )
        )}
      </div>
    </div>
  );
}
