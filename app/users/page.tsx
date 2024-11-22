"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);

  interface User {
    id: number;
    name: string;
    role: string;
    status: string;
  }

  const [isModalOpen, setModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setModalOpen(false);
  };

  const handleSaveUser = () => {
    // Save user logic (e.g., update state)
    setModalOpen(false);
  };

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
        <div className="overflow-x-auto">
          <UserTable
            users={users}
            onEdit={handleEdit}
            onDelete={(id) => setUsers(users.filter((user) => user.id !== id))}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                className="border px-4 py-2 rounded w-full"
                defaultValue={selectedUser?.name}
              />
            </label>
            <label className="block mb-2">
              Role:
              <select
                className="border px-4 py-2 rounded w-full"
                defaultValue={selectedUser?.role}
              >
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </label>
            <label className="block mb-4">
              Status:
              <select
                className="border px-4 py-2 rounded w-full"
                defaultValue={selectedUser?.status}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSaveUser}
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
}
