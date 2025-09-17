import MapSection from "./components/MapSection.jsx";
import Navbar from "./components/navBar.components.jsx";
import SummaryCards from "./components/SummaryCards.jsx";
import ListView from "./components/ListViewTable.jsx";
import AlertsPanel from "./components/AlertsPanel.jsx";
import AddDustbinForm from "./components/AddDustbinForm.jsx";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <SummaryCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <MapSection />
        <ListView />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <AlertsPanel />
        <AddDustbinForm />
      </div>
    </div>
  );
}

export default App;
