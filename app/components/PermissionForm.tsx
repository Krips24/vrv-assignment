import { useState } from "react";

export default function PermissionForm({ permissions, onAdd }: any) {
  const [newPermission, setNewPermission] = useState("");

  const handleAdd = () => {
    if (newPermission.trim()) {
      onAdd(newPermission);
      setNewPermission("");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Available Permissions</h2>
      <ul className="mt-4 list-disc list-inside">
        {permissions.map((perm: string, index: number) => (
          <li key={index}>{perm}</li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          className="border px-4 py-2 rounded"
          placeholder="Add Permission"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
        />
        <button
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
}
