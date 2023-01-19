import React, { useState } from "react";
import "./App.scss";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashboard";
import OptimizationWidget from "../OptimizationWidget/OptimizationWidget";
import QuickOptimizationWidget from "../QuickOptimizationWidget/QuickOptimizationWidget";
import CircutBoard from "../CircutBoard/CircutBoard";
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
            {view == 3 && <QuickOptimizationWidget />}
            {view == 4 && <CircutBoard />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
