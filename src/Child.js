import React, { useState } from "react";

function Child({ parentData, onSendToParent }) {
  const [childInput, setChildInput] = useState("");

  // Function to send data to the parent
  const sendDataToParent = () => {
    onSendToParent(childInput);
    setChildInput(""); // Clear the input field after sending data
  };

  return (
    <div className="child-container">
      <h2>Child Component</h2>
      <p>Data from Parent: <span className="highlight">{parentData}</span></p>

      <input
        type="text"
        className="input-field"
        placeholder="Enter data to send to Parent"
        value={childInput}
        onChange={(e) => setChildInput(e.target.value)}
      />
      <button className="send-button" onClick={sendDataToParent}>
        Send to Parent
      </button>
    </div>
  );
}

export default Child;
