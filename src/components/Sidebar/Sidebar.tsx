import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./SIdebar.scss";
import { paths } from "../../utils/constant";
function Sidebar() {
  const navigate = useNavigate();
  const SidebarData = [
    {
      icon: (
        <UpCircleOutlined
          onClick={() => {
            navigate(paths.Dashboard);
          }}
        />
      ),
      title: "Home",
    },
    {
      icon: (
        <SettingOutlined
          onClick={() => {
            navigate(paths.QuickOptimizationWidget);
            // navigate(paths.OptimizationWidget);
          }}
        />
      ),
      title: "Setting",
    },
    {
      icon: (
        <ProjectOutlined
          onClick={() => {
            navigate(paths.CircutBoard);
          }}
        />
      ),
      title: "Quick tuning",
    },
    {
      icon: <PullRequestOutlined onClick={() => {}} />,
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
