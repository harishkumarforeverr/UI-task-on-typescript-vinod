import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./SIdebar.scss";
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
      icon: (
        <ProjectOutlined
          onClick={() => {
            setView(3);
          }}
        />
      ),
      title: "Quick tuning",
    },
    {
      icon: (
        <PullRequestOutlined
          onClick={() => {
            setView(4);
          }}
        />
      ),
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
