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
import { paths } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
function Dashboard({ setView }: { setView: any }) {
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
    </div>
  );
}

export default Dashboard;
