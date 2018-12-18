import {IPhone} from "./iphone";

export interface IPerson {
  id: number;
    title?: string;
    firstName: string;
    lastName: string;
    initial?: string;
    email: string;
    phone: IPhone;
}
