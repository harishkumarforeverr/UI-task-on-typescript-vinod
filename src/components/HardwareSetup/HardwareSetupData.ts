import Board from "../../images/HardwareSetup/board.png";
import RightArrow from "../../images/HardwareSetup/rightarrow.svg";
import LeftArrow from "../../images/HardwareSetup/leftarrow.svg";
import CurveArrow from "../../images/HardwareSetup/curvearrow.svg";
import { TIBoardHardwareSetupDataType } from "./IHardwareSetup";

export const TIBoardHardwareSetupData: TIBoardHardwareSetupDataType[] = [
  {
    boardType: "1",
    boardImage: Board,
    focusSteps: [
      {
        id: 0,
        position: [
          { top: "16.6%", left: "41.9%", height: "60%", width: "6%", id: 0 },
          { top: "91.8%", left: "15.7%", height: "6%", width: "9%", id: 0 },
          { top: "91.8%", left: "33.7%", height: "6%", width: "9%", id: 0 },
        ],
        title: "Configure jumpers",
        description: [
          { text: "J1 jumper to POT" },
          { text: "J3 jumper to 5V_USB" },
          { text: "J5 jumper to 3V3COM" },
        ],
      },
      {
        id: 1,
        position: [
          {
            top: "0.3%",
            left: "14.3%",
            height: "14%",
            width: "30%",
            id: 1,
            arrow: [
              {
                arrowImage: RightArrow,
                top: "25%",
                left: "11%",
                width: "15%",
              },
              {
                arrowImage: RightArrow,
                top: "25%",
                left: "43%",
                width: "15%",
              },
              {
                arrowImage: LeftArrow,
                top: "25%",
                left: "74%",
                width: "15%",
              },
            ],
          },
        ],
        title: "Configure toggle switches ",
        description: [
          { text: "S1 to right (RUN)" },
          { text: "S2 to left (ABC)" },
          { text: "S3 to right (ON)" },
        ],
      },
      {
        id: 2,
        position: [
          {
            top: "22%",
            left: "0%",
            height: "19%",
            width: "12%",
            id: 2,
            arrow: [
              {
                arrowImage: CurveArrow,
                top: "11%",
                left: "2%",
                width: "35%",
              },
            ],
          },
        ],
        title: "Configure Potentiometer",
        description: [{ text: "Rotate R4 potentiomet fully clockwise." }],
      },
      {
        id: 3,
        position: [
          { top: "24.5%", left: "83%", height: "25%", width: "16%", id: 3 },
        ],
        title: "Configure jumpers",
        description: [{ text: "Connect motor phases A,B,C to the EVM on J8" }],
      },
      {
        id: 4,
        position: [
          { top: "79%", left: "73.6%", height: "16%", width: "16%", id: 4 },
        ],
        title: "Configure jumpers",
        descriptionPosition: {
          top: "65%",
          left: "91.0%",
        },
        description: [
          { text: "Connect Voltage Supply (4.5V ~ 35V) to:", color: "black" },
          { text: "Positive to VBAT" },
          { text: "Negative to PGND" },
        ],
      },
      {
        id: 5,
        position: [
          { top: "67%", left: "4%", height: "16%", width: "7%", id: 5 },
        ],
        title: "Connect USB",
        description: [
          { text: "Connect the EVM to the PC using a micro-USB cable" },
        ],
      },
      {
        id: 6,
        position: [
          { top: "16.6%", left: "41.9%", height: "60%", width: "6%", id: 0 },
          { top: "91.8%", left: "15.7%", height: "6%", width: "9%", id: 0 },
          { top: "91.8%", left: "33.7%", height: "6%", width: "9%", id: 0 },
          {
            top: "0.3%",
            left: "14.3%",
            height: "14%",
            width: "30%",
            id: 1,
            arrow: [
              {
                arrowImage: RightArrow,
                top: "25%",
                left: "11%",
                width: "15%",
              },
              {
                arrowImage: RightArrow,
                top: "25%",
                left: "43%",
                width: "15%",
              },
              {
                arrowImage: LeftArrow,
                top: "25%",
                left: "74%",
                width: "15%",
              },
            ],
          },
          {
            top: "22%",
            left: "0%",
            height: "19%",
            width: "12%",
            id: 2,
            arrow: [
              {
                arrowImage: CurveArrow,
                top: "11%",
                left: "2%",
                width: "35%",
              },
            ],
          },
          { top: "24.5%", left: "83%", height: "25%", width: "16%", id: 3 },
          { top: "79%", left: "73.6%", height: "16%", width: "16%", id: 4 },
          { top: "67%", left: "4%", height: "16%", width: "7%", id: 5 },
        ],
      },
    ],
  },
];
