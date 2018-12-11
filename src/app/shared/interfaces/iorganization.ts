import { IContact } from "./icontact";
import { IAddress } from "./iaddress";
import { IPerson } from "./iperson";

export interface IOrganization extends IContact {
    name: string;
    shipTo: IAddress;
    contact: IPerson;
}
