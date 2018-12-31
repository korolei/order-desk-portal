import {Entity, IEntity} from "./entity";
import {Contact, IContact} from "./contact";

export interface IOrganization extends IEntity {
  id:number,
  bp_name: string;
  contacts: IContact[];
}
export class Organization extends Entity{
  contacts: Contact[] = [];
  bp_name: string;

  constructor(org: IOrganization){
    super(org.id);
      this.contacts = org.contacts ? org.contacts.map(c=> new Contact(c)) : [];
      this.bp_name = org.bp_name;
  }

}


