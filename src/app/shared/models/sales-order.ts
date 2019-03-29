import {Entity, IEntity} from "./entity";
import { IAddress } from "./address";
import {IOrderItem, OrderItem} from "./order-item";

export interface ISalesOrder extends IEntity {
  currencyCode: string;
  customerPO: number;
  deliveryAddress: IAddress;
  orderNumber: number;
  status: string;
  owner?: string;
  total: string;
  totalRaw: number;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  postalAddress: IAddress;
  shiptoBP: number;
  shiptoBPName: string;
  soldtoBP: number;
  soldtoBPName: string;
  flags: number;
  intSalesRepCode: number;
  intSalesRepName: string;
  extSalesRepCode: number;
  extSalesRepName: string;
  orderOrigin: string;
  orderType: string;
  orderTypeDescr: string;
  salesOffice: string;
  shipToContact: string;
  intHeaderText: string;
  salesOrderLines: IOrderItem[];
}

export class SalesOrder extends Entity{
  public currencyCode: string;
  public customerPO: number;
  public deliveryAddress: IAddress;
  public orderNumber: number;
  public status: string;
  public owner?: string;
  public total: string;
  public totalAmt: number;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: IAddress;
  public shiptoBP: number;
  public shiptoBPName: string;
  public soldtoBP: number;
  public soldtoBPName: string;
  public flags: number;
  public intSalesRepCode: number;
  public intSalesRepName: string;
  public extSalesRepCode: number;
  public extSalesRepName: string;
  public orderOrigin: string;
  public orderType: string;
  public orderTypeDescr: string;
  public salesOffice: string;
  public shipToContact: string;
  public headerText: string;
  public salesOrderLines: OrderItem[] = [];

  constructor(so: ISalesOrder)
    {
      super(so.orderNumber);
      this.currencyCode = so.currencyCode;
      this.customerPO = so.customerPO;
      this.deliveryAddress = so.deliveryAddress;
      this.plannedDeliveryDate = so.plannedDeliveryDate;
      this.plannedReceiptDate = so.plannedReceiptDate;
      this.postalAddress = so.postalAddress;
      this.status = so.status;
      this.orderNumber = so.orderNumber;
      this.shiptoBP = so.shiptoBP;
      this.shiptoBPName = so.shiptoBPName;
      this.soldtoBP = so.soldtoBP;
      this.soldtoBPName = so.soldtoBPName;
      this.total = so.total;
      this.totalAmt = so.totalRaw;
      this.flags = so.flags;
      this.intSalesRepCode = so.intSalesRepCode;
      this.intSalesRepName = so.intSalesRepName;
      this.extSalesRepCode = so.extSalesRepCode;
      this.extSalesRepName = so.extSalesRepName;
      this.orderOrigin = so.orderOrigin;
      this.orderType = so.orderType;
      this.orderTypeDescr = so.orderTypeDescr;
      this.salesOffice = so.salesOffice;
      this.shipToContact = so.shipToContact;
      this.headerText = so.intHeaderText;
      this.owner = so.extSalesRepName ? so.extSalesRepName : so.intSalesRepName;
      this.salesOrderLines = so.salesOrderLines ? so.salesOrderLines.map(ql => new OrderItem(ql)): [];
    }
}

