import {IOrganization} from "../interfaces/iorganization";
import {IAddress} from "../interfaces/iaddress";
import {IPerson} from "../interfaces/iperson";
import {IPhone} from "../interfaces/iphone";
import {Entity} from "./entity";

export class Organization extends Entity implements IOrganization{
  bp_number: number;
  address: IAddress;
  contact: IPerson;
  email: string;
  bp_name: string;
  phones: IPhone[];
  shipTo: IAddress;
}
