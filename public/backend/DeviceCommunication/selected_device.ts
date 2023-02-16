import { FileUtil } from "../../utils/fileUtil";
import { ipcMain } from "electron";
import {
  config_list_json,
  project_root_Path,
  device_config_dir_name,
} from "../../config/config";
import { ResponseReceiver } from "./response_receiver";
import { IEeprom, IRam } from "../../../models/device";
// import * as json from '../../../device_config/device_config_list.json'
export class SelectedDevice {
  private fileUtil: FileUtil;
  private ipcMain = ipcMain;
  private responseReceiver: ResponseReceiver;
  

  constructor() {
    this.fileUtil = new FileUtil();
    this.responseReceiver = new ResponseReceiver();
  }
  // device list and device registes
  public async readConfigList() {
    this.ipcMain.on("get_deviceList", (event: any) => {
      this.fileUtil
        .readFileJsonDataAsync(
          `${project_root_Path}${device_config_dir_name}/${config_list_json}`
        )
        .then((data: []) => {
          console.log(data);

          event.returnValue = data;
        });
    });

    this.ipcMain.on("selectedDevice", async (event: any, args: string) => {
      let device = args;
      let device_data = {
        EEPROM: {},
        RAM: {},
      };
      //EEPROM

      this.fileUtil
        .readFileJsonDataAsync(
          `${project_root_Path}${device_config_dir_name}/${device}/${device}_EEPROM.json`
        )
        .then((data: IEeprom) => {
          device_data.EEPROM = data;

          //RAM
          this.fileUtil
            .readFileJsonDataAsync(
              `${project_root_Path}${device_config_dir_name}/${device}/${device}_RAM.json`
            )
            .then((data: IRam) => {
              device_data.RAM = data;
              event.returnValue = device_data;
            });
        });
    });
  }
}
