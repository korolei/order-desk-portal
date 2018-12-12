import {IContact} from "../interfaces/icontact";
import {IAddress} from "../interfaces/iaddress";
import {IPhone} from "../interfaces/iphone";

export class Contact implements  IContact{
  address: IAddress;
  email: string;
  phones: IPhone[];
}
