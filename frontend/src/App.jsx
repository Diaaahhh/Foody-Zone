import React from "react";
import "./App.css"; // Assuming you have a corresponding CSS file
import Body from "../src/Components/Body/Body.jsx";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
