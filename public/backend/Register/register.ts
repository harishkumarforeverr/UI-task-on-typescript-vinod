import { ipcMain } from "electron";

class Register{
ipcMain=ipcMain;

renderIpc(){
this.ipcMain.on('excelData', function(event:any) {
        console.log(event);    
      });
    }
}
export default Register;

 