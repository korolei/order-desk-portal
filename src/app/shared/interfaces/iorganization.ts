import {IContact} from "./icontact";
import {IAddress} from "./iaddress";

export interface IOrganization {
  id:number,
  bp_number: number[];
  bp_name: string;
  shipTo: IAddress[];
  contacts: IContact[];
}
