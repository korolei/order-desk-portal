import {IOrder} from "../interfaces/iorder";
import {ICustomer} from "../interfaces/icustomer";
import {Entity} from "./entity";
import {Item} from "./item";

export class Order extends Entity{
    customer: ICustomer;
    status: string;
    quotedOn?: Date;
    orderedOn?: Date;
    deliverBy?: Date;
    items: Item[]=[];
    total: number;
    warn?: boolean;

    constructor(ord: IOrder)
    {
      super(ord.id);
        this.customer = ord.customer;
        this.status = ord.status;
        this.orderedOn = ord.orderedOn;
        this.deliverBy = ord.deliverBy;
        this.items = ord.items.map(i=> new Item(i));
        this.total = ord.total;
        this.warn = ord.warn;
    }
}
