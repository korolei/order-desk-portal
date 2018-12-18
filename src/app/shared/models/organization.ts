import {IOrganization} from "../interfaces/iorganization";
import {Entity} from "./entity";
import {Address} from "./address";
import {Contact} from "./contact";

export class Organization extends Entity{
  bp_number: number[];
  contacts: Contact[];
  bp_name: string;
  shipTo: Address[];

  constructor(org: IOrganization){
    super(org.id);
    this.bp_number = org.bp_number,
      this.contacts = org.contacts.map(c=> new Contact(c));
      this.bp_name = org.bp_name,
      this.shipTo = org.shipTo
  }
}
