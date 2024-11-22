"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PermissionForm from "../components/PermissionForm";

export default function Permissions() {
  const [permissions, setPermissions] = useState([
    "Read",
    "Write",
    "Delete",
    "Execute",
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const addPermission = (newPermission: string) => {
    setPermissions([...permissions, newPermission]);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-grow p-4 sm:p-6">
        {/* Toggle button for small screens */}
        <button
          className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4"
          onClick={() => setSidebarOpen(true)}
        >
          ☰ Open Sidebar
        </button>
        <Header title="Permission Management" />
        <PermissionForm permissions={permissions} onAdd={addPermission} />
      </main>
    </div>
  );
}
