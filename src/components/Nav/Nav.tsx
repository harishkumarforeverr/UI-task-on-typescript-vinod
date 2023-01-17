import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./Nav.css";
function Nav() {
  const HeaderData = [
    {
      title: "File",
    },
    {
      title: "Options",
    },
    {
      title: "Tools",
    },
    {
      title: "Help",
    },
  ];
  return (
    <div className="HeadersIconsTitle">
      {HeaderData.map((obj) => {
        return (
          <div>
            <div className="Header_title"> {obj.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Nav;
