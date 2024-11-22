"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Krapansh Shrivastava", role: "Admin", status: "Active" },
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
  const [formData, setFormData] = useState<User | null>(null);
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false); // For adding a new user
  const [newUserData, setNewUserData] = useState<User>({
    id: users.length + 1, // Start with the next available ID
    name: "",
    role: "Admin",
    status: "Active",
  });

  // Handle Edit: Set user data in form when clicked
  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setFormData(user); // Initialize form with selected user data
    setModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedUser(null);
    setFormData(null); // Reset form data
    setModalOpen(false);
  };

  // Handle Save: Update the user list with edited details
  const handleSaveUser = () => {
    if (formData) {
      // Update the user in the list
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === formData.id ? { ...user, ...formData } : user
        )
      );
    }
    handleCloseModal(); // Close the modal after saving
  };

  // Handle form data change for editing user
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (formData) {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle new user data change
  const handleNewUserInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
  };

  // Add New User
  const handleAddUser = () => {
    setUsers([...users, newUserData]); // Add the new user to the list
    setNewUserData({
      id: users.length + 1,
      name: "",
      role: "Admin",
      status: "Active",
    }); // Reset form
    setAddUserModalOpen(false); // Close the modal
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
        <div className="flex justify-between items-center mb-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setAddUserModalOpen(true)} // Open Add User modal
          >
            Add New User
          </button>
        </div>
        <div className="overflow-x-auto">
          <UserTable
            users={users}
            onEdit={handleEdit}
            onDelete={(id) => setUsers(users.filter((user) => user.id !== id))}
          />
        </div>
        {/* Edit User Modal */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Edit User</h2>
          <form>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                className="border px-4 py-2 rounded w-full"
                value={formData?.name || ""}
                onChange={handleInputChange}
              />
            </label>
            <label className="block mb-2">
              Role:
              <select
                name="role"
                className="border px-4 py-2 rounded w-full"
                value={formData?.role || ""}
                onChange={handleInputChange}
              >
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </label>
            <label className="block mb-4">
              Status:
              <select
                name="status"
                className="border px-4 py-2 rounded w-full"
                value={formData?.status || ""}
                onChange={handleInputChange}
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
        {/* Add New User Modal */}
        <Modal
          isOpen={isAddUserModalOpen}
          onClose={() => setAddUserModalOpen(false)}
        >
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
          <form>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                name="name"
                className="border px-4 py-2 rounded w-full"
                value={newUserData.name}
                onChange={handleNewUserInputChange}
              />
            </label>
            <label className="block mb-2">
              Role:
              <select
                name="role"
                className="border px-4 py-2 rounded w-full"
                value={newUserData.role}
                onChange={handleNewUserInputChange}
              >
                <option>Admin</option>
                <option>Editor</option>
              </select>
            </label>
            <label className="block mb-4">
              Status:
              <select
                name="status"
                className="border px-4 py-2 rounded w-full"
                value={newUserData.status}
                onChange={handleNewUserInputChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setAddUserModalOpen(false)} // Close the modal
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleAddUser} // Save the new user
              >
                Add User
              </button>
            </div>
          </form>
        </Modal>
      </main>
    </div>
  );
}
