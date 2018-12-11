import { IAddress } from "./iaddress";
import { IPhone } from "./iphone";

export interface IContact {
    address: IAddress; // default billing
    email?: string;
    phones: IPhone[]; // preffered at index 0
}
