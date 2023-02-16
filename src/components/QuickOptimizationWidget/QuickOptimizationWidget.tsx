import { useState, useEffect } from "react";
import "../Home/Home.css"
import { useLocation, useNavigate } from "react-router-dom";
import DashboardImageCircut from "../../images/Home/DashboardImageCircut.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Ellipse from "../../images/Home/Ellipse.svg";
import cardImage_1 from "../../images/Home/cardImage_1.svg";
import cardImage_2 from "../../images/Home/cardImage_2.svg";
import cardImage_3 from "../../images/Home/cardImage_3.svg";
import cardImage_4 from "../../images/Home/cardImage_4.svg";
import cardImage_6 from "../../images/Home/cardImage_6.svg";
import cardImage_5 from "../../images/Home/cardImage_5.svg";
import bubbleRed from "../../images/Home/bubbleRed.svg";
import bubbleGreen from "../../images/Home/bubbleGreen.svg";
import arrow from "../../images/Home/arrow.svg";
import vector from "../../images/Home/Vector.svg";
import Rectangle from "../../images/Home/Rectangle.svg";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { SelectWrapper } from "../SelectDevice/SelectDevice";
export const QuickOptimizationWidget = ({
    selectedDevice,
    setselectedDevice,
  }: {
    setView: any;
    selectedDevice: any;
    setselectedDevice: any;
  }) =>{
    const cardsObj: {
      title: string;
      subTitle: string;
      desc: string;
      subDesc: string;
    }[] = [
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
    const [showCards, setShowCards] = useState(false);
    const [setup, setSetup] = useState(false);
    const onChange = (e: any) => {
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
                  selectedDevice={selectedDevice}
                  setselectedDevice={setselectedDevice}
                  BtnSelectDeviceOpacity="0.5"
                  dotColor={Assests.bubbleGreen}
                  devDesc="This GUI supports"
                  devSubDesc="Correct device detected : "
                  handleChange={() => { } } deviceList={[]} DeviceConstant={undefined} />
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
                            <CheckCircleIcon className="iconsSetup" />
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
                            <Button
                              className="Setup_completed_btn redbgm"
                              onClick={handleTheSetup}
                            >
                              Setup completed
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                Navigate("/setting");
                              }}
                            >
                              Setup Now
                            </Button>
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
                      <div>
                        <img
                          style={{
                            zIndex: 1,
                          }}
                          className="nextIcons"
                          src={Rectangle}
                          alt="ok"
                        />
  
                        <img
                          style={{
                            zIndex: 2,
                          }}
                          className="nextIcon_two"
                          src={vector}
                          alt="ok"
                        />
  
                        <img
                          style={{
                            zIndex: 3,
                          }}
                          className="nextIcon_three"
                          src={arrow}
                          alt="ok"
                        />
                      </div>
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