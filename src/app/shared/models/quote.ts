import {IQuote} from "../interfaces/iquote";
import {Entity} from "./entity";
import {Customer} from "./customer";
import {Item} from "./item";

export class Quote extends Entity{
    id: number;
    customer: Customer;
    status: string;
    quotedOn?: Date;
    items: Item[]=[];
    total: number;
    warn?: boolean;

    constructor(q: IQuote)
    {
      super(q.id);
        this.customer = q.customer;
        this.status = q.status;
        this.quotedOn = q.quotedOn;
        this.items = q.items.map(i=> new Item(i));
        this.total = q.total;
        this.warn = q.warn;
    }
}

