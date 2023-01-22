import React, { useState } from "react";
import { DrawerProps, Input, RadioChangeEvent } from "antd";
import { Button, Drawer, Switch, Collapse, Slider } from "antd";
import "./Drawer.scss";
import type { SliderMarks } from "antd/es/slider";
import {
  LeftOutlined,
  RightOutlined,
  UpOutlined,
  DownOutlined,
} from "@ant-design/icons";
interface propsType {
  open: boolean;
  setOpen: (arg: boolean) => void;
}

const { Panel } = Collapse;

const marks: SliderMarks = {
  0: "0",
  25: "25",
  50: "50",
  100: "100",
  // 100: {
  //   style: {
  //     color: "#f50",
  //   },
  //   label: <strong>100°C</strong>,
  // },
};
const DrawerSide = ({ open, setOpen }: propsType) => {
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

  return (
    <>
      <Drawer
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{
          background: "#f2f8fb",
          position: "relative",
          width: "24rem",
          marginLeft: "auto",
        }}
      >
        <div>
          <div className="drawerContainer">
            <div className="Drawer_appConatiner_DashboardConatiner">
              {/* <DrawerSide open={open} setOpen={setOpen} /> */}
              <div className="appConatiner_drawer">
                <div
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="i2cControl"
                >
                  <RightOutlined className="rightIcon" />
                  <span className="i2cLabel">
                    <p>C2I</p>
                  </span>
                </div>
              </div>
            </div>
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel header="I2C CONTROLS" key="1">
                <div>
                  <div className="drawerContainer_label">
                    <p>Speed Control via I2C</p>
                    <div>
                      {" "}
                      <Switch size="small" defaultChecked />{" "}
                      <span className="Enabled">Enabled </span>
                    </div>
                  </div>
                  <div className="drawerContainer_address">
                    <div>
                      <p>I2C Target Address</p>
                      <Input placeholder="0x2" className="inputTag" />
                    </div>
                    <div>
                      <Button className="btn">Find Address</Button>
                    </div>
                  </div>
                  <div className="drawerContainer_precentage">
                    <p>I2C Speed Command Percentage</p>
                    <div>
                      <Slider marks={marks} step={null} defaultValue={37} />
                    </div>
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerSide;
