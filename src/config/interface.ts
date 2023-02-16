export interface IWriteCmd {
    write: number;
    i2c_addr: string;
    reg_addr: string;
    reg_value: string;
}

//message structure for read from register
export interface IReadCmd {
    read: number;
    i2c_addr: string;
    reg_addr: string;
}

//message structure which is pushed to queue
export interface IMsgRequest {
    command: string, //read or write
    i2c_addr: string,
    reg_addr: string,
    reg_value: string,
    source_module:string,
    priority: number
  }
  export interface IBitFieldValue{
    bitFieldName:string,
    value:string,
    description:string
  }
  export interface IMsgResponse{
    register_name: string,
    register_address: string,
    bitfield_values:IBitFieldValue[]
  }
  export interface IBitFieldSettings{
    "value": string,
    "description": string
  }

  export interface IBitField  {
    "position": string,
    "name": string,
    "access_type":string,
    "reset": string,
    "description":string,
    "reserved": false,
    "settings": IBitFieldSettings[]
  }

  export interface IRegister{
    "register_address": string,
    "ip_name": string,
    "register_acronym": string,
    "bit_field": IBitField[]        
  }
     
  export interface IEeprom{
    "device_name": string,
    "register_type": string,
    "registers": IRegister[]
  }