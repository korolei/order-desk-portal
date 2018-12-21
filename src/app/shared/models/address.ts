import {IAddress} from "../interfaces/iaddress";
import {Entity} from "./entity";

export class Address extends Entity{
  city: string;
  country: string;
  state: string;
  street: string;
  zip: string;

  constructor(a: IAddress){
    super(a.id);
      this.city = a.city;
      this.state = a.state;
      this.street = a.street;
      this.zip = a.zip;
      this.country = a.country;
  }
}
