import React from "react";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
      {/* Left side: Logo + Title */}
      <div className="flex items-center gap-2">
        {/* Logo SVG (public folder se load hoga) */}
        <img src="/delete_icon.svg" alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Smart Dustbin Dashboard</h1>
      </div>

      {/* Right side icons (Notification + Settings) */}
      <div className="flex gap-4">
        {/* Notification Bell */}
        <button className="hover:text-yellow-400">
          <img src="/notifications_icon.svg" alt="Notifications" className="h-6 w-6" />
        </button>

        {/* Settings */}
        <button className="hover:text-green-400">
          <img src="/settings_icon.svg" alt="Settings" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar