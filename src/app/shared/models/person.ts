import {IPerson} from "../interfaces/iperson";
import {IAddress} from "../interfaces/iaddress";
import {IPhone} from "../interfaces/iphone";

export class Person implements IPerson{
  address: IAddress;
  email: string;
  firstName: string;
  initial: string;
  lastName: string;
  phones: IPhone[];
  title: string;
}
