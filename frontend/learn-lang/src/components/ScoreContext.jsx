import React, { createContext, useState, useContext } from "react";

const ScoreContext = createContext();

export const useScore = () => useContext(ScoreContext);

export const ScoreProvider = ({ children }) => {
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const updateScore = (isCorrect) => {
    setTotalQuizzes((prev) => prev + 1);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  return (
    <ScoreContext.Provider value={{ totalQuizzes, correctAnswers, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
