import { useState } from "react";

interface Role {
  id: number;
  name: string;
  permissions: string[];
}

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [newRoleName, setNewRoleName] = useState<string>("");
  const [newPermissions, setNewPermissions] = useState<string[]>([]);

  const handleEditRole = (role: Role) => {
    setSelectedRole(role);
    setNewRoleName(role.name);
    setNewPermissions(role.permissions);
  };

  const handleSaveRole = () => {
    if (selectedRole) {
      const updatedRoles = roles.map((role) =>
        role.id === selectedRole.id
          ? { ...role, name: newRoleName, permissions: newPermissions }
          : role
      );
      setRoles(updatedRoles);
    } else {
      // Create new role
      const newRole: Role = {
        id: roles.length + 1,
        name: newRoleName,
        permissions: newPermissions,
      };
      setRoles([...roles, newRole]);
    }
    clearForm();
  };

  const clearForm = () => {
    setSelectedRole(null);
    setNewRoleName("");
    setNewPermissions([]);
  };

  const handlePermissionToggle = (permission: string) => {
    setNewPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <div className="role-management">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Role Management</h2>
        <button
          onClick={clearForm}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Add New Role
        </button>
      </div>

      <div className="roles-list mt-6">
        <h3 className="font-semibold">Existing Roles</h3>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Role Name</th>
              <th className="px-4 py-2 border-b">Permissions</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="px-4 py-2 border-b">{role.name}</td>
                <td className="px-4 py-2 border-b">
                  {role.permissions.join(", ")}
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="role-form mt-8">
        {selectedRole ? (
          <h3 className="font-semibold">Edit Role: {selectedRole.name}</h3>
        ) : (
          <h3 className="font-semibold">Create New Role</h3>
        )}
        <form className="mt-4">
          <label className="block mb-2">Role Name:</label>
          <input
            type="text"
            className="border px-4 py-2 rounded w-full"
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
          />

          <div className="permissions mt-4">
            <h4 className="font-semibold">Permissions</h4>
            <div className="flex flex-wrap mt-2">
              {["Read", "Write", "Delete"].map((permission) => (
                <div key={permission} className="flex items-center mr-6">
                  <input
                    type="checkbox"
                    id={permission}
                    checked={newPermissions.includes(permission)}
                    onChange={() => handlePermissionToggle(permission)}
                    className="mr-2"
                  />
                  <label htmlFor={permission}>{permission}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSaveRole}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              {selectedRole ? "Save Changes" : "Create Role"}
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
