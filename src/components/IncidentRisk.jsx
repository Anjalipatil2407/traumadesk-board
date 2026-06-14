import incidents from "../data/incidents";

function IncidentRisk() {
  const sortedIncidents = [...incidents].sort(
    (a, b) => b.risk - a.risk
  );

  const getRiskColor = (risk) => {
    if (risk >= 90) return "#ef4444";
    if (risk >= 60) return "#f97316";
    return "#22c55e";
  };

  return (
    <div className="card">
      <h2>⚠️ Incident Risk Sorter</h2>

      <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
        Active emergencies ranked by risk level.
      </p>

      {sortedIncidents.map((incident) => (
        <div
          key={incident.id}
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        >
          <h3>{incident.incident}</h3>

          <p>
            <strong>Location:</strong>{" "}
            {incident.location}
          </p>

          <p>
            <strong>Risk Level:</strong>{" "}
            <span
              style={{
                color: getRiskColor(
                  incident.risk
                ),
                fontWeight: "bold",
              }}
            >
              {incident.risk}%
            </span>
          </p>

          <div
            style={{
              background: "#334155",
              height: "12px",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${incident.risk}%`,
                height: "100%",
                background:
                  getRiskColor(
                    incident.risk
                  ),
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IncidentRisk;