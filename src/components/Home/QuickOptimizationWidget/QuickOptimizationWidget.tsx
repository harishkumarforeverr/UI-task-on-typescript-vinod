import React, { useEffect, useState } from "react";

import nextIcon from "../../../images/DashboardAssests/nextIcon.png";
import "./QuickOptimizationWidget.scss";
import { Button, Card, Checkbox, Select } from "antd";
import SelectWrapper from "../SelectWrapper/SelectWrapper";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { Assests } from "../../../images/DashboardAssests";
import { CheckCircleOutlined } from "@ant-design/icons";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import { useLocation, useNavigate } from "react-router-dom";
function QuickOptimizationWidget({ setView }: { setView: any }) {
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
  const location=useLocation(); 
  useEffect(()=>{ 
    if(location.state!==null){
      setShowCards(true);
    }
  }, [location])
  const Navigate=useNavigate()
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
                      Connect the motor to J8.
                      Supply a voltage compliant with the Power Supply Voltage (VM).
                      Recommended voltage range is 4.5V – 35V. 
                      Connect the positive terminal to VBAT (PIN3 of J7) and negative terminal to PGND (PIN2 of J7).Plug in the micro-USB, from the computer that holds the GUI, to the USB Connector J2.
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
                        checked={showCards} onChange={onChange} />
                        <p>Hardware setup has been done manually</p>
                        {showCards ? (
                          <ButtonWrapper
                            className="Setup_completed_btn"
                            onClick={handleTheSetup}
                          >
                            Setup completed
                          </ButtonWrapper>
                        ) : (
                          <ButtonWrapper onClick={()=>{
                           
                            Navigate("/setting")
                          }}>Setup Now</ButtonWrapper>
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
                      src={!setup ? nextIcon : Assests.nextIcon_pro}
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

export default QuickOptimizationWidget;
