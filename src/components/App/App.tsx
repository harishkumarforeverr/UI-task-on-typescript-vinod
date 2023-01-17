import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Button } from "antd";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import OptimizationWidget from "../OptimizationWidget/OptimizationWidget";
// import Sidebar from "./Components/Sidebar";
// import Header from "./Components/Header";
// import HomePage from "./Components/HomePage";
// import OptimizationWidget from "./Components/OptimizationWidget/OptimizationWidget";

function App() {
  const [view, setView] = useState(1);
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="head">
        {" "}
        <Nav />
      </div>
      <div
        style={{
          height: "100%",
        }}
        className="container"
      >
        <div className="sidebar">
          {" "}
          <Sidebar setView={setView} />
        </div>
        <div className="body_container">
          <div className="body">
            {view == 1 && <Dashboard setView={setView} />}
            {view == 2 && <OptimizationWidget />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
