import {IItem} from "../interfaces/iitem";
import {Entity} from "./entity";
import {Note} from "./note";

export class Item extends Entity{
  configuration: string;
  discount: number;
  hpn: number;
  leadTime: number;
  name: string;
  notes: Note[] = [];
  price: number;
  qty: number;
  rushOrder: boolean;
  systemDown: boolean;
  total: number;
  warehouse: string;

  constructor(i:IItem){
    super(i.id);
    this.configuration = i.configuration,
      this.discount = i.discount,
      this.hpn = i.hpn,
      this.leadTime = i.leadTime,
      this.notes = i.notes.map(n=> new Note(n)),
      this.price = i.price,
      this.qty = i.qty,
      this.rushOrder = i.rushOrder,
      this.systemDown = i.systemDown,
      this.total = i.total,
      this.warehouse = i.warehouse
  }
}
