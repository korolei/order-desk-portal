import {Entity, IEntity} from "./entity";
import {Address, IAddress} from "./address";

export interface IContact extends IEntity {
  address: IAddress;
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  bpName: string;
  bpNumber: string;
  key: string;
}

export class Contact extends Entity{
  address: Address;
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  bpName: string;
  bpNumber: string;
  key:string;

  constructor(c: IContact){
    super(c.id || 0);
    this.address = c.address ? new Address(c.address): null;
    this.email = c.email || "";
    this.phone = c.phone || "";
    this.firstName = c.firstName || "";
    this.lastName = c.lastName || "";
    this.prefix = c.prefix || "";
    this.jobTitle = c.jobTitle || "";
    this.bpName = c.bpName || "";
    this.bpNumber = c.bpNumber || "";
    this.key = c.key || "";
  }

  public toString(): string{
    return (
        this.prefix + ' ' + 
        this.firstName + ' ' + 
        this.lastName + 
        (this.jobTitle ? ', ' + this.jobTitle : '') +
        (this.email ? ', ' + this.email : '') + 
        (this.phone ? ', ' + this.phone : '') +
        ' | Id #:' + this.key)
    .trim().replace(', ,',',');
  }
}

