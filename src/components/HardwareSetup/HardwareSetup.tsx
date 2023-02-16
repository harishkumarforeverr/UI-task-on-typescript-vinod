import { Box, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { TIBoardHardwareSetupData } from "./HardwareSetupData";
import "./HardwareSetup.css";
import {
  IHardwareSetupProps,
  TIBoardHardwareSetupDataType,
  IPosition,
  IFocusSteps,
  IArrowImage,
  IDescription,
} from "./IHardwareSetup";
import { useNavigate } from "react-router";

const HardwareSetup: FC<IHardwareSetupProps> = ({ boardType }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [previousStep, setPreviousStep] = useState<number>(0);

  const filterbyBoardType = TIBoardHardwareSetupData.filter(
    (data: TIBoardHardwareSetupDataType) => data.boardType === boardType
  );

  const backBtnHandler = () => {
    setCurrentStep(currentStep - 1);
    setPreviousStep(currentStep - 1);
  };
  const nextBtnHandler = () => {
    setCurrentStep(currentStep + 1);
    setPreviousStep(currentStep + 1);
  };
  const skipBtnHandler = () => {
    setCurrentStep(filterbyBoardType[0].focusSteps.length - 1);
  };
  const focusHandler = (position: IPosition) => {
    setCurrentStep(position.id);
    setPreviousStep(position.id);
  };
  const finalBackBtnHandler = () => {
    setCurrentStep(previousStep);
  };
  const navigate=useNavigate();
const finishHandler=()=>{
  navigate("/", {state:{ view:"QuickOptimizationWidget"}})
}
  return (
    <Box
      className={
        filterbyBoardType[0].focusSteps.length - 1 === currentStep
          ? "main_wrapper_container"
          : "main_wrapper_container_dark"
      }
    >
      <Box
        className={
          filterbyBoardType[0].focusSteps.length - 1 === currentStep
            ? "wrapper_container"
            : "wrapper_container_dark"
        }
      >
        <Box className="image_container">
          <img
            alt="board_image"
            className="board_image"
            src={filterbyBoardType[0].boardImage}
          />
          <Box
            className={
              filterbyBoardType[0].focusSteps.length - 1 === currentStep
                ? "image_overlay"
                : "image_overlay_dark"
            }
          >
            {filterbyBoardType[0]?.focusSteps
              .filter(
                (focusSteps: IFocusSteps) => focusSteps.id === currentStep
              )
              .map((focusSteps: IFocusSteps) => {
                return focusSteps.position?.map(
                  (position: IPosition, index: number) => {
                    return (
                      <Box
                        key={index}
                        className={
                          filterbyBoardType[0].focusSteps.length - 1 ===
                          currentStep
                            ? "image_focus_dark"
                            : "image_focus"
                        }
                        onClick={() => focusHandler(position)}
                        style={{
                          height: position.height,
                          width: position.width,
                          top: position.top,
                          left: position.left,
                        }}
                      >
                        {position.arrow?.map(
                          (arrow: IArrowImage, index: number) => {
                            return (
                              <>
                                <img
                                  className="arrow_image"
                                  alt="arrow"
                                  key={index}
                                  src={arrow.arrowImage}
                                  style={{
                                    width: arrow.width,
                                    top: arrow.top,
                                    left: arrow.left,
                                  }}
                                />
                              </>
                            );
                          }
                        )}
                      </Box>
                    );
                  }
                );
              })}
          </Box>
          {currentStep === filterbyBoardType[0].focusSteps.length - 1 ? null : (
            <Box
              className="message_popup_container"
              sx={{
                top: filterbyBoardType[0]?.focusSteps[currentStep]
                  ?.descriptionPosition
                  ? filterbyBoardType[0]?.focusSteps[currentStep]
                      ?.descriptionPosition.top
                  : `${
                      parseInt(
                        filterbyBoardType[0]?.focusSteps[currentStep]
                          ?.position[0]?.top
                      ) +
                      parseInt(
                        filterbyBoardType[0]?.focusSteps[currentStep]
                          ?.position[0]?.height
                      ) +
                      2
                    }%`,
                left: filterbyBoardType[0]?.focusSteps[currentStep]
                  ?.descriptionPosition
                  ? filterbyBoardType[0]?.focusSteps[currentStep]
                      ?.descriptionPosition.left
                  : `${
                      parseInt(
                        filterbyBoardType[0]?.focusSteps[currentStep]
                          ?.position[0]?.left
                      ) +
                      parseInt(
                        filterbyBoardType[0]?.focusSteps[currentStep]
                          ?.position[0]?.width
                      ) +
                      -4
                    }%`,
              }}
            >
              <Box
                className={
                  filterbyBoardType[0]?.focusSteps[currentStep]
                    ?.descriptionPosition
                    ? "message_title_container_leftside"
                    : "message_title_container"
                }
              >
                <Box className="message_title">
                  {filterbyBoardType[0].focusSteps[currentStep]?.title}
                </Box>

                <Box className="message_description_container">
                  {filterbyBoardType[0]?.focusSteps[
                    currentStep
                  ]?.description?.map(
                    (description: IDescription, index: number) => {
                      return (
                        <Box
                          key={index}
                          sx={{
                            color: description.color
                              ? description.color
                              : "#667085",
                          }}
                        >
                          {description.text}
                        </Box>
                      );
                    }
                  )}
                </Box>
              </Box>

              <Box className="message_popup_btn_container">
                {currentStep !== 0 ? (
                  <Button
                    className="back_button"
                    variant="outlined"
                    color="error"
                    onClick={() => backBtnHandler()}
                  >
                    Back
                  </Button>
                ) : null}
                <Button
                  className="next_button"
                  variant="contained"
                  onClick={() => nextBtnHandler()}
                  disabled={
                    filterbyBoardType[0].focusSteps.length - 1 === currentStep
                  }
                >
                  Next
                </Button>
                <Button
                  className="skip_button"
                  variant="contained"
                  onClick={() => skipBtnHandler()}
                >
                  Skip
                </Button>
              </Box>
            </Box>
          )}
          <Box className="finish_button_container">
            {filterbyBoardType[0].focusSteps.length - 1 === currentStep ? (
              <>
                <Button
                  className="finish_back_button"
                  variant="outlined"
                  color="error"
                  onClick={() => finalBackBtnHandler()}
                >
                  Back
                </Button>
                <Button
                  className="finish_button"
                  variant="contained"
                  // onClick={() => skipBtnHandler()}
                  onClick={()=>{ finishHandler()}}
                >
                  Finish
                </Button>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HardwareSetup;
