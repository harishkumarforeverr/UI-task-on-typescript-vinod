import { useState, useEffect } from "react";
import deviceConfig from "./constants/device_config_list.json";
import { Dashboard } from "../Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { QuickOptimizationWidget } from "../QuickOptimizationWidget/QuickOptimizationWidget";
import { getDeviceList, deviceLists } from "./home.slice";
const { ipcRenderer } = window.require("electron");

const Home = () => {
  const [view, setView] = useState("QuickOptimizationWidget");
  const [selectedDevice, setselectedDevice] = useState("");
  const dispatch = useDispatch();
  const data: any = useSelector(deviceLists);
  console.log(data);
  useEffect(() => {
    setView("Dashboard");
    let devices = ipcRenderer.sendSync("get_deviceList");
    dispatch(getDeviceList(devices));
  }, []);

  return (
    <>
      {view === "Dashboard" ? (
        <Dashboard
          selectedDevice={selectedDevice}
          setselectedDevice={setselectedDevice}
          setView={setView}
        />
      ) : (
        <QuickOptimizationWidget
          selectedDevice={selectedDevice}
          setselectedDevice={setselectedDevice}
          setView={setView}
        />
      )}
    </>
  );
};

export default Home;
