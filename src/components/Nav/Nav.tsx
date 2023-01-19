import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./Nav.scss";
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
            <div className="Header_title"> <span>{obj.title}</span></div>
          </div>
        );
      })}
    </div>
  );
}

export default Nav;
