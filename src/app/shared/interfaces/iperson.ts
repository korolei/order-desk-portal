import { IContact } from "./icontact";

export interface IPerson extends IContact {
    title?: string;
    firstName: string;
    lastName: string;
    initial?: string;
}
