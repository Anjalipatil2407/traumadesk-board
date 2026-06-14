import trafficData from "../data/trafficData";

function TrafficHub() {
  return (
    <div className="card">
      <h2>🚦 Traffic Light Status Hub</h2>

      <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
        Live Traffic Intersection Monitoring
      </p>

      <div className="traffic-grid">
        {trafficData.map((light) => (
          <div
            key={light.id}
            className="traffic-card"
          >
            <h3>{light.intersection}</h3>

            <p
              style={{
                fontSize: "18px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {light.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficHub;