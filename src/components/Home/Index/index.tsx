// import { Dashboard } from "@mui/icons-material";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import QuickOptimizationWidget from "../QuickOptimizationWidget/QuickOptimizationWidget";
// import Dashboard from "./Dashboard";

import "./index.scss";
// import QuickOptimizationWidget from "./QuickOptimizationWidget/QuickOptimizationWidget";
function Home() {
  const [view, setView] = useState("Dashboard");
  const [open, setOpen] = useState(false);
  const location=useLocation(); 
  useEffect(()=>{ 
    if(location.state!==null){
      setView("QuickOptimizationWidget");
    }
  }, [location])
  return (
    <>
      {view == "Dashboard" && <Dashboard setView={setView} />}
      {view == "QuickOptimizationWidget" && (
        <QuickOptimizationWidget setView={setView} />
      )}
    </>
  );
}

export default Home;
