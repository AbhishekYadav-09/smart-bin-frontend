import { useState } from "react";
import { addBin } from "../services/binService";






const AddDustbinForm = ({ onBinAdded }) => {

  const [binId, setBinId] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [fillLevel, setFillLevel] = useState(0);
  const [status, setStatus] = useState("empty");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("Form submitted!");
    setLoading(true);

  const newBin = {
  binId,
  lat: parseFloat(lat),
  lng: parseFloat(lng),
  status
};

console.log("Sending new bin:", newBin);

const res = await addBin(newBin);
console.log("Backend response:", res);

if (res) {
  setMessage(res.message);
  onBinAdded(); 
} else {
  setMessage("Failed to add bin");
}

setLoading(false);
setBinId(""); 
setLat(""); 
setLng(""); 
setFillLevel(0); 
setStatus("empty");
setLoading(false);

  
  }
  return (
    <div className="bg-gray-900 text-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-bold mb-4">Add New Dustbin</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Latitude"
          className="p-2 rounded bg-gray-800 text-white"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Longitude"
          className="p-2 rounded bg-gray-800 text-white"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Bin Name / ID"
          className="p-2 rounded bg-gray-800 text-white"
         value={binId}
          onChange={(e) => setBinId(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          {loading ? "Adding..." : "Add Bin"}
        </button>
      </form>
    </div>
  );
};

export default AddDustbinForm;