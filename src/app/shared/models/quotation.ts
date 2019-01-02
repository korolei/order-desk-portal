import {Entity} from "./entity";
import {IOrderItem, OrderItem} from "./order-item";
import { Address } from "./address";

export interface IQuotation {
  id: number;
  creationDate: Date;
  currencyCode: string;
  customerPO: string;
  deliveryAddress: Address;
  owner: string;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  postalAddress: Address;
  quotationStatus: string;
  quoteNumber: string;
  shiptoBP: string;
  shiptoBPName: string;
  soldtoBP: string;
  soldtoBPName: string;
  totalUSD?: number;
  warn?: boolean;
  quotationLines: IOrderItem[];
}

export class Quotation extends Entity{
  public creationDate: Date;
  public currencyCode: string;
  public customerPO: string;
  public deliveryAddress: Address;
  public owner: string;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: Address;
  public quotationStatus: string;
  public quoteNumber: string;
  public shipToBP: string;
  public shipToBPName: string;
  public soldToBP: string;
  public soldToBPName: string;
  public totalUSD?: number;
  public warn?: boolean;
  public quotationLines: OrderItem[]=[];

    constructor(q: IQuotation)
    {
      super(q.id);
      this.creationDate = q.creationDate;
      this.currencyCode = q.currencyCode;
      this.customerPO = q.customerPO;
      this.deliveryAddress = q.deliveryAddress;
      this.plannedDeliveryDate = q.plannedDeliveryDate;
      this.plannedReceiptDate = q.plannedReceiptDate;
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


