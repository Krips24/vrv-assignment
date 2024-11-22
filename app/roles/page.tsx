"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import RoleTable from "../components/RoleTable";

export default function Roles() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Toggle button for small screens */}
      <button
        className="lg:hidden bg-gray-800 text-white px-4 py-2 mt-4 rounded mb-4"
        onClick={() => setSidebarOpen(true)}
      >
        ☰ Open Sidebar
      </button>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main
          className={`flex-grow p-6 transition-all ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <Header title="Role Management" />
          <RoleTable roles={roles} />
        </main>
      </div>
    </div>
  );
}
