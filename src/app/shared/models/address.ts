import {IAddress} from "../interfaces/iaddress";

export class Address implements IAddress{
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;
}
