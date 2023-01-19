import React, { useEffect, useState } from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  ExperimentOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import nextIcon from "../Assests/nextIcon.png";
import "./QuickOptimizationWidget.scss";
import { Button, Card, Checkbox, Select } from "antd";
import SelectWrapper from "../common/SelectWrapper";
import { Assests } from "../Assests";
import { CheckboxChangeEvent } from "antd/es/checkbox";
function QuickOptimizationWidget() {
  const userInfoObj = [
    {
      image: require("../Assests/capture1.PNG"),
      title: "Hardware Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture2.PNG"),
      title: "software Setup",
      desc: "Samart harware and perform ",
    },
  ];
  const InfoObj = [
    {
      image: require("../Assests/Capture3.PNG"),
      title: "Edge Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture4.PNG"),
      title: "Popup Setup",
      desc: "Samart harware and perform ",
    },
    {
      image: require("../Assests/Capture5.PNG"),
      title: "Iron Setup",
      desc: "configure harware and perform and GUI and comminucation checkup",
    },
    {
      image: require("../Assests/Capture6.PNG"),
      title: "Apple Setup",
      desc: "Samart harware and perform ",
    },
  ];
  const cardsObj = [
    {
      title: "Quick Spin",
      subTitle: "",
      desc: "Get your motor spining in",
      subDesc: "just few steps",
    },
    {
      title: "Optimization",
      subTitle: "Wizards",
      desc: "Go here after your motor",
      subDesc: "spin consistently",
    },
    {
      title: "Advanced",
      subTitle: "Tuning",
      desc: "Access all your control",
      subDesc: "in one single page",
    },
    {
      title: "Register Map",
      subTitle: "",
      desc: "Full interactive device",
      subDesc: "register map",
    },
  ];
  const [showCards, setShowCards] = useState(false);
  const [radioValue, setradioValue] = useState(false);
  useEffect(() => {
    if (!radioValue) {
      setShowCards(false);
    }
  }, [radioValue]);
  const handleSetup = () => {
    if (radioValue) {
      setShowCards(true);
    }
  };
  const onChange = (e: CheckboxChangeEvent) => {
    const value = e.target.checked;
    setradioValue(value);
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="QuickOptimizationWidget">
      <div className="Conatiner2sIconsTitle">
        <div>
          <div className="QuickOptimizationWidget_hardwareSetup">
            <div>
              <SelectWrapper
                BtnSelectDeviceOpacity="0.5"
                dotColor="#40C36C"
                deviceTitle="MCF8316EVM"
                devDesc="This GUI supports MCF8316EVM"
                devSubDesc="Correct device detected : MCF8316A"
              />
            </div>
            <div className="hardwareSetup">
              <div className="hardWareTitleAndImage">
                <h1>Hardware Setup</h1>

                <img src={Assests.DashboardImageCircut} alt="Assests" />
              </div>
              <div className="hardWareDescription">
                <h1>
                  Ensure the hardware is configured according to the below steps
                  :
                </h1>
                <div>
                  <ol>
                    <li>
                      J1 selected to POT, J3 selected to 5V_USB, and J5 selected
                      to 3V3COM
                    </li>
                    <li>Potentiometer R4 is rotated clockwise fully</li>
                    <li>
                      S1 pushed right to select BRAKE=RUN, S2 pushed left to
                      select DIR=ABC, and
                    </li>
                    <li> S3 pushed right to select DRVOFF=ON</li>
                  </ol>
                  <div>
                    <p>
                      Connect the motor to J8. Supply a voltage compliant with
                      the Power Supply Voltage (VM). Recommended voltage range
                      is 4.5V – 35V. Connect the positive terminal to VBAT (PIN3
                      of J7) and negative terminal to PGND (PIN2 of J7).Plug in
                      the micro-USB, from the computer that holds the GUI, to
                      the USB Connector J2.
                    </p>
                  </div>
                  <div className="actionBtn">
                    <Checkbox onChange={onChange} />
                    <p>Hardware setup has been done manually</p>
                    <Button onClick={handleSetup}>Setup Now</Button>
                  </div>
                </div>
              </div>
            </div>
            {/* <Card
              className="boxshadow conatinerCard"
              bordered={false}
              style={{ width: 300 }}
            >
              <div>
                <h1 className="selectedDevicesTitle">
                  select devices{" "}
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    *
                  </span>
                </h1>
                <Select
                  onChange={(e) => {
                    // setMotor(e);
                  }}
                  style={{
                    width: "100%",
                  }}
                  placeholder="select"
                  options={[
                    {
                      value: "LOU8316E",
                      label: "LOU8316",
                    },
                    {
                      value: "IUT8316EVM",
                      label: "IUT8316EVM",
                    },
                    {
                      value: "MCF8316EVM",
                      label: "MCF8316EVM",
                    },
                  ]}
                />
              </div>
              <div>
                <div className="deatiles">
                  <span
                    style={{ background: "#40C36C" }}
                    className="redColorContainer"
                  ></span>
                  <span className="numberText">MCF8316EVM</span>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  EVM Connected
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    opacity: "0.5",
                  }}
                >
                  Correct device detected : MCF8316A
                </p>
              </div>
              <Button
                style={{
                  opacity: "0.5",
                }}
                className="lightRed btn"
              >
                Select Device
              </Button>
            </Card> */}
            {/* <div style={{}} className="videoIcon_container">
          <img className="videoIcon" src={videoIcons} />
        </div> */}
          </div>

          {showCards && (
            <div className="cardsConatiner">
              {cardsObj.map((obj) => {
                return (
                  <div className="cards">
                    <div className="card_title">
                      <h1>
                        {obj.title}

                        {obj.subTitle}
                      </h1>
                    </div>
                    <div className="cardContainer">
                      {" "}
                      <div>
                        <p> {obj.desc} </p>
                        <p>{obj.subDesc}</p>
                      </div>
                    </div>
                    <img className="nextIcons" src={nextIcon} alt="ok" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuickOptimizationWidget;
