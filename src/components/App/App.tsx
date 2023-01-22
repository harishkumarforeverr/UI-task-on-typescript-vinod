import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

// import Nav from "../Nav/Nav";
// import Sidebar from "../Sidebar/Sidebar";
// import Dashboard from "../Dashboard/Dashboard";
// import OptimizationWidget from "../Dashboard/OptimizationWidget/OptimizationWidget";
// import QuickOptimizationWidget from "../QuickOptimizationWidget/QuickOptimizationWidget";
import CircutBoard from "../CircutBoard/CircutBoard";
import { paths } from "../../utils/constant";
// import PublicRoute from "../../routes/PublicRoute";
import PrivateRoute from "../../routes/PrivateRoute";
import UserGuidesPage from "../Dashboard/UserGuides/UserGuidesPage";
import DashboardConatiner from "../Dashboard";
function App() {
  const [view, setView] = useState(1);
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //   }}
    // >
    //   <div className="head">
    //     {" "}
    //     <Nav />
    //   </div>
    //   <div
    //     style={{
    //       height: "100%",
    //     }}
    //     className="container"
    //   >
    //     <div className="sidebar">
    //       {" "}
    //       <Sidebar setView={setView} />
    //     </div>
    //     <div className="body_container">
    //       <div className="body">
    //         {view == 1 && <Dashboard setView={setView} />}
    //         {view == 2 && <OptimizationWidget />}
    //         {view == 3 && <QuickOptimizationWidget />}
    //         {view == 4 && <CircutBoard />}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Routes>
      {/* /// public and private route setup here and relavant paths has set here */}
      {/* <Route path={paths.login} element={<PublicRoute component={Dashboard} />} /> */}
      <Route
        path={paths.Dashboard}
        element={<PrivateRoute component={DashboardConatiner} />}
      />{" "}
      {/* <Route
        path={paths.OptimizationWidget}
        element={<PrivateRoute component={OptimizationWidget} />}
      />{" "} */}
      {/* <Route
        path={paths.QuickOptimizationWidget}
        element={<PrivateRoute component={QuickOptimizationWidget} />}
      /> */}
      {/* UserGuidesPage */}
      <Route
        path={paths.CircutBoard}
        element={<PrivateRoute component={CircutBoard} />}
      />
      <Route
        path={paths.UserGuidesPage}
        element={<PrivateRoute component={UserGuidesPage} />}
      />
    </Routes>
  );
}

export default App;
