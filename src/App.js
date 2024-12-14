import React, { useState } from "react";
import Child from "./Child";
import "./style.css"; // Import the style.css file

function App() {
  const [parentData] = useState("Hello from Parent!");
  const [childData, setChildData] = useState("");

  // Function to receive data from the child
  const handleChildData = (data) => {
    setChildData(data);
  };

  return (
    <div className="parent-container">
      <h1>Parent Component</h1>
      <p>Data from Parent: <span className="highlight">{parentData}</span></p>
      <p>Data from Child: <span className="highlight">{childData}</span></p>

      {/* Pass data and function to the Child */}
      <Child parentData={parentData} onSendToParent={handleChildData} />
    </div>
  );
}

export default App;
