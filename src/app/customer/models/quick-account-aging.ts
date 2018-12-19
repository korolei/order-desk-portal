import {Entity} from "../../shared/models/entity";

export class QuickAccountAging extends Entity{
  public agingTerm: string;
  public amount: number;

  constructor(qaa: IQuickAccountAging){
    super(qaa.id);
    this.agingTerm = qaa.agingTerm,
      this.amount = qaa.amount
  }
}

export interface IQuickAccountAging {
  id:number;
  agingTerm: string;
  amount: number;
}
