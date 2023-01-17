import React from "react";
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
import { Button, Card, Select } from "antd";
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
  return (
    <div className="QuickOptimizationWidget">
      <div className="Conatiner2sIconsTitle">
        <div>
          <Card
            className="boxshadow conatiner2Card"
            bordered={false}
            style={{ width: 300 }}
          >
            <div>
              <h1
                style={{
                  fontSize: "1.4rem",
                }}
              >
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
                style={{
                  width: "100%",
                }}
                defaultValue="MCF8316EVM"
                placeholder="select"
                options={[
                  {
                    value: "MCF8316EVM",
                    label: "MCF8316EVM",
                  },
                  {
                    value: "l22eucy",
                    label: "l22eucy",
                  },
                  {
                    value: "ICMF3RTUSJSKKS",
                    label: "ICMF3RTUSJSKKS",
                  },
                ]}
              />
            </div>
            <div>
              <div className="deatiles">
                <span className="greenColor"></span>
                <span className="numberText">MCF8316EVM</span>
              </div>
              <p
                style={{
                  fontSize: "1.1rem",
                }}
              >
                The support of ICMF3RTUSJSKKS <br />
                <span
                  style={{
                    opacity: "0.7",
                  }}
                >
                  Correct device detected :ICMF3RTUSJSKKS{" "}
                </span>
              </p>
            </div>
            <Button
              style={{
                opacity: "0.8",
              }}
              className="lightRed btn"
            >
              Select Device
            </Button>
          </Card>
          <div className="cardsConatiner">
            {cardsObj.map((obj) => {
              return (
                <div className="cards">
                  <div>
                    <h1
                      style={{
                        color: "#1c99c4",
                      }}
                    >
                      {obj.title}
                      <br />
                      {obj.subTitle}
                    </h1>
                  </div>
                  <div>
                    {" "}
                    <p> {obj.desc} </p>
                    <p>{obj.subDesc}</p>
                  </div>
                  <img className="nextIcons" src={nextIcon} alt="ok" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickOptimizationWidget;
