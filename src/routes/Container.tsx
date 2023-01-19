import React from "react"; 
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/Sidebar/Sidebar";

const Container = (props: any) => { 
  return (
     <div
      style={{
        height: "100vh",
      }}
    >
      <div className="head">
        {" "}
        <Nav/>
      </div>
      <div
        style={{
          height: "100%",
        }}
        className="container"
      >
        <div className="sidebar">
          {" "}
          <Sidebar   />
        </div>
        <div className="body_container">
          <div className="body">
             {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
