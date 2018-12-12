import {ICustomer} from "./icustomer";
import {IItem} from "./iitem";

export interface ISaleItem {
  id: number;
  customer: ICustomer;
  status: string;
  items: IItem[];
  total: number;
  warn?: boolean;
}
