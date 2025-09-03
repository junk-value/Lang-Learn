// Results.js
import React from "react";

export default function Results({ score, total, onRetry }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      <p className="text-lg mb-4">
        You scored <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{total}</span>
      </p>
      <button
        onClick={onRetry}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Retry Quiz
      </button>
    </div>
  );
}
