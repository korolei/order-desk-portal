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
    super(a.id || 0);
      this.city = a.city || "";
      this.state = a.state || "";
      this.street = a.street || "";
      this.zip = a.zip || "";
      this.country = a.country || "";
  }
}

