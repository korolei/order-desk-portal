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
  public totalUSDSpecified: number;
  public quotationLines: Quotation[] = [];

    constructor(ord: ISalesOrder)
    {
      super(ord.id);
      this.creationDate;
      this.currencyCode;
      this.customerPO;
      this.deliveryAddress;
      this.plannedDeliveryDate;
      this.plannedReceiptDate;
      this.postalAddress;
      this.quotationStatus;
      this.quoteNumber;
      this.shipToBP;
      this.shipToBPName;
      this.soldToBP;
      this.soldToBPName;
      this.totalUSD;
      this.totalUSDSpecified;
      this.quotationLines;
    }
}

export interface ISalesOrder {
  id: number;
  creationDate;
  currencyCode: string;
  customerPO: string;
  deliveryAddress: string;
  plannedDeliveryDate;
  plannedReceiptDate;
  postalAddress: string;
  quotationStatus: string;
  quoteNumber: string;
  shiptoBP: string;
  shiptoBPName: string;
  soldtoBP: string;
  soldtoBPName: string;
  totalUSD: number;
  totalUSDSpecified: number;
  quotationLines: IQuotation[];
}
