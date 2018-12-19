import {Entity} from "./entity";
import {IOrderItem, OrderItem} from "./order-item";

export class Quotation extends Entity{
  public creationDate: Date;
  public currencyCode: string;
  public customerPO: string;
  public deliveryAddress: string;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: string;
  public quotationStatus: string;
  public quoteNumber: string;
  public shipToBP: string;
  public shipToBPName: string;
  public soldToBP: string;
  public soldToBPName: string;
  public totalUSD: number;
  public totalUSDSpecified: boolean;
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
      this.totalUSDSpecified = q.totalUSDSpecified;
      this.quotationLines = q.quotationLines.map(ql => new OrderItem(ql));
    }
}

export interface IQuotation {
  id: number;
  creationDate: Date;
  currencyCode: string;
  customerPO: string;
  deliveryAddress: string;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  postalAddress: string;
  quotationStatus: string;
  quoteNumber: string;
  shiptoBP: string;
  shiptoBPName: string;
  soldtoBP: string;
  soldtoBPName: string;
  totalUSD: number;
  totalUSDSpecified: boolean;
  quotationLines: IOrderItem[];
}

