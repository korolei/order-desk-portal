import {ISaleItem} from "./isale-item";

export interface IOrder extends ISaleItem {
    orderedOn?: Date;
    deliverBy?: Date;
}
