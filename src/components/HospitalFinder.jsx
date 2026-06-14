import hospitals from "../data/hospitals";

function HospitalFinder() {
  const nearestHospital = [...hospitals].sort(
    (a, b) => a.distance - b.distance
  )[0];

  return (
    <div className="card">
      <h2>🏥 Hospital Bed Finder</h2>

      <p style={{ marginBottom: "20px", color: "#cbd5e1" }}>
        Nearest available trauma center is automatically recommended.
      </p>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          marginBottom: "20px",
          border: "2px solid #22c55e",
        }}
      >
        <h3>⭐ Recommended Hospital</h3>

        <h2>{nearestHospital.name}</h2>

        <p>
          Available Beds:{" "}
          {nearestHospital.beds}
        </p>

        <p>
          Distance:{" "}
          {nearestHospital.distance} km
        </p>
      </div>

      <h3>All Available Hospitals</h3>

      {hospitals.map((hospital) => (
        <div
          key={hospital.id}
          style={{
            background: "#1e293b",
            padding: "15px",
            borderRadius: "12px",
            marginTop: "12px",
          }}
        >
          <h4>{hospital.name}</h4>

          <p>
            Beds Available: {hospital.beds}
          </p>

          <p>
            Distance: {hospital.distance} km
          </p>
        </div>
      ))}
    </div>
  );
}

export default HospitalFinder;