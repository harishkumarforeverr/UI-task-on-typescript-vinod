import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface IAppState {
    deviceList: any[];
    selectedDevice:string;
    selectedDeviceData:object;
    
  }
const initialState:IAppState = {
deviceList:[],
selectedDevice:'',
selectedDeviceData:{}
  };
  


export const homeReducer = createSlice({
    name: "home",
    initialState,
    reducers:{
        getDeviceList: (state,action) => {
            state.deviceList=action.payload
        },
        selected_device_action: (state,action) => {
            state.selectedDevice=action.payload
        },
        selected_DeviceData: (state,action) => {
            state.selectedDeviceData=action.payload
        },

    }
  
});
export const {getDeviceList,selected_device_action,selected_DeviceData}=homeReducer.actions;


export const deviceLists = (state: RootState) =>
  state.home.deviceList;
  export const selected_devices = (state: RootState) =>
  state.home.selectedDevice;
   export const selectedDeviceConfigfile = (state: RootState) =>
  state.home.selectedDeviceData;
  
  export default homeReducer.reducer;
