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
import { Button, Card, Select } from "antd";
import videoIcons from "../Assests/videoIcons.jpeg";
function Dashboard({ setView }: { setView: any }) {
  const [motor, setMotor] = useState("");
  const handleTheMotor = () => {
    if (motor) {
      setView(2);
    }
  };
  const userInfoObj = [
    {
      title: "Users's Guide",
      icons: <UserOutlined />,
    },
    {
      title: "Product Page",
      icons: <ExperimentOutlined />,
    },
    {
      title: "Data Sheet",
      icons: <ProjectOutlined />,
    },
    {
      title: "Tuning Page",
      icons: <SettingOutlined />,
    },
    {
      title: "Tools Page",
      icons: <PullRequestOutlined />,
    },
    {
      title: "E2E testing",
      icons: <TransactionOutlined />,
    },
  ];
  return (
    <div className="dashboard">
<div className="ConatinersIconsTitle">
      <div>
        <Card
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
                setMotor(e);
              }}
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
                  value: "MCF8316EVM",
                  label: "MCF8316EVM",
                },
              ]}
            />
          </div>
          <div>
            <div className="deatiles">
              <span className="redColorContainer"></span>
              <span className="numberText">MCF8316EVM</span>
            </div>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              This GUI supports MCF8316EVM
            </p>
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
              className="  conatinerCardImage"
              bordered={false}
              style={{ width: 300 }}
            >
              <div className="rightConatinesIcons">{obj.icons}</div>
              <div className="titleRightConatiner">{obj.title}</div>
            </Card>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
