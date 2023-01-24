import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./Container.scss";
const Container = (props: any) => {
  return (
    <div
      style={{
        height: "100vh",
        // overflow: "hidden",
      }}
    >
      <div className="head">
        {" "}
        <Header />
      </div>
      <div
        style={{
          height: "100%",
        }}
        className="container"
      >
        <div className="sidebar">
          {" "}
          <Sidebar />
        </div>
        <div className="body_container">
          <div className="body_contain">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
