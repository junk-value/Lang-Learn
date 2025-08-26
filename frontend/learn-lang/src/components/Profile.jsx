import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Client"
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(form);
    setEditing(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {!editing ? (
        <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md">
          <p><span className="font-bold">Name:</span> {profile.name}</p>
          <p><span className="font-bold">Email:</span> {profile.email}</p>
          <p><span className="font-bold">Role:</span> {profile.role}</p>
          <button
            onClick={() => setEditing(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="bg-white shadow rounded-2xl p-6 w-full max-w-md">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border rounded-lg w-full p-2 mb-3"
          />

          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border rounded-lg w-full p-2 mb-3"
          />

          <label className="block mb-2">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border rounded-lg w-full p-2 mb-3"
          >
            <option>Client</option>
            <option>Police</option>
          </select>

          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
