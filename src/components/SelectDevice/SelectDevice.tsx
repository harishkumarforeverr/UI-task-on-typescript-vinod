import React from "react";
import "./SelectDevice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import selectDeviceImage from "../../images/Home/Buttons.svg";

import DeviceConstant from "../Home/constants/device_config_list.json";
interface propsType {
  DeviceConstant;
  dotColor: any;
  devDesc?: string;
  devSubDesc?: string;
  BtnSelectDeviceOpacity: string;
  handleChange: (event: string) => any;
  handleTheMotor?: () => void;
  className?: string;
  selectedDevice: string;
  setselectedDevice: (event: string) => any;
  deviceList: any[];
}
export function SelectWrapper({
  dotColor,
  devDesc,
  BtnSelectDeviceOpacity,
  devSubDesc,
  handleChange,
  handleTheMotor,
  selectedDevice,
  deviceList,
  setselectedDevice,
  className,
}: propsType) {
  return (
    <div className="conatinerCard" style={{ width: 300 }}>
      <div>
        <>
          <FormControl fullWidth>
            <InputLabel shrink={true} id="selectlabelCommon">
              Select Device*
            </InputLabel>
            <Select
              sx={{
                color: "black",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "black",
                },
                ".MuiSvgIcon-root ": {
                  fill: "black !important",
                },
              }}
              // notched={true}
              labelId="selectlabelCommon"
              id="demo-simple-select"
              // value={age}
              className="select_wrapper"
              label="Select Device*"
              onChange={(e: any) => {
                const { value } = e.target;
                setselectedDevice(value);
                handleChange(value);
              }}
              defaultValue="Select Your Device"
            >
              <MenuItem value={"Select Your Device"}>
                Select Your Device
              </MenuItem>

              {deviceList.map((device) => {
                return <MenuItem value={device}>{device}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </>
      </div>
      <div>
        <div className="deatiles">
          <span>
            <img
              style={{
                width: "1.8rem",
              }}
              className={className}
              src={dotColor}
              alt="redColorBubble"
            />
          </span>
          <span className="numberText">{selectedDevice}</span>
        </div>
        <p className="GuiSupport">{`${devDesc} ${selectedDevice}`}</p>
        {devSubDesc && (
          <p
            className="GuiSupport"
            style={{
              fontSize: "12px",
              opacity: "0.8",
            }}
          >
            {`${devSubDesc} ${selectedDevice}`}
          </p>
        )}
      </div>
      <div
        className="lightRed btn redbgm"
        style={{
          opacity: BtnSelectDeviceOpacity,
        }}
      >
        <img
          onClick={handleTheMotor}
          src={selectDeviceImage}
          alt="selectDeviceImage"
        />
      </div>
    </div>
  );
}
