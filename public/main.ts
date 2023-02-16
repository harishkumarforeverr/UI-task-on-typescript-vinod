import { BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as log from "electron-log";
import * as glob from "glob";
import { RegisterFileReader } from "./register_config/register_fileReader";
import { SelectedDevice } from "./backend/DeviceCommunication/selected_device";
const isDev = require("electron-is-dev");
const logger = log.scope("Main");

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow: any;

  private static onWindowAllClosed() {
    if (process.platform !== "darwin") {
      Main.application.quit();
    }
  }

  private static initialize() {
    /** Implements the board connectivity call before bring up the application */
    logger.info("Initializing the application before app bring up");
    let fileReader = new RegisterFileReader();
    fileReader.readDirectory()
  }

  /** This function import all the IPC sender from the backend */
  private static loadBackend() {
    let getConfig = new SelectedDevice()
    getConfig.readConfigList()
    //  ipcMain.on('get_deviceList', function(event) {
    //   event.returnValue =  getConfig.readConfigList()
    //   });

    logger.debug("Importing all the IPC sender from backend ");
    const files = glob.sync(path.join(__dirname, "backend/**/*.js"));
    files.forEach((file) => {
      require(file);
    });
  }

  /** Allow only one instance of the the app is running */
  private static requestSingleInstanceLock() {
    if (process.mas) return false;
    const gotTheLock = Main.application.requestSingleInstanceLock();
    if (!gotTheLock) {
      Main.application.quit();
    }
  }

  private static onClose() {
    // Dereference the window object.
    Main.mainWindow = null;
  }

  private static async onReady() {
    logger.info("App starting...");
    Main.mainWindow = new Main.BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        enableRemoteModule: true,
        contextIsolation: false,
        preload: path.join(__dirname, "preload.js"),
      },
    });
    await Main.mainWindow.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
    // Main.mainWindow
    //     .loadURL('file://' + __dirname + '/index.html');
    Main.mainWindow.on("closed", Main.onClose);
    //Main.mainWindow.maximize();
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.requestSingleInstanceLock();
    Main.initialize();
    Main.loadBackend();
    Main.application.on("window-all-closed", Main.onWindowAllClosed);
    Main.application.on("ready", Main.onReady);
  }
}