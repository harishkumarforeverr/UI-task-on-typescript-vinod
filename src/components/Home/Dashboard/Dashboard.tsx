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
import { useNavigate } from "react-router-dom"; 
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Card } from "antd"; 
import { paths } from "../../../utils/constant";
import { Assests } from "../../../images/DashboardAssests";
import { usersLinks } from "../pdf";
import SelectWrapper from "../SelectWrapper/SelectWrapper";
function Dashboard({ setView }: { setView: any }) {
 
  const [motor, setMotor] = useState("");
  const navigate = useNavigate();
  const handleTheMotor = () => {
    console.log(motor);
    if (motor !== "") {
      setView("QuickOptimizationWidget");
    }
  };
  const GetImages = (props: any) => {
    return (
      <div className="GetImages">
        <img className="ellipse_image" src={Assests.Ellipse} />
        <div className="GetImages_child">{props.children}</div>
      </div>
    );
  };
  const userInfoObj = [
    {
      title: "Users's Guide",
      icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_1} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.userGuidesLink,
    },
    {
      title: "Product Page",  icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_2} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.ProductPageLink,
    },
    {
      title: "Data Sheet",  icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_3} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.DataSheetLink,
    },
    {
      title: "Tuning Page",  icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_4} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.TuningLink,
    },
    {
      title: "Tools Page",  icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_5} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.ToolsPageLink,
    },
    {
      title: "E2E testing",  icons: (
        <GetImages> 
          <img className="image_inner" src={Assests.cardImage_6} alt="image_inner" />{" "}
        </GetImages>
      ),
      link: usersLinks.E2ETestingLink,
    },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setMotor(event.target.value);
  };
  return (
    <div className="dashboard">
      <div className="ConatinersIconsTitle">
        <div>
          <SelectWrapper
            handleChange={handleChange}
            handleTheMotor={handleTheMotor}
            BtnSelectDeviceOpacity="1"
            dotColor={Assests.bubbleRed}
            deviceTitle="MCF8316EVM"
            devDesc="This GUI supports MCF8316EVM"
          />
        </div>
        <div className="cardsRigghtContainer">
          {userInfoObj.map((obj) => {
            return (
              <Card
              key={obj.title}
                className="conatinerCardImage"
                bordered={false}
                style={{ width: 300 }}
                onClick={() => {
                  // navigate(obj.link);
                  window.open(obj.link, "_blank");
                }}
              >
                <div className="rightConatinesIcons">{obj.icons}</div>
                <div className="titleRightConatiner">{obj.title}</div>
              </Card>
            );
          })}
        </div>
      </div>
      
      <div className="knowYourDevice">
        <div className="knowYourDevice_head">
          <h1>Know Your Device</h1>
        </div>
        <div className="knowYourDevice_context">
        <div className="imageKnowContainer">
        <img src={Assests.DashboardImageCircut} alt="Assests" />
        </div>  <div>
            <p>
              The MCF8316A is a 4.5-V to 35-V, 8-A peak integrated three-phase
              gate driver IC with sensorless field-oriented control for motor
              drive applications. It provides three accurately trimmed and
              temperature compensated halfbridge MOSFETS, gate drivers, charge
              pump, current sense amplifier, linear regulator for the external
              load and adjustable buck regulator. The I2C interface variant
              (MCF8316A) also provides a standard I2C interface for configuring
              the various device settings and reading fault diagnostic
              information through an external controller.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
