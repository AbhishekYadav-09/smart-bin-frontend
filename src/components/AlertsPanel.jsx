const AlertsPanel = () => {
  const alerts = [
    { id: 1, message: "Bin #12 just got FULL", time: "10:23 AM", type: "urgent" },
    { id: 2, message: "Bin #5 half-full for 2 hours", time: "09:45 AM", type: "warning" },
  ];

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">⚠️ Alerts</h2>
      <ul className="space-y-2">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className={`p-3 rounded ${
              alert.type === "urgent"
                ? "bg-red-800"
                : "bg-yellow-800 text-black"
            }`}
          >
            <p className="font-semibold">{alert.message}</p>
            <span className="text-sm opacity-80">{alert.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsPanel;