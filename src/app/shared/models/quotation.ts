import {Entity} from "./entity";
import {IOrderItem, OrderItem} from "./order-item";
import { Address } from "./address";

export interface IQuotation {
  id?: number;
  creationDate: string;
  currencyCode: string;
  customerPO: number;
  deliveryAddress: Address;
  owner: string;
  plannedDeliveryDate: string;
  plannedReceiptDate: string;
  postalAddress: Address;
  quotationStatus: string;
  quoteNumber: number;
  shiptoBP: number;
  shiptoBPName: string;
  soldtoBP: number;
  soldtoBPName: string;
  totalUSD?: number;
  warn?: boolean;
  quotationLines: IOrderItem[];
}

export class Quotation extends Entity{
  public creationDate: Date;
  public currencyCode: string;
  public customerPO: number;
  public deliveryAddress: Address;
  public owner: string;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: Address;
  public quotationStatus: string;
  public quoteNumber: number;
  public shipToBP: number;
  public shipToBPName: string;
  public soldToBP: number;
  public soldToBPName: string;
  public totalUSD?: number;
  public warn?: boolean;
  public quotationLines: OrderItem[]=[];

    constructor(q: IQuotation)
    {
      super(q.id?q.id:q.quoteNumber);
      this.creationDate = new Date(q.creationDate);
      this.currencyCode = q.currencyCode;
      this.customerPO = q.customerPO;
      this.deliveryAddress = q.deliveryAddress;
      this.plannedDeliveryDate = new Date(q.plannedDeliveryDate);
      this.plannedReceiptDate = new Date(q.plannedReceiptDate);
      this.postalAddress = q.postalAddress;
      this.quotationStatus = q.quotationStatus;
      this.quoteNumber = q.quoteNumber;
      this.shipToBP = q.shiptoBP;
      this.shipToBPName = q.shiptoBPName;
      this.soldToBP = q.shiptoBP;
      this.soldToBPName = q.soldtoBPName;
      this.totalUSD = q.totalUSD;
      this.warn = q.warn;
      this.quotationLines = q.quotationLines ? q.quotationLines.map(ql => new OrderItem(ql)) : [];
    }
}


