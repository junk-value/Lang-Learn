import { Card, CardContent } from "../components/Card";

export default function UserProfile({ name, email, role }) {
  return (
    <Card className="max-w-md mx-auto shadow-lg rounded-2xl p-4">
      <CardContent className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-full">
          <User className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{email}</p>
          <span className="inline-block mt-1 text-xs bg-gray-200 px-2 py-1 rounded">
            {role}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
