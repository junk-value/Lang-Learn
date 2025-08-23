import Card from "./Card";
import { Book, Target, Flame } from "lucide-react";

const stats = [
  { id: 1, label: "Words Learned", value: 120, icon: <Book className="w-6 h-6 text-indigo-500" /> },
  { id: 2, label: "Lessons Completed", value: 5, icon: <Target className="w-6 h-6 text-green-500" /> },
  { id: 3, label: "Streak", value: "7 days", icon: <Flame className="w-6 h-6 text-orange-500" /> },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((stat) => (
        <Card 
          key={stat.id} 
          title={stat.label} 
          content={stat.value}
        >
          {stat.icon} 
        </Card>
      ))}
    </div>
  );
}
