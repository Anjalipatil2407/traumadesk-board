import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import AmbulanceSupplyList from "./components/AmbulanceSupplyList";
import CallPriority from "./components/CallPriority";
import PatientFinder from "./components/PatientFinder";
import IncidentRisk from "./components/IncidentRisk";
import TrafficHub from "./components/TrafficHub";
import RoutePlanner from "./components/RoutePlanner";
import RouteEditor from "./components/RouteEditor";
import HospitalFinder from "./components/HospitalFinder";

function App() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "call":
        return <CallPriority />;
      case "patient":
        return <PatientFinder />;
      case "ambulance":
        return <AmbulanceSupplyList />;
      case "risk":
        return <IncidentRisk />;
      case "traffic":
        return <TrafficHub />;
      case "planner":
        return <RoutePlanner />;
      case "editor":
        return <RouteEditor />;
      case "hospital":
        return <HospitalFinder />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Sidebar setActivePage={setActivePage} />
      <div className="main">{renderPage()}</div>
    </div>
  );
}

export default App;