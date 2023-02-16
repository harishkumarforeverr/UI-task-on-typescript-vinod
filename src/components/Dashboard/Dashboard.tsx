import { useState} from "react";
import "../Home/Home.css"
import "./Dashboard.css"
import DashboardImageCircut from "../../images/Home/DashboardImageCircut.svg";
import Ellipse from "../../images/Home/Ellipse.svg";
import cardImage_1 from "../../images/Home/cardImage_1.svg";
import cardImage_2 from "../../images/Home/cardImage_2.svg";
import cardImage_3 from "../../images/Home/cardImage_3.svg";
import cardImage_4 from "../../images/Home/cardImage_4.svg";
import cardImage_6 from "../../images/Home/cardImage_6.svg";
import cardImage_5 from "../../images/Home/cardImage_5.svg";
import bubbleRed from "../../images/Home/bubbleRed.svg";
import bubbleGreen from "../../images/Home/bubbleGreen.svg";
import { SelectWrapper } from "../SelectDevice/SelectDevice";
import {
    userGuidesLink,
    TuningLink,
    DataSheetLink,
    ProductPageLink,
    ToolsPageLink,
    E2ETestingLink,
  } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { deviceLists, selected_DeviceData } from "../Home/home.slice";
import { Box } from "@mui/system";
import { FormControl, Grid, InputLabel, ListItem, MenuItem, Select, Typography } from "@mui/material";

const {ipcRenderer} = window.require('electron')


export const Dashboard= ({
    setView,
    selectedDevice,
    setselectedDevice,
  }: {
    setView: any;
    selectedDevice: any;
    setselectedDevice: any;
  })=> {
    const [motor, setMotor] = useState("");
    const deviceList=useSelector(deviceLists)

const dispatch=useDispatch()
    const Assests = {
        DashboardImageCircut,
        Ellipse,
        cardImage_1,
        bubbleRed,
        bubbleGreen,
        cardImage_2,
        cardImage_3,
        cardImage_4,
        cardImage_5,
        cardImage_6,
      };
      const getDashboardLinks = (arg: string) => {
        switch (arg) {
          case "MCF8316EVM":
            return {
              userGuidesLink,
              ProductPageLink,
              DataSheetLink,
              TuningLink,
              ToolsPageLink,
              E2ETestingLink,
            };
          default:
            return {};
        }
      };
      const usersLinks:
  | {
      userGuidesLink: string;
      ProductPageLink: string;
      DataSheetLink: string;
      TuningLink: string;
      ToolsPageLink: string;
      E2ETestingLink: string;
    }
  | {
      userGuidesLink?: undefined;
      ProductPageLink?: undefined;
      DataSheetLink?: undefined;
      TuningLink?: undefined;
      ToolsPageLink?: undefined;
      E2ETestingLink?: undefined;
    } = getDashboardLinks("MCF8316EVM");
    const handleTheMotor = () => {
      if (motor !== "") {
        setView("QuickOptimizationWidget");
      }
    };
    const GetImages = (props: any) => {
      return (
        <div className="GetImages">
          <img
            className="ellipse_image"
            src={Assests.Ellipse}
            alt="ellipse_images"
          />
          <div className="GetImages_child">{props.children}</div>
        </div>
      );
    };
    const getTheUserInfoJsx = (
      title: string,
      srcIconUrl: string,
      link: string | undefined
    ) => {
      return {
        title,
        icons: (
          <GetImages>
            <img className="image_inner" src={srcIconUrl} alt="image_inner" />{" "}
          </GetImages>
        ),
        link,
      };
    };
    const userInfoObj: {
      title: string;
      icons: JSX.Element;
      link: string | undefined;
    }[] = [
      getTheUserInfoJsx(
        "Users's Guide",
        Assests.cardImage_1,
        usersLinks.userGuidesLink
      ),
      getTheUserInfoJsx(
        "Product Page",
        Assests.cardImage_2,
        usersLinks.ProductPageLink
      ),
  
      getTheUserInfoJsx(
        "Data Sheet",
        Assests.cardImage_3,
        usersLinks.DataSheetLink
      ),
  
      getTheUserInfoJsx(
        "Tuning Page",
        Assests.cardImage_4,
        usersLinks.TuningLink
      ),
      getTheUserInfoJsx(
        "Tools Page",
        Assests.cardImage_5,
        usersLinks.ToolsPageLink
      ),
  
      getTheUserInfoJsx(
        "E2E testing",
        Assests.cardImage_6,
        usersLinks.E2ETestingLink
      ),
    ];

    const handleChange = (event: any) => {
      // SetSelectedDevice(event.target.value as string);
      let devices=ipcRenderer.sendSync('selectedDevice',event as string)
      console.log(devices,"----------------------")
      dispatch(selected_DeviceData(devices))
    
    };
      
    return (
      <div className="dashboard">
        <div className="ConatinersIconsTitle">
          <div>
            <SelectWrapper
              handleChange={handleChange}
              handleTheMotor={handleTheMotor}
              BtnSelectDeviceOpacity="1"
              dotColor={bubbleRed}
              className="redColorImage"
              devDesc="This GUI supports "
              selectedDevice={selectedDevice}
              setselectedDevice={setselectedDevice}
              deviceList={deviceList} DeviceConstant={undefined}            />
          </div>
          {/* <Box className="selectDeviceBoxMainBox">
            <Grid container spacing={2} >
              <Grid item xs={4}>
              <FormControl  >
                              <InputLabel className="dropDownSelect">
                                Select Device
                              </InputLabel>
                              <Select
                                className="dropDownSelect"
                                labelId="drop_Down_Select"
                                id="setPeakCurrent"
                                // value={dropDownSelect}
                                label="Number Of  &nspb;"                                
                                variant="outlined"                              
                                >
                                {
                                  deviceList.map((device) => {
                                  return <MenuItem value={device}>{device}</MenuItem>;
                                })} 
                              </Select>
                            </FormControl>
              </Grid>
             </Grid>
          </Box> */}
          <div className="cardsRigghtContainer">
            {userInfoObj.map((obj) => {
              return (
                <div
                  key={obj.title}
                  className="conatinerCardImage"
                  style={{ width: 300 }}
                  onClick={() => {
                    // navigate(obj.link);
                    window.open(obj.link, "_blank");
                  }}
                >
                  <div className="rightConatinesIcons">{obj.icons}</div>
                  <div className="titleRightConatiner">{obj.title}</div>
                </div>
              );
            })}
          </div>
        </div>
  
        <div className="knowYourDevice">
          <div className="knowYourDevice_head">
            <h1>Know Your Device</h1>
          </div>
          <div className="knowYourDevice_context">
            <div className="imageKnowContainer">
              <img src={Assests.DashboardImageCircut} alt="Assests" />
            </div>{" "}
            <div>
              <p>
                The MCF8316A is a 4.5-V to 35-V, 8-A peak integrated three-phase
                gate driver IC with sensorless field-oriented control for motor
                drive applications. It provides three accurately trimmed and
                temperature compensated halfbridge MOSFETS, gate drivers, charge
                pump, current sense amplifier, linear regulator for the external
                load and adjustable buck regulator. The I2C interface variant
                (MCF8316A) also provides a standard I2C interface for configuring
                the various device settings and reading fault diagnostic
                information through an external controller.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }