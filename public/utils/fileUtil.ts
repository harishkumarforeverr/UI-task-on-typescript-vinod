import * as path from "path";
import * as XLSX from "xlsx";
import * as log from "electron-log";
const fs = require("fs");

const logger = log.scope("FileUtil");
export class FileUtil {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  public isExistsSync(fName: string): boolean {
    logger.log(`Entering isExistsSync  with file/folder name ${fName}`);
    try {
      const exists = fs.existsSync(fName);
      logger.log(
        `Leaving isExistsSync Folder/File  exists = ${exists} file = ${fName} `
      );
      return exists;
    } catch (err) {
      logger.log(`Leaving isExistsSync, Folder does not exists ${fName}`);
      return false;
    }
  }

  public createFolderSync(pathName: string): boolean {
    logger.log(
      `Entering createFolderSync called with folder name ${pathName} `
    );
    try {
      fs.mkdirSync(pathName, { recursive: true });
      logger.debug(
        `Leaving createFolderSync, Folder created successfully  ${pathName}`
      );
      logger.debug(`Leaving createFolderSync folder exists  ${pathName}`);
      return true;
    } catch (err) {
      logger.debug(`Folder does not exists ,${pathName} ${err}`);
      try {
        fs.mkdirSync(pathName, { recursive: true });
        logger.debug(
          `Leaving createFolderSync, Folder created successfully  ${pathName}`
        );
        return true;
      } catch (err) {
        logger.warn(
          "Leaving createFolderSync Failed to create folder please check the folder permission"
        );
        return false;
      }
    }
  }

  public readFolderSync(folderName: string): any[] {
    logger.log(
      `Entering readFolderSync for returning list of files  ${folderName}`
    );
    const fileArray: any = [];
    const files = fs.readdirSync(folderName);
    files.forEach((file: any) => {
      fileArray.push(file);
    });
    logger.log(
      `Leaving readFolderSync Number of files in the folder  ${fileArray.length}`
    );
    return fileArray;
  }

  public getFileCountSync(folderName: string): number {
    logger.log(
      `Entering getFileCountSync for file count for folder name ${folderName}`
    );
    const files = fs.readdirSync(folderName);
    logger.log(
      `Leaving getFileCountSync Number of files in the folder  ${files.length}`
    );
    return files.length;
  }

  public readFileSync(fileName: string): any {
    logger.log(`Entering readFileSync called for file name ${fileName}`);
    if (this.isExistsSync(fileName)) {
      logger.debug(
        "Leaving readFileSync, File exists and returning file content"
      );
      return fs.readFileSync(fileName, { flag: "r" });
    } else {
      logger.warn(
        `Leaving readFileSync, The requested file doesn't exists ${fileName}`
      );
      return null;
    }
  }

  public readFileBase64Sync(fileName: string): any {
    logger.log(
      `Entering readFileBase64SyncreadFile called for file name ${fileName}`
    );
    if (this.isExistsSync(fileName)) {
      logger.debug(
        "Leaving readFileBase64SyncreadFile, File exists and returning file content "
      );
      return fs.readFileSync(fileName, { encoding: "base64", flag: "r" });
    } else {
      logger.warn(
        "Leaving readFileBase64SyncreadFile, The requested file doesn't exists"
      );
      return null;
    }
  }

  public async writeFileSync(fileName: string, data: any) {
    //logger.log(`Entering writeFileSync called for file name ${fileName}`);
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), (err: any) => {
      if (err) {
        logger.warn(
          `Leaving writeFileSync Write to file failed with error ${err}`
        );
        return false;
      } else {
        // logger.log(
        //   `Leaving writeFileSync File write completed successfully for fileName ${fileName}`
        // );
        return true;
      }
    });
  }

  public async isExists(fName: string): Promise<boolean> {
    logger.log(`Entering isExists called with file/folder name  ${fName}`);
    await fs.access(fName, async (err: any) => {
      if (err && err.code === "ENOENT") {
        logger.log("Leaving isExists, Folder does not exists ");
        return false;
      }
    });
    logger.log(`Leaving isExists, Folder exists ${fName}`);
    return true;
  }

  public async isExistsAsync(folderPath: string) {
    // logger.log(`Entering isExistsAsync with folder path ${folderPath}`);
    return new Promise((resolve, reject) => {
      fs.access(folderPath, (err: Error) => {
        if (err) {
          // logger.warn(
          //   `Leaving isExistsAsync, Error in accessing folder  ${folderPath}`
          // );
          resolve(false);
        } else {
          //logger.debug("Leaving isExistsAsync,  Folder/File exists");
          resolve(true);
        }
      });
    });
  }
  public async createFolderAsync(folderName: string) {
    // logger.log(
    //   `Entering createFolderAsync  called with folder name ${folderName}`
    // );
    return new Promise((resolve, reject) => {
      this.isExistsAsync(folderName).then((value) => {
        if (!value) {
          // logger.debug("Folder does not exist and creating one");
          fs.mkdir(folderName, { recursive: true }, (err: Error) => {
            if (err) {
              logger.warn(
                `Leaving createFolderAsync , Folder creation failed with error ${err}`
              );
              resolve(false);
            } else {
              // logger.log(
              //   `Leaving createFolderAsync Folder  created successfully!  ${folderName}`
              // );
              resolve(true);
            }
          });
        } else {
          logger.debug(
            `Leaving createFolderAsync Requested folder exists ${folderName}`
          );
          resolve(true);
        }
      });
    });
  }

  public async readdirAsync(folderPath: string) {
    //logger.log(`Entering readdirAsync for returning list of files  ${folderPath}`);
    return new Promise((resolve, reject) => {
      fs.readdir(folderPath, (err: Error, filenames: any) => {
        if (err) {
          logger.warn(
            `Leaving readdirAsync , The requested directory does not exists ${folderPath}`
          );
          resolve(null);
        } else {
          // logger.log(`Leaving readdirAsync, Files read successfully  the number of files are ${filenames.length}`);
          resolve(filenames);
        }
      });
    });
  }

  public async readFileAsync(fileName: string) {
    logger.log(`Entering readFileAsync called for file name ${fileName}`);
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err: Error, data: any) => {
        if (err) {
          logger.warn(`Leaving readFileAsync The file read failed  ${err}`);
          resolve(null);
        } else {
          logger.debug(
            `Leaving readFileAsync File read successfully for filename ${fileName}`
          );
          resolve(data);
        }
      });
    });
  }

  public async readFileJsonDataAsync(fileName: string) {
    logger.log(`Entering readFileJsonData called for file name  ${fileName}`);
    return new Promise((resolve, reject) => {
      fs.readFile(
        fileName,
        { encoding: "utf8" },
        async (err: Error, data: any) => {
          if (err) {
            logger.warn(`The file read failed ${err}`);
            reject(err);
          } else {
            logger.debug("Leaving readFileJsonData read successfully");
            const projectsList = await JSON.parse(data);
            resolve(projectsList);
          }
        }
      );
    });
  }

  public async excelfileReadAsync(filePath: string, sheet_name: string) {
    let filename = path.basename(filePath);
    const workbook = XLSX.read(
      fs.readFileSync(path.join(__dirname, filePath)),
      { type: "buffer", dense: true }
    );
    const worksheetName = workbook.SheetNames;
    let sheetNo;
    for (var i in worksheetName) {
      if (worksheetName[i].match(sheet_name)) {
        sheetNo = parseInt(i);
      }
    }
    var xlData = XLSX.utils.sheet_to_json(
      workbook.Sheets[worksheetName[sheetNo]]
    );
    return { filename: filename, data: xlData };
  }
}