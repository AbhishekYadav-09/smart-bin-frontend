
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
      <div className="flex items-center gap-2">
        <img src="/delete_icon.svg" alt="Logo" className="h-8 w-8" />
        <h1 className="text-xl font-bold">Smart Dustbin Dashboard</h1>
      </div>
      <div className="flex gap-4">
        <button className="hover:text-yellow-400">
          <img src="/notifications_icon.svg" alt="Notifications" className="h-6 w-6" />
        </button>
        <button className="hover:text-green-400">
          <img src="/settings_icon.svg" alt="Settings" className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar