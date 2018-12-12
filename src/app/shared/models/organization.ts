import {IOrganization} from "../interfaces/iorganization";
import {IAddress} from "../interfaces/iaddress";
import {IPerson} from "../interfaces/iperson";
import {IPhone} from "../interfaces/iphone";

export class Organization implements IOrganization{
  bp_number: number;
  address: IAddress;
  contact: IPerson;
  email: string;
  bp_name: string;
  phones: IPhone[];
  shipTo: IAddress;
}
