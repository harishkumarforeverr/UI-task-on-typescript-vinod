import React from "react";

import { Button, Card } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./SelectWrapper.scss";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import { Assests } from "../../../images/DashboardAssests";
interface propsType {
  dotColor: any;
  deviceTitle: string;
  devDesc?: string;
  devSubDesc?: string;
  BtnSelectDeviceOpacity: string;
  handleChange?: (event: SelectChangeEvent) => void;
  handleTheMotor?: () => void;
}
function SelectWrapper({
  dotColor,
  deviceTitle,
  devDesc,
  BtnSelectDeviceOpacity,
  devSubDesc,
  handleChange,
  handleTheMotor,
}: propsType) {
  return (
    <Card className="conatinerCard" bordered={false} style={{ width: 300 }}>
      <div>
        <>
          <FormControl fullWidth>
            <InputLabel shrink={true} id="selectlabelCommon">
              Select Device*
            </InputLabel>
            <Select
                      sx={{
                        color: "black",
                        '.MuiOutlinedInput-notchedOutline': {
                          borderColor: 'black',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'black',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'black',
                        },
                        '.MuiSvgIcon-root ': {
                          fill: "black !important",
                        }
                      }}
            
              // notched={true}
              labelId="selectlabelCommon"
              id="demo-simple-select"
              // value={age}
              label="Select Device*"
              onChange={handleChange}
              defaultValue="Select Your Device"
            >
            <MenuItem value={"Select Your Device"}>Select Your Device</MenuItem>
              <MenuItem value={10}>MCF83164EVM</MenuItem>
              <MenuItem value={20}>MCF8315EVM</MenuItem>
              <MenuItem value={30}>MCF8316EVM</MenuItem>
            </Select>
          </FormControl>
        </>
      </div>
      <div>
        <div className="deatiles">
          <span>
            <img
            style={{
              width:"1.8rem"
            }}
             src={dotColor} alt="redColorBubble" />
          </span>
          <span className="numberText">{deviceTitle}</span>
        </div>
        <p className="GuiSupport">{devDesc}</p>
        <p
          className="GuiSupport"
          style={{
            fontSize: "12px",
            opacity: "0.8",
          }}
        >
          {devSubDesc}
        </p>
      </div>
      <ButtonWrapper
        style={{
          opacity: BtnSelectDeviceOpacity,
        }}
        className="lightRed btn"
        onClick={handleTheMotor}
      >
        Select Device
      </ButtonWrapper>
    </Card>
  );
}

export default SelectWrapper;