import React from "react";
import {
  UpCircleOutlined,
  SettingOutlined,
  ProjectOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import "./CircutBoard.scss";
import circutBoardImage from "../Assests/circutBoard.png";
function CircutBoard() {
  return (
    <div className="CircutBoard">
      <img src={circutBoardImage} />
    </div>
  );
}

export default CircutBoard;
