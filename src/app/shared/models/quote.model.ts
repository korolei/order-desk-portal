import { IOrder } from "../interfaces/iorder";
import { ICustomer } from "../interfaces/icustomer";
import { IItem } from "../interfaces/iitem";

export class Quote implements IOrder{
    id: number;    
    customer: ICustomer;
    status: string;
    quotedOn?: Date;
    orderedOn?: Date;
    deliverBy?: Date;
    items: IItem[];
    total: number;
    warn?: boolean;
    color: string;
    
    constructor(ord: IOrder)
    {
        this.id = ord.id;
        this.customer = ord.customer;
        this.status = ord.status;
        this.quotedOn = ord.quotedOn;
        this.orderedOn = ord.orderedOn;
        this.deliverBy = ord.deliverBy;
        this.items = ord.items;
        this.total = ord.total;
        this.warn = ord.warn;
        this.color = ord.warn ? "red" : "black";    
    }
}

