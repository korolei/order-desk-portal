import {IPerson} from "../interfaces/iperson";
import {Entity} from "./entity";
import {Phone} from "./phone";

export class Person extends Entity{
  email: string;
  firstName: string;
  initial: string;
  lastName: string;
  phone: Phone;
  title: string;

  constructor(p: IPerson) {
    super(p.id);
    this.email = p.email;
      this.firstName = p.firstName;
      this.initial = p.initial;
      this.lastName = p.lastName;
      this.phone = new Phone(p.phone);
      this.title = p.title;
  }

}
