"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
// import Modal from "../components/Modal";
import RoleManagement from "../components/RoleManagement"; // Import RoleManagement component

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Krapansh Shrivastava", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-grow p-4 sm:p-6">
        <button
          className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4"
          onClick={() => setSidebarOpen(true)}
        >
          ☰ Open Sidebar
        </button>
        <Header title="User Management" />
        {/* User Table Section */}
        <div className="overflow-x-auto mb-8">
          <UserTable
            users={users}
            onEdit={(user) => console.log("Edit User:", user)}
            onDelete={(id) => setUsers(users.filter((user) => user.id !== id))}
          />
        </div>
        {/* Role Management Section */}
        <RoleManagement /> {/* Add Role Management section here */}
      </main>
    </div>
  );
}
