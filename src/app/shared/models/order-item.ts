import {Entity, IEntity} from "./entity";
import { IAddress, Address } from "./address";

export interface IOrderItem{
  id?: number;
  amount: number;
  item: number;
  itemDescription: string;
  lineDeliveryAddress: IAddress;
  linePlannedDeliveryDate: string;
  linePlannedReceiptDate: string;
  orderNumber: number;
  price: number;
  quantity: number;
  salesPosition: number;
  unit: string;
}

export class OrderItem extends Entity{
  public id: number;
  public amount: number;
  public item: number;
  public itemDescription: string;
  public lineDeliveryAddress: Address;
  public linePlannedDeliveryDate: Date;
  public linePlannedReceiptDate: Date;
  public orderNumber: number;
  public price: number;
  public quantity: number;
  public salesPosition: number;
  public unit: string;

  constructor(oi:IOrderItem){
    super(oi.id?oi.id:oi.item);
    this.amount = oi.amount;
    this.item = oi.item;
    this.itemDescription = oi.itemDescription;
    this.lineDeliveryAddress = oi.lineDeliveryAddress;
    this.linePlannedDeliveryDate = new Date(oi.linePlannedDeliveryDate);
    this.linePlannedReceiptDate = new Date(oi.linePlannedReceiptDate);
    this.orderNumber = oi.orderNumber;
    this.price = oi.price;
    this.quantity = oi.quantity;
    this.salesPosition = oi.salesPosition;
    this.unit = oi.unit;
  }
}

