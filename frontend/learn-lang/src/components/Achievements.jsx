import React from "react";
import "./Achievements.css";

const achievements = [
  { id: 1, title: "First Lesson", desc: "Completed your first lesson!", icon: "🎉" },
  { id: 2, title: "Streak Starter", desc: "Logged in 3 days in a row", icon: "🔥" },
  { id: 3, title: "Vocabulary Builder", desc: "Learned 50 new words", icon: "📚" },
  { id: 4, title: "Grammar Guru", desc: "Mastered 5 grammar lessons", icon: "✍️" }
];

function Achievements() {
  return (
    <div className="achievements">
      <h2>🏆 Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((badge) => (
          <div key={badge.id} className="badge-card">
            <span className="badge-icon">{badge.icon}</span>
            <h3>{badge.title}</h3>
            <p>{badge.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
