import {IContact} from "./icontact";

export interface IOrganization {
  id:number,
  bp_number: number[];
  bp_name: string;
  shipTo: string;
  contacts: IContact[];
}
