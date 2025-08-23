import { Card, CardContent } from "./components/Card";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";

const notifications = [
  { id: 1, text: "🎉 You completed Lesson 3: Basic Greetings!" },
  { id: 2, text: "📘 New vocabulary list: Food & Drinks available." },
  { id: 3, text: "🔥 Keep it up! You're on a 7-day streak!" },
];

export default function Notifications() {
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <Bell className="w-5 h-5 text-blue-500" /> Notifications
      </h2>
      {notifications.map((note) => (
        <Card key={note.id} className="rounded-2xl shadow-md">
          <CardContent className="p-3">{note.text}</CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
