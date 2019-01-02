import {Entity, IEntity} from "./entity";

export interface IAddress extends IEntity{
  country: string;
  state: string;
  city: string;
  street: string;
  zip: string;
}
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

  // toString(): string
  // {
  //   return this.street + "," + this.zip + "," + this.city + "," + this.state + "," + this.country;
  // }
}

