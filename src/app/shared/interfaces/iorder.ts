import { ICustomer } from "./icustomer";
import { IItem } from "./iitem";

export interface IOrder {
    id: number;
    customer: ICustomer;
    status: string;
    quotedOn?: Date;
    orderedOn?: Date;
    deliverBy?: Date;
    items: IItem[];
    total: number;
    warn?: boolean;
}
