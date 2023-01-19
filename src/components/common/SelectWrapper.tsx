import React from "react";

import { Button, Card } from "antd"; 
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./SelectWrapper.scss";
interface propsType {
  dotColor: string;
  deviceTitle: string;
  devDesc?: string;
  devSubDesc?: string;
  BtnSelectDeviceOpacity: string;
}
function SelectWrapper({
  dotColor,
  deviceTitle,
  devDesc,
  BtnSelectDeviceOpacity,
  devSubDesc,
}: propsType) {
  const handleChange = (event: SelectChangeEvent) => {
    // setAge(event.target.value);
  };
  return (
    <Card className="conatinerCard" bordered={false} style={{ width: 300 }}>
      <div>
        <>
          <FormControl fullWidth>
            <InputLabel shrink={true} id="demo-simple-select-label">
              Select Device*
            </InputLabel>
            <Select
              notched={true}
              placeholder="Select Your Device"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Select Device*"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </>
      </div>
      <div>
        <div className="deatiles">
          <span
            style={{
              background: dotColor,
            }}
            className="ColorContainer"
          ></span>
          <span className="numberText">{deviceTitle}</span>
        </div>
        <p className="GuiSupport">{devDesc}</p>
        <p
          className="GuiSupport"
          style={{
            fontSize: "12px",
            opacity: "0.5",
          }}
        >
          {devSubDesc}
        </p>
      </div>
      <Button
        style={{
          opacity: BtnSelectDeviceOpacity,
        }}
        className="lightRed btn"
      >
        Select Device
      </Button>
    </Card>
  );
}

export default SelectWrapper;
