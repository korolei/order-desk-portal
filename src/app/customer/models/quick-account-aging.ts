import {Entity} from "../../shared/models/entity";

export class QuickAccountAging extends Entity{
  public agingTerm: string;
  public amount: number;
  public currencyCode: string;

  constructor(qaa: IQuickAccountAging){
    super(qaa.id);
    this.agingTerm = qaa.agingTerm,
      this.amount = qaa.amount,
      this.currencyCode = qaa.currencyCode
  }
}

export interface IQuickAccountAging {
  id:number;
  agingTerm: string;
  amount: number;
  currencyCode: string;
}
