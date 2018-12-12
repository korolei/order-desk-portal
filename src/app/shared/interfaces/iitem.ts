export interface IItem {
  id: number;
  hpn: number;
  name: string;
  configuration: string;
  qty: number;
  price: number;
  discount: number;
  total: number;
  leadTime: number;
  warehouse: string;
  rushOrder: boolean;
  systemDown: boolean;
  notes: string[]
}
