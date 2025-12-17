import React from "react";

function Detect({ users }) {
  if (users.length === 0) return null; // hide if no users

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Total Names Entered: {users.length}</h2>
      <ul>
        {users.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detect;
