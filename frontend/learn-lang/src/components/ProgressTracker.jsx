import { useEffect, useState } from "react";

export default function ProgressTracker({ learnedCount }) {
  const [goal, setGoal] = useState(() => Number(localStorage.getItem("dailyGoal")) || 5);

  useEffect(() => {
    localStorage.setItem("dailyGoal", goal);
  }, [goal]);

  const progressPercent = Math.min((learnedCount / goal) * 100, 100);

  return (
    <div className="progress-container">
      <h3>Daily Goal: {goal} words</h3>
      <input
        type="number"
        min="1"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
      />
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <p>{learnedCount} / {goal} words learned today</p>
    </div>
  );
}
