import {Entity} from "./entity";
import {IOrderItem, OrderItem} from "./order-item";
import { IAddress } from "./address";
import { OrderFlags } from "src/app/core/enums/order-flags.enum";
import { OrderStatus } from "src/app/core/enums/order-status.enum";

export interface IQuotation {
  //id: number;
  creationDate: Date;
  currencyCode: string;
  customerPO: number;
  deliveryAddress: IAddress;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  postalAddress: IAddress;
  status: string;
  quoteNumber: number;
  shiptoBP: number;
  shiptoBPName: string;
  soldtoBP: number;
  soldtoBPName: string;
  total: number;
  flags: OrderFlags;
  intSalesRepCode: number;
  intSalesRepName: string;
  extSalesRepCode: number;
  extSalesRepName: string;
  orderOrigin: string;
  orderType: string;
  salesOffice: string;
  shipToContact: string;
  expiryDate: Date;
  headerText: string;
  quotationLines: IOrderItem[];
}

export class Quotation extends Entity{
  public creationDate: Date;
  public currencyCode: string;
  public customerPO: number;
  public deliveryAddress: IAddress;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: IAddress;
  public status: string;
  public quoteNumber: number;
  public shiptoBP: number;
  public shiptoBPName: string;
  public soldtoBP: number;
  public soldtoBPName: string;
  public total: number;
  public flags: OrderFlags;
  public intSalesRepCode: number;
  public intSalesRepName: string;
  public extSalesRepCode: number;
  public extSalesRepName: string;
  public orderOrigin: string;
  public orderType: string;
  public salesOffice: string;
  public shipToContact: string;
  public expiryDate: Date;
  public headerText: string;
  public warn:boolean;
  public quotationLines: OrderItem[]=[];

    constructor(q: IQuotation)
    {
      super(q.quoteNumber);
      this.creationDate = q.creationDate;
      this.currencyCode = q.currencyCode;
      this.customerPO = q.customerPO;
      this.deliveryAddress = q.deliveryAddress;
      this.plannedDeliveryDate = q.plannedDeliveryDate;
      this.plannedReceiptDate = q.plannedReceiptDate;
      this.postalAddress = q.postalAddress;
      this.status = q.status;
      this.quoteNumber = q.quoteNumber;
      this.shiptoBP = q.shiptoBP;
      this.shiptoBPName = q.shiptoBPName;
      this.soldtoBP = q.soldtoBP;
      this.soldtoBPName = q.soldtoBPName;
      this.total = q.total;
      this.flags = q.flags;
      this.intSalesRepCode = q.intSalesRepCode;
      this.intSalesRepName = q.intSalesRepName;
      this.expiryDate = q.expiryDate;
      this.extSalesRepCode = q.extSalesRepCode;
      this.extSalesRepName = q.extSalesRepName;
      this.orderOrigin = q.orderOrigin;
      this.orderType = q.orderType;
      this.salesOffice = q.salesOffice;
      this.shipToContact = q.shipToContact;
      this.headerText = q.headerText;
      this.warn = this.status == "Credit Card" || this.status == "Modified";
      this.quotationLines = q.quotationLines ? q.quotationLines.map(ql => new OrderItem(ql)) : [];
    }
}


