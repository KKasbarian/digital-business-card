import React from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <div className="toggle-switch-container">
        <ToggleSwitch />
      </div>
      <div className="card-container">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
