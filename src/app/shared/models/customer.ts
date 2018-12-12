import {ICustomer} from "../interfaces/icustomer";
import {IOrganization} from "../interfaces/iorganization";

export class Customer implements ICustomer{
  id: number;
  organization: IOrganization;

  constructor(customer: ICustomer){
      this.id = customer.id,
      this.organization = customer.organization
  }
}
