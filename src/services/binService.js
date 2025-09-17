
const API_URL_GET = "https://api-smart-bin.onrender.com/api/v1/bin";
const API_URL_POST = "https://api-smart-bin.onrender.com/register";

export const getBins = async () => {
  try {
    const res = await fetch(API_URL_GET);
    const data = await res.json();
    console.log("Backend response:", data);
    // return data.bins;
    return data;
  } catch (err) {
    console.error("Error fetching bins:", err);
    return [];
  }
};

export const addBin = async (binData) => {
  try {
    const res = await fetch(API_URL_POST, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(binData),
    });
    if (!res.ok) throw new Error("Failed to add bin");
    const data = await res.json();
    return data; 
  } catch (err) {
    console.error("Error adding bin:", err);
    return null;
  }
};