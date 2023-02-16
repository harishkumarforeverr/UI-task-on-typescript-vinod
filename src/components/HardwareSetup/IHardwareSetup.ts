export interface TIBoardHardwareSetupDataType {
  boardType: string;
  boardImage: string;
  focusSteps: {
    id: number;
    position: {
      top: string;
      left: string;
      height: string;
      width: string;
      id: number;
      arrow?: {
        arrowImage: string;
        top: string;
        left: string;
        width: string;
      }[];
    }[];
    title?: string;
    description?: { text: string; color?: string }[];
    descriptionPosition?: any;
  }[];
}

export interface IHardwareSetupProps {
  boardType: string;
}
export interface IPosition {
  top: string;
  left: string;
  height: string;
  width: string;
  id: number;
  arrow?: { arrowImage: string; top: string; left: string; width: string }[];
}
export interface IArrowImage {
  arrowImage: string;
  top: string;
  left: string;
  width: string;
}

export interface IDescription {
  text: string;
  color?: string;
}

export interface IFocusSteps {
  id: number;
  position: {
    top: string;
    left: string;
    height: string;
    width: string;
    id: number;
    arrow?: { arrowImage: string; top: string; left: string; width: string }[];
  }[];
}
