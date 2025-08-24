import { Clock } from "lucide-react";
import Card from "./Card";

const activities = [
  { id: 1, action: "Learned 10 new words", time: "2 hours ago" },
  { id: 2, action: "Completed Lesson 3 - Greetings", time: "5 hours ago" },
  { id: 3, action: "Reviewed 20 flashcards", time: "Yesterday" },
  { id: 4, action: "Earned 7-Day Streak Badge", time: "2 days ago" },
];

export default function RecentActivity() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 w-full">
      <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
      <ul className="space-y-3">
        
        {activities.map((activity) => (
          <Card>
            <Clock className="w-5 h-5 text-blue-500 mt-1" />
            <div>
              <p className="text-gray-800">{activity.action}</p>
              <p className="text-gray-500 text-sm">{activity.time}</p>
            </div>
          </Card>
        ))}
        
      </ul>
    </div>
  );
}
