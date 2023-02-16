import {
  IBitFieldValue,
  IEeprom,
  IMsgRequest,
  IMsgResponse,
  IRegister,
} from "../../../models/device";
import * as log from "electron-log";
const logger = log.scope("Main");

//below json is for test purpose alone. It will be replaced once the actual json files are pushed.
const MCT8315_eeprom = {
  device_name: "MCT8315",
  register_type: "EEPROM",
  registers: [
    {
      register_address: "0x00000080",
      ip_name: "Algorithm Configuration",
      register_acronym: "ISD_CONFIG",
      bit_field: [
        {
          position: "31",
          name: "PARITY",
          access_type: "R/W",
          reset: "0",
          description: "Parity bit",
          reserved: false,
          settings: [],
        },
        {
          position: "30",
          name: "ISD_EN",
          access_type: "R/W",
          reset: "0",
          description: "ISD enable",
          reserved: false,
          settings: [
            {
              value: "1",
              description: "Enable",
            },
            {
              value: "0",
              description: "Disable",
            },
          ],
        },
      ],
    },
    {
      register_address: "0x00000082",
      ip_name: "Algorithm Configuration",
      register_acronym: "MOTOR_STARTUP1",
      bit_field: [
        {
          position: "31",
          name: "PARITY",
          access_type: "R/W",
          reset: "0",
          description: "Parity bit",
          reserved: false,
        },
        {
          position: "30:29",
          name: "MTR_STARTUP",
          access_type: "R/W",
          reset: "00",
          description: "Motor start-up method",
          reserved: false,
          settings: [
            {
              value: "00",
              description: "Align",
            },
            {
              value: "01",
              description: "Double Align",
            },
            {
              value: "10",
              description: "IPD",
            },
            {
              value: "11",
              description: "Slow first cycle",
            },
          ],
        },
      ],
    },
  ],
};

export class ResponseReceiver {
  public get_bit_value(num: number, bit_pos: number): string {
    var mask = 1 << bit_pos; // gets the (bit_pos+1)th bit
    if ((num & mask) !== 0) {
      return "1";
    } else {
      return "0";
    }
  }

  public extract_bits_in_range(
    n: number,
    left_range: number,
    right_range: number
  ) {
    // calculating a number 'range' having set
    // bits in the range from l to r and all other
    // bits as 0 (or unset).
    let mask = ((1 << (left_range - 1)) - 1) ^ ((1 << right_range) - 1);

    return n & mask;
  }

  public testfunc() {
    console.log("inside pareser");
  }

  public register_parser(response_adress: string, response_value: string) {
    
    //TODO will be added as parameter
    //get the device name
    var msgResponse = <IMsgResponse>{};
    msgResponse.bitfield_values = [];
    let EEPROMData: IEeprom = JSON.parse(JSON.stringify(MCT8315_eeprom));
    var register_value = Number(response_value);

    EEPROMData.registers.forEach((register) => {
      msgResponse.register_name = register.register_acronym;
      var j = 0;
      register.register_address = response_adress; //request.reg_addr;

      register.bit_field.forEach((bit) => {
        var raw_value;
        var bitFieldValue = <IBitFieldValue>{};
        const bitrange = bit.position.split(":");
        bitFieldValue.bitFieldName = bit.name;
        if (bitrange.length > 1) {
          raw_value = this.extract_bits_in_range(
            register_value,
            Number(bitrange[0]),
            Number(bitrange[1])
          );
        } else {
          raw_value = this.get_bit_value(register_value, Number(bitrange[0]));
        }
        var bit_string = raw_value;
        //get calibrated value
        let settings_length = 0;
        if (bit.settings !== undefined) {
          settings_length = bit.settings.length;
        }
        let i = 0;
        for (i = 0; i < settings_length; i++) {
          const bit_diff =
            bit.settings[i].value.length - raw_value.toString(16).length;

          if (bit_diff > 0) {
            bit_string = "0" + raw_value;
            while (bit_string.length < bit.settings[i].value.length) {
              bit_string = "0" + raw_value;
            }
          }
          if (String(bit.settings[i].value) === bit_string) {
            bitFieldValue.description = bit.settings[i].description;
            bitFieldValue.value = String(bit.settings[i].value);
            msgResponse.bitfield_values.push(bitFieldValue);
            break;
          }
        }
        j = j + 1;
      });
    });
    logger.info(msgResponse);
    //get each register value
  }
}

const req = {
  command: "read", //read or write
  i2c_addr: "0x01",
  reg_addr: "0x00000098",
  reg_value: "0x000045ff",
  source_module: "string",
  priority: 1,
};

// const resp = "0x000045ff";
// const obj = new ResponseReceiver();
// obj.register_parser(req, resp);
