const ListView = () => {
  const bins = [
    { id: 1, location: "38.7624, 55.538", fill: "23%", status: "Empty" },
    { id: 2, location: "31.545, 48.174", fill: "57%", status: "Half-full" },
    { id: 3, location: "92.623, 62.188", fill: "92%", status: "Full" },
  ];

  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">List View</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-2">Bin ID</th>
            <th className="p-2">Location</th>
            <th className="p-2">Fill %</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bins.map((bin) => (
            <tr key={bin.id} className="border-b border-gray-700">
              <td className="p-2">{bin.id}</td>
              <td className="p-2">{bin.location}</td>
              <td className="p-2">{bin.fill}</td>
              <td
                className={`p-2 font-bold ${
                  bin.status === "Full"
                    ? "text-red-500"
                    : bin.status === "Half-full"
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {bin.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListView