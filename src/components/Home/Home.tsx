import { useState, useEffect } from "react";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Assests } from "../../images/DashboardAssests/HomePageImages";
import { Button, Card, Checkbox } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const userGuidesLink =
  "https://dev.ti.com/gallery/view/BLDC/MCF8316A_GUI/ver/1.1.6/";
const TuningLink =
  "https://www.ti.com/lit/ug/sllu335a/sllu335a.pdf?ts=1675330262927";
const DataSheetLink =
  "https://www.ti.com/lit/ds/symlink/mcf8316a.pdf?ts=1675329689450&ref_url=https%253A%252F%252Fwww.ti.com%252Fproduct%252FMCF8316A";

const ProductPageLink = "https://www.ti.com/product/MCF8316A";
const ToolsPageLink = "https://www.ti.com/tool/MCF8316AEVM";
const E2ETestingLink =
  "https://e2e.ti.com/support/motor-drivers-group/motor-drivers/f/motor-drivers-forum";

interface propsType {
  dotColor: any;
  deviceTitle: string;
  devDesc?: string;
  devSubDesc?: string;
  BtnSelectDeviceOpacity: string;
  handleChange?: (event: SelectChangeEvent) => void;
  handleTheMotor?: () => void;
}
const usersLinks = {
  userGuidesLink,
  ProductPageLink,
  DataSheetLink,
  TuningLink,
  ToolsPageLink,
  E2ETestingLink,
};

export const ButtonWrapper = (props: any) => {
  return (
    <>
      <Button {...props}> {props.children}</Button>
    </>
  );
};

export function SelectWrapper({
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
              onChange={handleChange}
              defaultValue="Select Your Device"
            >
              <MenuItem value={"Select Your Device"}>
                Select Your Device
              </MenuItem>
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
                width: "1.8rem",
              }}
              src={dotColor}
              alt="redColorBubble"
            />
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

