function Dashboard() {
  return (
    <>
      <div className="card">
        <h1>🚑 TraumaDesk Control Center</h1>
        <p>Emergency Dispatch Dashboard</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>🚨 Calls</h3>
          <h1>145</h1>
        </div>

        <div className="stat-card">
          <h3>🚑 Ambulances</h3>
          <h1>32</h1>
        </div>

        <div className="stat-card">
          <h3>🏥 Beds</h3>
          <h1>18</h1>
        </div>

        <div className="stat-card">
          <h3>⚠️ Incidents</h3>
          <h1>24</h1>
        </div>
      </div>
    </>
  );
}

export default Dashboard;