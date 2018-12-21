import {IContact} from "../interfaces/icontact";
import {Phone} from "./phone";
import {Entity} from "./entity";
import {Address} from "./address";

export class Contact extends Entity{
  address: Address;
  email: string;
  phones: Phone[] = [];

  constructor(c: IContact){
    super(c.id);
      this.address = new Address(c.address);
      this.email = c.email;
      this.phones = c.phones ? c.phones.map(p=> new Phone(p)) : [];
  }
}
