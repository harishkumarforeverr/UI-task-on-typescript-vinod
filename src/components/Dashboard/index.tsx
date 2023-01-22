import React, { useState } from "react";
import QuickOptimizationWidget from "../QuickOptimizationWidget/QuickOptimizationWidget";
import Dashboard from "./Dashboard";
// import {
//   UpCircleOutlined,
//   SettingOutlined,
//   ProjectOutlined,
//   PullRequestOutlined,
// } from "@ant-design/icons";
import "./index.scss";
function DashboardConatiner() {
  const [view, setView] = useState("Dashboard");
  return (
    <div>
      {view == "Dashboard" && <Dashboard setView={setView} />}
      {view == "QuickOptimizationWidget" && <QuickOptimizationWidget setView={setView} />}
    </div>
  );
}

export default DashboardConatiner;
