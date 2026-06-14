import calls from "../data/calls";

function CallPriority() {
  const sortedCalls = [...calls].sort(
    (a, b) => b.severity - a.severity
  );

  const getPriorityColor = (severity) => {
    if (severity >= 9) return "#ef4444";
    if (severity >= 6) return "#f97316";
    return "#22c55e";
  };

  return (
    <div className="card">
      <h2>🚨 Emergency Call Priority Queue</h2>

      <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
        Calls are automatically sorted based on trauma severity.
      </p>

      {sortedCalls.map((call) => (
        <div
          key={call.id}
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            marginBottom: "15px",
            borderLeft: `6px solid ${getPriorityColor(
              call.severity
            )}`,
          }}
        >
          <h3>{call.patient}</h3>

          <p>
            <strong>Emergency:</strong> {call.trauma}
          </p>

          <p>
            <strong>Severity:</strong> {call.severity}/10
          </p>
        </div>
      ))}
    </div>
  );
}

export default CallPriority;