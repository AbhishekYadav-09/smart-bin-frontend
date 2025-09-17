import 'leaflet/dist/leaflet.css';

import  { useEffect, useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import { getBins } from '../services/binService.js';

const binIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/5028/5028066.png",
  iconSize: [30, 30],
});

const MapSection = () => {
  const [bins, setBins] = useState([]);
  //  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchBins = async () => {
      const binsData = await getBins();
      console.log("Fetched bins:", binsData);
      setBins(binsData );
    };
    fetchBins();
  }, []);

  return (
    <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
      <h2 className="mb-4 text-lg font-semibold">🗺️ Smart Bin Map</h2>
      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={10}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {bins.map((bin) => {
          let color = bin.fillLevel === 0 ? "green" : bin.fillLevel < 100 ? "yellow" : "red";
          return (
            <CircleMarker
              key={bin._id}
              center={[bin.location.lat , bin.location.lng ]}
              radius={10}
              icon={binIcon}
              pathOptions={{ color: "#000", fillColor: color, fillOpacity: 1 }}
            >
              <Popup>
                Status: {bin.status} <br /> Fill Level: {bin.fillLevel}%
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapSection;


// import { useEffect, useState } from "react";
// import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const MapSection = () => {
//   const [bins, setBins] = useState([]);

//   // Dummy bins for testing
//   const dummyBins = [
//     {
//       _id: "bin101",
//       location: { lat: 28.46538306136369, lng: 77.51095163423173 },
//       fillLevel: 0,
//       status: "empty",
//     },
//     {
//       _id: "bin102",
//       location: { lat: 28.466, lng: 77.512 },
//       fillLevel: 50,
//       status: "partially full",
//     },
//     {
//       _id: "bin103",
//       location: { lat: 28.467, lng: 77.514 },
//       fillLevel: 100,
//       status: "full",
//     },
//   ];

//   useEffect(() => {
//     fetch("http://localhost:8080/api/v1/bin") // backend URL
//       .then((res) => res.json())
//       .then((data) => {
//         if (data && data.bins && data.bins.length > 0) {
//           setBins(data.bins);
//         } else {
//           setBins(dummyBins); // fallback
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         setBins(dummyBins); // fallback on error
//       });
//   }, []);

//   return (
//     <div className="bg-gray-800 text-white rounded-lg p-6 shadow-md flex flex-col items-center justify-center">
//       <h2 className="mb-4 text-lg font-semibold">🗺️ Smart Bin Map</h2>
//       <MapContainer
//         center={[28.46538306136369, 77.51095163423173]}
//         zoom={14}
//         style={{ height: "400px", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution="© OpenStreetMap"
//         />
//         {bins.map((bin) => {
//           let color =
//             bin.fillLevel === 0
//               ? "green"
//               : bin.fillLevel < 100
//               ? "yellow"
//               : "red";
//           return (
//             <CircleMarker
//               key={bin._id}
//               center={[bin.location.lat, bin.location.lng]}
//               radius={10}
//               pathOptions={{ color: "#000", fillColor: color, fillOpacity: 1 }}
//             >
//               <Popup>
//                 <b>ID:</b> {bin._id} <br />
//                 <b>Status:</b> {bin.status} <br />
//                 <b>Fill Level:</b> {bin.fillLevel}%
//               </Popup>
//             </CircleMarker>
//           );
//         })}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapSection;
