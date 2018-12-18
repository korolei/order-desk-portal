export interface ISaleItem {
  id: number;
  amount: number;
  item: string;
  itemDescription:string;
  lineDeliveryAddress:string;
  linePlannedDeliveryDate:string;
  linePlannedReceiptDate:string;
  orderNumber:string;
  price: number;
  quantity: number;
  salesPosition: number;
  unit:string;
}
