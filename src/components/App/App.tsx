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
import DrawerSide from "../common/Drawer";
function App() {
  const [view, setView] = useState(1);
  return (
    <Routes>
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
