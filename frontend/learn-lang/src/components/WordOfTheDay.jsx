import React, { useState, useEffect } from "react";

export default function WordOfTheDay() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    // Hardcoded word for now — later can be fetched from an API
    const todaysWord = {
      word: "Serendipity",
      definition:
        "The occurrence of events by chance in a happy or beneficial way."
    };

    setWord(todaysWord.word);
    setDefinition(todaysWord.definition);
  }, []);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ccc", margin: "1rem" }}>
      <h2>Word of the Day</h2>
      {word ? (
        <>
          <h3>{word}</h3>
          <p>{definition}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
