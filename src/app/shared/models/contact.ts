import {Entity, IEntity} from "./entity";
import {Address, IAddress} from "./address";

export interface IContact extends IEntity {
  bp_number: string;
  address: IAddress;
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  companyName: string;
}

export class Contact extends Entity{
  address: Address;
  bp_number: string;
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  companyName: string;

  constructor(c: IContact){
      super(c.id || 0);
      this.bp_number = c.bp_number || "";
      this.address = new Address(c.address);
      this.email = c.email || "";
      this.phone = c.phone || "";
      this.firstName = c.firstName || "";
      this.lastName = c.lastName || "";
      this.prefix = c.prefix || "";
      this.jobTitle = c.jobTitle || "";
      this.companyName = c.companyName || "";
  }
}