export function Dashboard({ setView }: { setView: any }) {
  const [motor, setMotor] = useState("");
  const handleTheMotor = () => {
    console.log(motor);
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
  const userInfoObj = [
    {
      title: "Users's Guide",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_1}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.userGuidesLink,
    },
    {
      title: "Product Page",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_2}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.ProductPageLink,
    },
    {
      title: "Data Sheet",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_3}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.DataSheetLink,
    },
    {
      title: "Tuning Page",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_4}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.TuningLink,
    },
    {
      title: "Tools Page",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_5}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.ToolsPageLink,
    },
    {
      title: "E2E testing",
      icons: (
        <GetImages>
          <img
            className="image_inner"
            src={Assests.cardImage_6}
            alt="image_inner"
          />{" "}
        </GetImages>
      ),
      link: usersLinks.E2ETestingLink,
    },
  ];
  const handleChange = (event: SelectChangeEvent) => {
    setMotor(event.target.value);
  };
  return (
    <div className="dashboard">
      <div className="ConatinersIconsTitle">
        <div>
          <SelectWrapper
            handleChange={handleChange}
            handleTheMotor={handleTheMotor}
            BtnSelectDeviceOpacity="1"
            dotColor={Assests.bubbleRed}
            deviceTitle="MCF8316EVM"
            devDesc="This GUI supports MCF8316EVM"
          />
        </div>
        <div className="cardsRigghtContainer">
          {userInfoObj.map((obj) => {
            return (
              <Card
                key={obj.title}
                className="conatinerCardImage"
                bordered={false}
                style={{ width: 300 }}
                onClick={() => {
                  // navigate(obj.link);
                  window.open(obj.link, "_blank");
                }}
              >
                <div className="rightConatinesIcons">{obj.icons}</div>
                <div className="titleRightConatiner">{obj.title}</div>
              </Card>
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
export function QuickOptimizationWidget({ setView }: { setView: any }) {
  const cardsObj = [
    {
      title: "Quick Spin",
      subTitle: "",
      desc: "Get your motor spining in",
      subDesc: "just few steps",
    },
    {
      title: "Optimization",
      subTitle: "Wizards",
      desc: "Go here after your motor",
      subDesc: "spin consistently",
    },
    {
      title: "Advanced",
      subTitle: "Tuning",
      desc: "Access all your control",
      subDesc: "in one single page",
    },
    {
      title: "Register Map",
      subTitle: "",
      desc: "Full interactive device",
      subDesc: "register map",
    },
  ];
  const [showCards, setShowCards] = useState(false);
  const [setup, setSetup] = useState(false);
  const onChange = (e: CheckboxChangeEvent) => {
    const value = e.target.checked;
    setShowCards(value);
  };
  const handleTheSetup = () => {
    setSetup(true);
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setShowCards(true);
    }
  }, [location]);
  const Navigate = useNavigate();
  return (
    <div className="QuickOptimizationWidget">
      <div className="Conatiner2sIconsTitle">
        <>
          <div className="QuickOptimizationWidget_hardwareSetup">
            <div>
              <SelectWrapper
                BtnSelectDeviceOpacity="0.5"
                dotColor={Assests.bubbleGreen}
                deviceTitle="MCF8316EVM"
                devDesc="This GUI supports MCF8316EVM"
                devSubDesc="Correct device detected : MCF8316A"
              />
            </div>
            <div className="hardwareSetup">
              <div className="hardWareTitleAndImage">
                <h1>Hardware Setup</h1>

                <img src={Assests.DashboardImageCircut} alt="Assests" />
              </div>
              <div className="hardWareDescription">
                <h1>
                  Ensure the hardware is configured according to the below steps
                  :
                </h1>
                <div>
                  <ol>
                    <li>
                      J1 selected to POT, J3 selected to 5V_USB, and J5 selected
                      to 3V3COM
                    </li>
                    <li>Potentiometer R4 is rotated clockwise fully</li>
                    <li>
                      S1 pushed right to select BRAKE=RUN, S2 pushed left to
                      select DIR=ABC, and
                    </li>
                    <li> S3 pushed right to select DRVOFF=ON</li>
                  </ol>
                  <div>
                    <p>
                      Connect the motor to J8. Supply a voltage compliant with
                      the Power Supply Voltage (VM). Recommended voltage range
                      is 4.5V – 35V. Connect the positive terminal to VBAT (PIN3
                      of J7) and negative terminal to PGND (PIN2 of J7).Plug in
                      the micro-USB, from the computer that holds the GUI, to
                      the USB Connector J2.
                    </p>
                  </div>
                  {setup ? (
                    <div className="setupdone">
                      <h1>
                        <span className="icon">
                          <CheckCircleOutlined />
                        </span>
                        The Hardware setup is done
                      </h1>
                    </div>
                  ) : (
                    <>
                      <div className="actionBtn">
                        <Checkbox
                          className="checkboxReadOnly"
                          checked={showCards}
                          onChange={onChange}
                        />
                        <p>Hardware setup has been done manually</p>
                        {showCards ? (
                          <ButtonWrapper
                            className="Setup_completed_btn"
                            onClick={handleTheSetup}
                          >
                            Setup completed
                          </ButtonWrapper>
                        ) : (
                          <ButtonWrapper
                            onClick={() => {
                              Navigate("/setting");
                            }}
                          >
                            Setup Now
                          </ButtonWrapper>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              opacity: setup ? 1 : 0.4,
              cursor: !setup ? "not-allowed" : "pointer",
            }}
            className="cardsConatiner"
          >
            {cardsObj.map((obj) => {
              return (
                <div key={obj.title} className="cardsConatiner_card">
                  <div className="cards">
                    <div className="card_title">
                      <h1>
                        {obj.title}

                        {obj.subTitle}
                      </h1>
                    </div>
                    <div className="cardContainer">
                      {" "}
                      <div>
                        <p> {obj.desc} </p>
                        <p>{obj.subDesc}</p>
                      </div>
                    </div>
                    <img
                      className="nextIcons"
                      src={!setup ? Assests.nextIcon : Assests.nextIcon_pro}
                      alt="ok"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
}
function Home() {
  const [view, setView] = useState("Dashboard");
  const location = useLocation();
  useEffect(() => {
    if (location.state !== null) {
      setView("QuickOptimizationWidget");
    }
  }, [location]);
  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </div>
      {view === "Dashboard" && <Dashboard setView={setView} />}
      {view === "QuickOptimizationWidget" && (
        <QuickOptimizationWidget setView={setView} />
      )}
    </>
  );
}

export default Home;
