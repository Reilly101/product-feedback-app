import { useState } from "react";

export default function FilterByStatus({ selected, setSelected }) {
  let [statuses, setStatuses] = useState([
    "All",
    "UI",
    "UX",
    "Enhancement",
    "Bug",
    "Feature",
  ]);

  return (
    <div className="options">
      {statuses.map((status) => (
        <div
        key={status}
          className={`status-fb ${selected == status ? "active" : ""}`}
          onClick={() => setSelected(status)} 
        >
          {status}   
        </div>
      ))}
    </div>
  );
}
