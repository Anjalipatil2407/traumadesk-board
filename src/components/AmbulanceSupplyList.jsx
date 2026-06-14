import { useEffect, useState } from "react";

function AmbulanceSupplyList() {
  const [ambulances, setAmbulances] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setAmbulances(data.users.slice(0, 10)));
  }, []);

  return (
    <div className="card">
      <h2>🚑 Ambulance Supply Registry</h2>

      <table>
        <thead>
          <tr>
            <th>Crew</th>
            <th>Ambulance</th>
            <th>Oxygen</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {ambulances.map((a) => (
            <tr key={a.id}>
              <td>{a.firstName}</td>
              <td>A-{a.id}</td>
              <td>Available</td>
              <td>Ready</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AmbulanceSupplyList;