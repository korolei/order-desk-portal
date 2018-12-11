import { Injectable } from '@angular/core';
import { IPerson } from '../shared/interfaces/iperson';
import { IOrganization } from '../shared/interfaces/iorganization';
import { ICustomer } from '../shared/interfaces/icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  people: IPerson[] = 
  [
    {
      address: null,
      email: 'wcoyo@acme.com',
      phones: [],
      title: 'Mr.',
      firstName: 'Willy',
      initial: 'E',
      lastName: 'Coyote'
    }
  ];

  organizations: IOrganization[] = 
  [
    {
      address: null,
      email: 'sales@acme.com',
      phones: [],
      name: 'ACME Inc.',
      shipTo: null,
      contact: this.people[0],
    }
  ];

  customers: ICustomer[] =
  [
    {
      id: 1,
      organization: this.organizations[0]
    }
  ];

  constructor() { }

  getCustomers(): ICustomer[]
  {
    return this.customers;
  }

  getCustomer(id: number): ICustomer
  {
    return this.customers[id];
  }
}
