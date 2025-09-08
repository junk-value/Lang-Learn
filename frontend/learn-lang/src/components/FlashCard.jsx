import { useState } from "react";
import { wordsList } from "../utils/data";

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const card = wordsList[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % wordsList.length);
  };

  return (
    <div className="flashcard p-4 bg-white shadow-md rounded-lg text-center">
      <h3 className="text-lg font-bold mb-2">Flashcard</h3>
      <p className="text-xl mb-2">{card.en}</p>
      <p className="text-gray-600 mb-2">{card.fr || card[selectedLanguage]}</p>
      <button onClick={nextCard} className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
        Next
      </button>
    </div>
  );
}
