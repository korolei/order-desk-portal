import {Entity, IEntity} from "../../shared/models/entity";

export class InstallBase extends  Entity{
  public machineNumber: number;
  public dateInstalled: Date;
  public customerId:number;

  constructor(ib: IInstallBase){
    super(ib.id);
    this.customerId = ib.customerId,
      this.dateInstalled = new Date(ib.dateInstalled),
      this.machineNumber = ib.machineNumber
  }
}

export interface IInstallBase extends IEntity{
  machineNumber: number;
  dateInstalled: string;
  customerId:number;
}
