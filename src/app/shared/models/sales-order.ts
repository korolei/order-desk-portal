import {Entity} from "./entity";
import {IQuotation, Quotation} from "./quotation";

export class SalesOrder extends Entity{
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
  public quotationLines: Quotation[] = [];

  constructor(so: ISalesOrder)
    {
      super(so.id);
      this.creationDate = so.creationDate;
      this.currencyCode = so.currencyCode;
      this.customerPO = so.customerPO;
      this.deliveryAddress = so.deliveryAddress;
      this.plannedDeliveryDate = so.plannedDeliveryDate;
      this.plannedReceiptDate = so.plannedReceiptDate;
      this.postalAddress = so.postalAddress;
      this.quotationStatus = so.quotationStatus;
      this.quoteNumber = so.quoteNumber;
      this.shipToBP = so.shiptoBP;
      this.shipToBPName = so.shiptoBPName;
      this.soldToBP = so.soldtoBP;
      this.soldToBPName = so.soldtoBPName;
      this.totalUSD = so.totalUSD;
      this.totalUSDSpecified = so.totalUSDSpecified;
      this.quotationLines = so.quotationLines ? so.quotationLines.map(ql => new Quotation(ql)): [];
    }
}

export interface ISalesOrder {
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
  quotationLines: IQuotation[];
}
