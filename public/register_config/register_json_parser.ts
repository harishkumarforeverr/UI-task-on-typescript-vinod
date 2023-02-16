import * as log from "electron-log";
import { FileUtil } from "../utils/fileUtil";
import { project_root_Path, device_config_dir_name } from "../config/config";
const fs = require("fs");
const logger = log.scope("Register_json_parser");

export default class RegisterJsonParser {
  protected fileUtil: FileUtil;
  constructor() {
    this.fileUtil = new FileUtil();
  }
  private escapeJSON(string: string) {
    return string.replace(/[\n"\&\r\t\b\f]/g, "||");
  }
  // function to map register
  private register_data(payload: any) {
    let bit_setting = [];
    //logger.debug("payload",payload)
    let bit_Enumerations = "Bit Enumerations\n(bit settings)" in payload;
    if (bit_Enumerations) {
      let bit_settings_replace = this.escapeJSON(
        payload["Bit Enumerations\n(bit settings)"]
      );
      //logger.debug("setting_mapper",bit_settings_replace);

      let bit_setting_arr = bit_settings_replace.split("||");
      for (let i = 0; i < bit_setting_arr.length; i++) {
        let bitDetail = bit_setting_arr[i].split("=");
        //logger.error("bit_setting",bit_setting)
        bit_setting.push([
          {
            value: bitDetail[0].trim(),
            description: bitDetail[1],
          },
        ]);
      }
    }
    return {
      register_address: payload["Register Address"],
      ip_name: payload["IP"],
      register_acronym: payload["Register Acronym Name"],
      bit_field: [
        {
          position: payload["Bit Field Number"],
          name: payload["Bit Field Name"],
          access_type:
            payload["Bit Access Type\n[Use dropdown or tool will fail]"],
          reset: payload["Bit Reset Value"],
          description: payload["Bit Description"]?.replace(/[\n\r]/g, " "),
          reserved: payload["Reserved Bit?\n(Y or N)"] === "Y" ? true : false,
          settings: bit_setting.reduce(
            (acc: string | any[], curr: any) => acc.concat(curr),
            []
          ),
        },
      ],
    };
  }

  // Formating the json
  public async jsonFormatter(payload: any, fileName: string, dir_path: string) {
    let register_array = [];
    for (let i = 0; i < payload?.length; i++) {
      if (register_array.length === 0) {
        register_array.push(this.register_data(payload[i]));
      } else {
        let index_register = register_array.findIndex(
          (el: any) => el.register_address === payload[i]["Register Address"]
        );
        let settings_value = [];
        if (index_register > -1) {
          //logger.debug(payload[i]);
          let bit_Enumerations =
            "Bit Enumerations\n(bit settings)" in payload[i];
          if (bit_Enumerations) {
            let setting_mapper = this.escapeJSON(
              payload[i]["Bit Enumerations\n(bit settings)"]
            );
            let setting_Array = setting_mapper.split("||");
            for (let i = 0; i < setting_Array.length; i++) {
              let bitDetail = setting_Array[i].split("=");
              //logger.debug("settings_value",settings_value);
              settings_value.push([
                {
                  value: bitDetail[0].trim(),
                  description: bitDetail[1],
                },
              ]);
            }
          }
          if (register_array[index_register]) {
            register_array[index_register]["bit_field"].push({
              position: payload[i]["Bit Field Number"],
              name: payload[i]["Bit Field Name"],
              access_type:
                payload[i]["Bit Access Type\n[Use dropdown or tool will fail]"],
              reset: payload[i]["Bit Reset Value"],
              description: payload[i]["Bit Description"]?.replace(
                /[\n\r]/g,
                " "
              ),
              reserved:
                payload[i]["Reserved Bit?\n(Y or N)"] === "Y" ? true : false,
              settings: settings_value.reduce(
                (acc: string | any[], curr: any) => acc.concat(curr),
                []
              ),
            });
          }
        } else {
          register_array.push(this.register_data(payload[i]));
        }
      }
    }
    let name = fileName.split("_");
    let jsonData = {
      device_name: name[0],
      register_type: name[1].split(".")[0],
      registers: register_array,
    };
    await this.fileUtil
      .createFolderAsync(`./${device_config_dir_name}/${dir_path}`)
      .then((result) => {
        logger.info("result", result);
        this.fileUtil
          .writeFileSync(
            `${project_root_Path}${device_config_dir_name}/${dir_path}/${
              fileName.split(".")[0]
            }.json`,
            jsonData
          )
          .then((e) => logger.info(e));
      })
      .catch((err) => logger.error("json config", err));

  }
}