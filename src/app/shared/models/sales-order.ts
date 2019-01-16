import {Entity} from "./entity";
import {IQuotation, Quotation} from "./quotation";
import { IAddress } from "./address";
import { OrderFlags } from "src/app/core/enums/order-flags.enum";
import { OrderStatus } from "src/app/core/enums/order-status.enum";

export interface ISalesOrder {
  currencyCode: string;
  customerPO: number;
  deliveryAddress: IAddress;
  orderNumber: number;
  status: string;
  owner?: string;
  total: number;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  postalAddress: IAddress;
  shiptoBP: number;
  shiptoBPName: string;
  soldtoBP: number;
  soldtoBPName: string;
  flags: OrderFlags;
  intSalesRepCode: number;
  intSalesRepName: string;
  extSalesRepCode: number;
  extSalesRepName: string;
  orderOrigin: string;
  orderType: string;
  salesOffice: string;
  shipToContact: string;
  headerText: string;
  quotationLines: IQuotation[];
}

export class SalesOrder extends Entity{
  public currencyCode: string;
  public customerPO: number;
  public deliveryAddress: IAddress;
  public orderNumber: number;
  public status: string;
  public owner?: string;
  public total: number;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public postalAddress: IAddress;
  public shiptoBP: number;
  public shiptoBPName: string;
  public soldtoBP: number;
  public soldtoBPName: string;
  public flags: OrderFlags;
  public intSalesRepCode: number;
  public intSalesRepName: string;
  public extSalesRepCode: number;
  public extSalesRepName: string;
  public orderOrigin: string;
  public orderType: string;
  public salesOffice: string;
  public shipToContact: string;
  public headerText: string;
  public warn: boolean;
  public quotationLines: Quotation[] = [];

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
      this.flags = so.flags;
      this.intSalesRepCode = so.intSalesRepCode;
      this.intSalesRepName = so.intSalesRepName;
      this.owner = so.owner?so.owner:so.intSalesRepName;
      this.extSalesRepCode = so.extSalesRepCode;
      this.extSalesRepName = so.extSalesRepName;
      this.orderOrigin = so.orderOrigin;
      this.orderType = so.orderType;
      this.salesOffice = so.salesOffice;
      this.shipToContact = so.shipToContact;
      this.headerText = so.headerText;
      this.warn = this.status == "Credit Card" || this.status == "Internal Hold" || this.status == "Modified" || this.status == "Blocked";
      this.quotationLines = so.quotationLines ? so.quotationLines.map(ql => new Quotation(ql)): [];
    }
}

