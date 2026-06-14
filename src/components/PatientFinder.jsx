import { useEffect, useState } from "react";
import { getPatients } from "../services/api";

function PatientFinder() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatients();
        setPatients(data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>🔍 Patient Record Finder</h2>

      <p
        style={{
          marginBottom: "15px",
          color: "#cbd5e1",
        }}
      >
        Search and verify patient medical records.
      </p>

      <input
        type="text"
        placeholder="Search patient by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p>Loading patients...</p>
      ) : (
        <div>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <div
                key={patient.id}
                style={{
                  background: "#1e293b",
                  padding: "15px",
                  borderRadius: "12px",
                  marginBottom: "12px",
                }}
              >
                <h3>
                  {patient.firstName} {patient.lastName}
                </h3>

                <p>
                  <strong>Age:</strong> {patient.age}
                </p>

                <p>
                  <strong>Gender:</strong>{" "}
                  {patient.gender}
                </p>

                <p>
                  <strong>Blood Group:</strong>{" "}
                  {patient.bloodGroup}
                </p>

                <p>
                  <strong>Phone:</strong>{" "}
                  {patient.phone}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {patient.email}
                </p>
              </div>
            ))
          ) : (
            <p>No patient found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default PatientFinder;