import React, { useState } from "react";
import { Box } from "@mui/material";
import * as XLSX from 'xlsx';
// import { IpcRenderer } from "electron";
 const {ipcRenderer} = window.require('electron')


const Setting = () => {

  const [excelData,setExcelData] =useState([])
  const [fileName,setFileName] =useState('')

  const handleset = (f: any) => {
    setFileName(f.target?.files[0].name)
    let reader = new FileReader();
    reader.readAsArrayBuffer(f.target?.files[0]);
    reader.onload = async (e) => {
      const workbook = XLSX.read(e.target?.result, { type: "buffer" });
      const worksheetName = workbook.SheetNames;
      let sheetNo;
      for(var i in worksheetName){
        if(worksheetName[i].match("Bit_Description")){
          sheetNo=parseInt(i);
        }
      }
      const worksheet = workbook.Sheets[worksheetName[sheetNo]];
      const data = await XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
      
      // setExcelData(data)
      ipcRenderer.send('upload_device_config',{config:data,fileName:f.target?.files[0].name})
    };
  };

  const onClick_upload= () => {
    console.log("excelData",excelData);   
    
    setExcelData([])
  }

  return(
  <> 
  <Box sx={{ padding: "70px 20px 20px 140px" }}>Setting Component
  <form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
        accept=".xlsx"
        onChange={handleset}
    />
</form>
<button onClick={onClick_upload} disabled={Object.keys(excelData).length === 0 ? true:false }>upload</button>
</Box>
  </>)
  ;
};

export default Setting;
