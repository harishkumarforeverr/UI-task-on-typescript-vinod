import "./App.scss";
import { Routes, Route } from "react-router-dom";

import { paths } from "../../utils/constant";
import PrivateRoute from "../../routes/PrivateRoute";
import UserGuidesPage from "../Dashboard/UserGuides/UserGuidesPage";
import DashboardConatiner from "../Dashboard";
function App() {
  return (
    <Routes>
      <Route
        path={paths.Dashboard}
        element={<PrivateRoute component={DashboardConatiner} />}
      />{" "}
      <Route
        path={paths.UserGuidesPage}
        element={<PrivateRoute component={UserGuidesPage} />}
      />
    </Routes>
  );
}

export default App;
