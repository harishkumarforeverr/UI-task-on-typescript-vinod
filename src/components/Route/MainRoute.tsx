import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "../Home/Home";
import Header from "../Header/Header";
import MPET from "../MPET/MPET";
import Nav from "../Nav/Nav";
import QuickTuning from "../QuickTuning/QuickTuning";
import Setting from "../Setting/Setting";
import { Box } from "@mui/material"; 
import HardwareSetup from "../HardwareSetup/HardwareSetup";
import Home from "../Home/Home";
// import Home from "../Home/Index";
const MainRoute = () => {
  return (
    <>
      <Header />
      <Nav />

      <Box padding={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<HardwareSetup boardType={"1"} />} />
          <Route path="/quick_tuning" element={<QuickTuning />} />
          <Route path="/mpet" element={<MPET />} />
        </Routes>
      </Box>
    </>
  );
};

export default MainRoute;
