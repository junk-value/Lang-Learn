export default function UserProfile({ name, email, role }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
