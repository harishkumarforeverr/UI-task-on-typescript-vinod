import React, { useState } from "react";
import DrawerSide from "../common/Drawer";
// import QuickOptimizationWidget from "../QuickOptimizationWidget/QuickOptimizationWidget";
import Dashboard from "./Dashboard";
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
import "./index.scss";
import QuickOptimizationWidget from "./QuickOptimizationWidget/QuickOptimizationWidget";
function DashboardConatiner() {
  const [view, setView] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="appConatiner_DashboardConatiner">
        <DrawerSide open={open} setOpen={setOpen} />
        <div className="appConatiner_drawer">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="i2cControl"
          >
            <RightOutlined className="rightIcon" />
            <span className="i2cLabel">
              <p>C2I</p>
            </span>
          </div>
          <div
            onClick={() => {
              setOpen(true);
            }}
            style={{
              marginTop: "1.6rem",
            }}
            className="i2cControlFalse"
          >
            <RightOutlined className="rightIcon" />
            <span className="i2cLabel">
              <p>Faults</p>
            </span>
          </div>
        </div>
      </div>
      {view == "Dashboard" && <Dashboard setView={setView} />}
      {view == "QuickOptimizationWidget" && (
        <QuickOptimizationWidget setView={setView} />
      )}
    </div>
  );
}

export default DashboardConatiner;
