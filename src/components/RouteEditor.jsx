import { useState } from "react";

function RouteEditor() {
  const [route, setRoute] = useState("Hospital → Patient");

  const [history, setHistory] = useState([]);

  const updateRoute = () => {
    setHistory([...history, route]);
    setRoute("Hospital → Highway → Patient");
  };

  const undo = () => {
    if (history.length > 0) {
      const previous = history[history.length - 1];
      setRoute(previous);

      setHistory(history.slice(0, -1));
    }
  };

  return (
    <div className="card">
      <h2>Route Editor</h2>

      <p>{route}</p>

      <button onClick={updateRoute}>
        Edit Route
      </button>

      <button onClick={undo}>
        Undo
      </button>
    </div>
  );
}

export default RouteEditor;