// src/components/Favorites.jsx
import { useState } from "react";

export default function Favorites({ learnedWords }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (word) => {
    setFavorites((prev) =>
      prev.includes(word) ? prev.filter((w) => w !== word) : [...prev, word]
    );
  };

  return (
    <div className="p-6 bg-white rounded-2xl shadow-md mt-6">
      <h3 className="text-lg font-bold mb-3">⭐ Favorite Words</h3>
      {learnedWords.length === 0 ? (
        <p>No learned words yet.</p>
      ) : (
        <ul className="space-y-2">
          {learnedWords.map((w, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center border-b pb-1"
            >
              <span>{w.word} — {w.translation}</span>
              <button
                onClick={() => toggleFavorite(w.word)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  favorites.includes(w.word)
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {favorites.includes(w.word) ? "★" : "☆"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
