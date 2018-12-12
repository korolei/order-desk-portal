import {IItem} from "../interfaces/iitem";

export class Item implements IItem{
  id: number;
  configuration: string;
  discount: number;
  hpn: number;
  leadTime: number;
  name: string;
  notes: string[];
  price: number;
  qty: number;
  rushOrder: boolean;
  systemDown: boolean;
  total: number;
  warehouse: string;
}
