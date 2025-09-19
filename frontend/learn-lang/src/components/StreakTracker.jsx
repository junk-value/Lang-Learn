// src/components/StreakTracker.jsx
import { useState, useEffect } from "react";

export default function StreakTracker() {
  const [streak, setStreak] = useState(
    parseInt(localStorage.getItem("streak")) || 0
  );
  const [lastDate, setLastDate] = useState(localStorage.getItem("lastDate") || "");

  useEffect(() => {
    const today = new Date().toDateString();
    if (lastDate !== today) {
      if (new Date(lastDate).getDate() === new Date(today).getDate() - 1) {
        setStreak((prev) => prev + 1);
      } else {
        setStreak(1);
      }
      setLastDate(today);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastDate", lastDate);
  }, [streak, lastDate]);

  return (
    <div className="p-4 bg-green-100 rounded-xl shadow-md text-center mt-6">
      <h3 className="text-lg font-semibold">🔥 Daily Streak</h3>
      <p className="text-2xl font-bold text-orange-600">{streak} days</p>
    </div>
  );
}
