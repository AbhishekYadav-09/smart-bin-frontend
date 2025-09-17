const SummaryCards = () => {
  const cards = [
    { title: "Total Dustbins", value: 12, color: "bg-blue-800",  icon: "/delete_icon.svg" },
    { title: "Empty Dustbins", value: 7, color: "bg-green-800",  icon: "/bucket_check_icon.svg" },
    { title: "Half-full Dustbins", value: 3, color: "bg-yellow-800",  icon: "/warning_icon.svg" },
    { title: "Full Dustbins", value: 2, color: "bg-red-800",  icon: "/delete_icon.svg" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-lg p-6 shadow-md flex items-center gap-4`}
        >
          <img src={card.icon} alt={card.title} className="w-12 h-12" />
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>  
      ))}
    </div>
  );
};

export default SummaryCards;