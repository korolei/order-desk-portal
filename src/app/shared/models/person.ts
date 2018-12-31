import {Entity, IEntity} from "./entity";

export interface IPerson extends IEntity {
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  title: string;
}

export class Person extends Entity {
  email: string;
  firstName: string;
  prefix: string;
  lastName: string;
  phone: string;
  title: string;

  constructor(p: IPerson) {
    super(p.id);
    this.email = p.email;
      this.firstName = p.firstName;
      this.prefix = p.prefix;
      this.lastName = p.lastName;
      this.phone = p.phone;
      this.title = p.title;
  }
}
