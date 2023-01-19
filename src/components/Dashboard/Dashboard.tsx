import React, { useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  ExperimentOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import "./Dashboard.scss";
import { Button, Card } from "antd";
import videoIcons from "../Assests/videoIcons.jpeg";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { paths } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { Assests } from "../Assests";
function Dashboard({ setView }: { setView: any }) {
  const [age, setAge] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value);
  };
  const [motor, setMotor] = useState("");
  const navigate = useNavigate();
  const handleTheMotor = () => {
    if (motor) {
      setView(2);
    }
  };
  const userInfoObj = [
    {
      title: "Users's Guide",
      icons: <UserOutlined />,
      link: paths.UserGuidesPage,
    },
    {
      title: "Product Page",
      icons: <ExperimentOutlined />,
      link: "/",
    },
    {
      title: "Data Sheet",
      icons: <ProjectOutlined />,
      link: "/",
    },
    {
      title: "Tuning Page",
      icons: <SettingOutlined />,
      link: "/",
    },
    {
      title: "Tools Page",
      icons: <PullRequestOutlined />,
      link: "/",
    },
    {
      title: "E2E testing",
      icons: <TransactionOutlined />,
      link: "/",
    },
  ];

  return (
    <div className="dashboard">
      <div className="ConatinersIconsTitle">
        <div>
          <Card
            className="  conatinerCard"
            bordered={false}
            style={{ width: 300 }}
          >
            <div>
              <>
                <FormControl fullWidth>
                  <InputLabel shrink={true} id="demo-simple-select-label">
                    Select Device*
                  </InputLabel>
                  <Select
                    notched={true}
                    placeholder="Select Your Device"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Select Device*"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </>
            </div>
            <div>
              <div className="deatiles">
                <span className="redColorContainer"></span>
                <span className="numberText">MCF8316EVM</span>
              </div>
              <p className="GuiSupport">This GUI supports MCF8316EVM</p>
            </div>
            <Button onClick={handleTheMotor} className="lightRed btn">
              Select Device
            </Button>
          </Card>
          {/* <div style={{}} className="videoIcon_container">
          <img className="videoIcon" src={videoIcons} />
        </div> */}
        </div>
        <div className="cardsRigghtContainer">
          {userInfoObj.map((obj) => {
            return (
              <Card
                className="conatinerCardImage"
                bordered={false}
                style={{ width: 300 }}
                onClick={() => {
                  navigate(obj.link);
                }}
              >
                <div className="rightConatinesIcons">{obj.icons}</div>
                <div className="titleRightConatiner">{obj.title}</div>
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <div className="knowYourDevice">
          <div className="knowYourDevice_head">
            <h1>Know Your Device</h1>
          </div>
          <div className="knowYourDevice_context">
            <img src={Assests.DashboardImageCircut} alt="Assests" />
            <div>
              <p>
                The MCF8316A is a 4.5-V to 35-V, 8-A peak integrated three-phase
                gate driver IC with sensorless field-oriented control for motor
                drive applications. It provides three accurately trimmed and
                temperature compensated halfbridge MOSFETS, gate drivers, charge
                pump, current sense amplifier, linear regulator for the external
                load and adjustable buck regulator. The I2C interface variant
                (MCF8316A) also provides a standard I2C interface for
                configuring the various device settings and reading fault
                diagnostic information through an external controller.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
