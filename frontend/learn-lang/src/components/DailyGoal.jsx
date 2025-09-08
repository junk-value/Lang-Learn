// DailyGoal.jsx
import { useState, useEffect } from "react";

export default function DailyGoal() {
  const [goal, setGoal] = useState(() => Number(localStorage.getItem("dailyGoal")) || 5);

  useEffect(() => {
    localStorage.setItem("dailyGoal", goal);
  }, [goal]);

  return (
    <div className="daily-goal p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-bold">Daily Goal</h3>
      <input
        type="number"
        min="1"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
        className="border rounded px-2 py-1 mt-2"
      />
      <p className="mt-2">Current goal: {goal} words/day</p>
    </div>
  );
}
