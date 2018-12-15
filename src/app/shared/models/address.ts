import {IAddress} from "../interfaces/iaddress";
import {Entity} from "./entity";

export class Address extends Entity implements IAddress{
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}
