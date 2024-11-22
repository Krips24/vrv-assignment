import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`max-sm:fixed top-0 left-0 h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 w-64`}
    >
      {/* Sidebar Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <Link
          href="/"
          className="text-2xl font-semibold hover:text-green-400 transition-all"
        >
          RBAC Dashboard
        </Link>
        <button
          className="lg:hidden text-gray-400 hover:text-white transition-all"
          onClick={onClose}
        >
          ✖
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-6 space-y-4 px-4">
        <li>
          <Link href="/users">
            <button className="w-full text-left px-4 py-3 text-lg rounded-md hover:bg-gray-700 transition-all">
              Users
            </button>
          </Link>
        </li>
        <li>
          <Link href="/roles">
            <button className="w-full text-left px-4 py-3 text-lg rounded-md hover:bg-gray-700 transition-all">
              Roles
            </button>
          </Link>
        </li>
        <li>
          <Link href="/permissions">
            <button className="w-full text-left px-4 py-3 text-lg rounded-md hover:bg-gray-700 transition-all">
              Permissions
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
