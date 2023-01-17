import React from "react";
import {
  UserOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
  ExperimentOutlined,
  TransactionOutlined,
} from "@ant-design/icons";
import "./OptimizationWidget.css";
import { Button, Card, Select } from "antd";
function OptimizationWidget() {
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
  return (
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
              placeholder="select"
              options={[
                {
                  value: "123",
                  label: "123",
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
              <span className="numberText">ICMF3RTUSJSKKS</span>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
              }}
            >
              The support of ICMF3RTUSJSKKS{" "}
            </p>
          </div>
          <Button className="lightRed btn">Select Motor</Button>
        </Card>
        <div>
          {/* <img className="videoIcon" style={{}} src={videoIcons} /> */}
        </div>
      </div>
      <div>
        <h2
          style={{
            color: "#165c65",
            marginLeft: "1rem",
          }}
        >
          Getting started
        </h2>
        <div className="Gettingstarted">
          {userInfoObj.map((obj) => {
            return (
              <Card
                className="boxshadow hardware"
                bordered={false}
                style={{ width: 300 }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img src={obj.image} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#165c65",
                      }}
                    >
                      {obj.title}
                    </h3>
                    <p>{obj.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div>
        <h2
          style={{
            color: "#165c65",
            marginLeft: "1rem",
          }}
        >
          Optimization Widget
        </h2>
        <div className="optizmationWidget">
          {InfoObj.map((obj) => {
            return (
              <Card
                className="boxshadow hardware"
                bordered={false}
                style={{ width: 300 }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img src={obj.image} />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#165c65",
                      }}
                    >
                      {obj.title}
                    </h3>
                    <p>{obj.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OptimizationWidget;
