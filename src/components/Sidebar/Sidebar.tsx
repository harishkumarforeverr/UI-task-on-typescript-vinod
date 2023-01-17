import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./SIdebar.css";
function Sidebar({ setView }: any) {
  const SidebarData = [
    {
      icon: (
        <UpCircleOutlined
          onClick={() => {
            setView(1);
          }}
        />
      ),
      title: "Home",
    },
    {
      icon: (
        <SettingOutlined
          onClick={() => {
            setView(2);
          }}
        />
      ),
      title: "Setting",
    },
    {
      icon: <ProjectOutlined />,
      title: "Quick tuning",
    }, 
    {
      icon: <PullRequestOutlined />,
      title: "MPET",
    },
  ];
  return (
    <div className="sidebarsIconsTitle">
      {SidebarData.map((obj) => {
        return (
          <div>
            <div className="Sidebar_icons"> {obj.icon}</div>
            <div className="Sidebar_title"> {obj.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
