"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-grow p-6">
        {/* <Header title="Dashboard" /> */}

        {/* Toggle button for small screens */}
        <button
          className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4"
          onClick={() => setSidebarOpen(true)}
        >
          ☰ Open Sidebar
        </button>
        <section className="mt-6">
          <h2 className="text-2xl font-semibold">
            Welcome to the RBAC Dashboard
          </h2>
          <p className="mt-2 text-gray-600">
            Use the sidebar to navigate through users, roles, and permissions.
          </p>
        </section>
      </main>
    </div>
  );
}
