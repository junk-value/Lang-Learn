import React from "react";
import Card from "./Card";

const activities = [
  { id: 1, title: "Completed Lesson 1", time: "2 hours ago" },
  { id: 2, title: "Earned Badge: First Lesson 🎉", time: "Yesterday" },
  { id: 3, title: "Studied Vocabulary Set A", time: "2 days ago" }
];

function RecentActivity() {
  return (
    <div>
      <h2>📌 Recent Activity</h2>
      {activities.map((item) => (
        <Card key={item.id} title={item.title} description={item.time} />
      ))}
    </div>
  );
}

export default RecentActivity;
