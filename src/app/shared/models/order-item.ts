import {Entity, IEntity} from "./entity";
import { IAddress } from "./address";

export interface IOrderItem {
  amount: number;
  item: number;
  description: string;
  deliveryAddress: IAddress;
  plannedDeliveryDate: Date;
  plannedReceiptDate: Date;
  orderNumber: number;
  price: number;
  quantity: number;
  position: number;
  unit: string;
  discount: number;
  configuration: string;
  warehouse: string;
  warehouseDescr: string;
  internalText: string;
  externalText: string;
  availableDate: Date;
  availableMsg: string;
}

export class OrderItem extends Entity{
  public amount: number;
  public item: number;
  public description: string;
  public deliveryAddress: IAddress;
  public plannedDeliveryDate: Date;
  public plannedReceiptDate: Date;
  public orderNumber: number;
  public price: number;
  public quantity: number;
  public position: number;
  public unit: string;
  public discount: number;
  public configuration: string;
  public warehouse: string;
  public warehouseDescr: string;
  public internalText: string;
  public externalText: string;
  public availableDate: Date;
  public availableMsg: string;

  constructor(oi:IOrderItem){
    super(oi.item);
    this.amount = oi.amount;
    this.item = oi.item;
    this.description = oi.description;
    this.deliveryAddress = oi.deliveryAddress;
    this.plannedDeliveryDate = oi.plannedDeliveryDate;
    this.plannedReceiptDate = oi.plannedReceiptDate;
    this.orderNumber = oi.orderNumber;
    this.price = oi.price;
    this.quantity = oi.quantity;
    this.position = oi.position;
    this.unit = oi.unit;
    this.discount = oi.discount;
    this.configuration = oi.configuration;
    this.warehouse = oi.warehouse;
    this.warehouseDescr = oi.warehouseDescr;
    this.internalText = oi.internalText;
    this.externalText = oi.externalText;
    this.availableDate = oi.availableDate;
    this.availableMsg = oi.availableMsg;
  }
}

