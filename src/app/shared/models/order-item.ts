import {Entity, IEntity} from "./entity";

export interface IOrderItem extends IEntity {
  id: number;
  amount: number;
  item: string;
  itemDescription: string;
  lineDeliveryAddress: string;
  linePlannedDeliveryDate: Date;
  linePlannedReceiptDate: Date;
  orderNumber: string;
  price: number;
  quantity: number;
  salesPosition: number;
  unit: string;
}

export class OrderItem extends Entity{
  public id: number;
  public amount: number;
  public item: string;
  public itemDescription: string;
  public lineDeliveryAddress: string;
  public linePlannedDeliveryDate: Date;
  public linePlannedReceiptDate: Date;
  public orderNumber: string;
  public price: number;
  public quantity: number;
  public salesPosition: number;
  public unit: string;

  constructor(oi:IOrderItem){
    super(oi.id);
    this.amount = oi.amount;
    this.item = oi.item;
    this.itemDescription = oi.itemDescription;
    this.lineDeliveryAddress = oi.lineDeliveryAddress;
    this.linePlannedDeliveryDate = oi.linePlannedDeliveryDate;
    this.linePlannedReceiptDate = oi.linePlannedReceiptDate;
    this.orderNumber = oi.orderNumber;
    this.price = oi.price;
    this.quantity = oi.quantity;
    this.salesPosition = oi.salesPosition;
    this.unit = oi.unit;
  }
}

