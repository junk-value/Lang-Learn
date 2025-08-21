export default function WordCard({ word, selectedLanguage }) {
  if (!word) return null;

  return (
    <div className="word-card border rounded-xl p-4 shadow-md mt-4 bg-white">
      <h2 className="text-lg font-bold">
        {word[selectedLanguage] || "N/A"}
      </h2>
      <p className="text-gray-600">English: {word.en}</p>
    </div>
  );
}
