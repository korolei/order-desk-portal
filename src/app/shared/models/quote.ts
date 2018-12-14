import {ICustomer} from "../interfaces/icustomer";
import {IItem} from "../interfaces/iitem";
import {IQuote} from "../interfaces/iquote";

export class Quote implements IQuote{
    id: number;
    customer: ICustomer;
    status: string;
    quotedOn?: Date;
    items: IItem[];
    total: number;
    warn?: boolean;
    color: string;

    constructor(ord: IQuote)
    {
        this.id = ord.id;
        this.customer = ord.customer;
        this.status = ord.status;
        this.quotedOn = ord.quotedOn;
        this.items = ord.items;
        this.total = ord.total;
        this.warn = ord.warn;
        this.color = ord.warn ? "red" : "black";
    }
}

