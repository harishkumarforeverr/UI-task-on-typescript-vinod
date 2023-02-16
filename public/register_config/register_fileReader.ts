import { FileUtil } from "../utils/fileUtil";
import * as path from "path";
import * as log from "electron-log";
import {
  config_list_json,
  device_config_dir_name,
  registermap_path,
  sheet_name,
} from "../config/config";
import RegisterJsonParser from "./register_json_parser";

const logger = log.scope("FileReader");

export class RegisterFileReader {
  protected fileUtil: FileUtil;
  protected excelToJson: RegisterJsonParser;
  constructor() {
    this.fileUtil = new FileUtil();
    this.excelToJson = new RegisterJsonParser();
  }

  public async readDirectory() {
    const dir_path = path.join(__dirname, registermap_path);

    return new Promise(async (resolve, reject) => {
      if (resolve) {
        await this.fileUtil.isExistsAsync(dir_path).then((value) => {
          if (value) {
            this.fileUtil.readdirAsync(dir_path).then((registermapDirectory:[])=>{
              registermapDirectory.forEach((fname) => {
                this.fileUtil
                  .isExistsAsync(`./${device_config_dir_name}/${fname}`)
                  .then(async (fileExit) => {
                    if (fileExit) {
                      logger.log("file already exists");
                    } else {
                      await this.fileUtil
                        .readdirAsync(dir_path + "/" + fname)
                        .then((files: []) => {
                          files.forEach((file) => {
                            this.fileUtil
                              .excelfileReadAsync(
                                `${registermap_path}/${fname}/${file}`,
                                sheet_name
                              )
                              .then((excelData) => {
                                this.excelToJson
                                  .jsonFormatter(
                                    excelData?.data,
                                    excelData?.filename,
                                    fname
                                  )
                                  .then((jsonCreated) => {
                                    resolve(jsonCreated);
                                    this.fileUtil.writeFileSync(
                                      `./${device_config_dir_name}/${config_list_json}`,
                                      registermapDirectory
                                    );
                                    logger.info(`Json Created`, jsonCreated);
                                  })
                                  .catch((err) => {
                                    logger.error(`Failed to create ${err}`);
                                  });
                              });
                          });
                        });
                    }
                  });
              });
            })

         
          }
        });
      }
    });
  }
}