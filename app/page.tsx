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

          <div className="mt-44">
            <p className="mt-12 text-gray-600">
              This app is made by Krapansh Shrivastava, a full-stack developer.
              Currently I am working as a Full Stack Develope at IIT Indore,
              India.
            </p>

            <p className="mt-2 text-gray-600">
              Happy to complete the project. Thanks for using this app.
            </p>

            <p className="mt-2 text-gray-600">
              If you liked this app, please feel free to contact me at
              krapansh.work@gmail.com or +91 6281284310
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
