import { wordsList } from "../utils/data";

export default function WordList({ selectedLanguage }) {
  return (
    <div className="word-list p-4">
      <h2 className="text-xl font-bold mb-2">Word List</h2>
      <ul className="space-y-1">
        {wordsList.map((w, idx) => (
          <li key={idx} className="p-2 border rounded">
            {w[selectedLanguage]} — {w.en}
          </li>
        ))}
      </ul>
    </div>
  );
}
