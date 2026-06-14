function Sidebar({ setActivePage }) {
  return (
    <div className="sidebar">
      <h2>🚑 TraumaDesk</h2>

      <button onClick={() => setActivePage("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setActivePage("call")}>
        Call Priority
      </button>

      <button onClick={() => setActivePage("patient")}>
        Patients
      </button>

      <button onClick={() => setActivePage("ambulance")}>
        Ambulance
      </button>

      <button onClick={() => setActivePage("risk")}>
        Incident Risk
      </button>

      <button onClick={() => setActivePage("traffic")}>
        Traffic Hub
      </button>

      <button onClick={() => setActivePage("planner")}>
        Route Planner
      </button>

      <button onClick={() => setActivePage("editor")}>
        Route Editor
      </button>

      <button onClick={() => setActivePage("hospital")}>
        Hospital Finder
      </button>
    </div>
  );
}

export default Sidebar;