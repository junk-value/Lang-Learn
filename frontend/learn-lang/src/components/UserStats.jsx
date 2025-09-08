import React from "react";

export default function UserStats({ learnedWords, quizzesCompleted, streak }) {
  return (
    <div className="user-stats p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-bold mb-2">Your Stats</h3>
      <ul className="list-disc pl-5">
        <li>Words Learned: {learnedWords}</li>
        <li>Quizzes Completed: {quizzesCompleted}</li>
        <li>Current Streak: {streak} days</li>
      </ul>
    </div>
  );
}
