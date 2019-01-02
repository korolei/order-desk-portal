import {Entity} from "./entity";
import {IQuotation, Quotation} from "./quotation";
import { Address } from "./address";
import { IOrderItem, OrderItem } from "./order-item";

export interface ISalesOrder {
  id?: number;
  //creationDate: Date;
  currencyCode: string;
  customerPO: number;
  deliveryAddress: Address;
  owner: string;
  plannedDeliveryDate: string;
  plannedReceiptDate: string;
  postalAddress: Address;
  orderStatus: string;
  orderNumber: number;
  shiptoBP: number;
  shiptoBPName: string;
  soldtoBP: number;
  soldtoBPName: string;
  orderTotalUSD?: number;
  warn?: boolean;
  salesOrderLines: IOrderItem[];
}

export class SalesOrder extends Entity{
  //public creationDate: Date;
  public currencyCode: string;
  public customerPO: number;
  public deliveryAddress: Address;
  public owner: string;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: Address;
  public orderStatus: string;
  public orderNumber: number;
  public shiptoBP: number;
  public shiptoBPName: string;
  public soldtoBP: number;
  public soldtoBPName: string;
  public orderTotalUSD?: number;
  public warn?: boolean;
  public salesOrderLines: OrderItem[] = [];

  constructor(so: ISalesOrder)
    {
      super(so.id?so.id:so.orderNumber);
      //this.creationDate = so.creationDate;
      this.currencyCode = so.currencyCode;
      this.customerPO = so.customerPO;
      this.deliveryAddress = so.deliveryAddress;
      this.plannedDeliveryDate = new Date(so.plannedDeliveryDate);
      this.plannedReceiptDate = new Date(so.plannedReceiptDate);
      this.postalAddress = so.postalAddress;
      this.orderStatus = so.orderStatus;
      this.orderNumber = so.orderNumber;
      this.shiptoBP = so.shiptoBP;
      this.shiptoBPName = so.shiptoBPName;
      this.soldtoBP = so.soldtoBP;
      this.soldtoBPName = so.soldtoBPName;
      this.orderTotalUSD = so.orderTotalUSD;
      this.warn = so.warn;
      this.salesOrderLines = so.salesOrderLines ? so.salesOrderLines.map(ql => new OrderItem(ql)): [];
    }
}

