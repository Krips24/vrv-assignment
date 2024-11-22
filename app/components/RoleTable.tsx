export default function RoleTable({ roles }: { roles: any }) {
  return (
    <table className="mt-4 w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border px-4 py-2">ID</th>
          <th className="border px-4 py-2">Role</th>
          <th className="border px-4 py-2">Permissions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role: any) => (
          <tr key={role.id}>
            <td className="border px-4 py-2">{role.id}</td>
            <td className="border px-4 py-2">{role.name}</td>
            <td className="border px-4 py-2">{role.permissions.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
