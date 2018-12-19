import {Entity} from "../../shared/models/entity";

export class InstallBase extends  Entity{
  public machineNumber: number;
  public dateInstalled: Date;
  public customerId:number;

  constructor(ib: IInstallBase){
    super(ib.id);
    this.customerId = ib.customerId,
      this.dateInstalled = ib.dateInstalled,
      this.customerId = ib.customerId
  }
}

export interface IInstallBase {
  id:number;
  machineNumber: number;
  dateInstalled: Date;
  customerId:number;
}
