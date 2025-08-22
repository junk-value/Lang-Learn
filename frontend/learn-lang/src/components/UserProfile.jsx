import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function UserProfile({ name, email, role }) {
  return (
    <Card className="max-w-sm mx-auto mt-6 shadow-lg rounded-2xl">
      <CardContent className="p-6 text-center">
        <User className="mx-auto h-12 w-12 text-gray-600 mb-4" />
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{email}</p>
        <span className="text-sm text-blue-500 font-medium mt-2 inline-block">
          {role}
        </span>
      </CardContent>
    </Card>
  );
}
