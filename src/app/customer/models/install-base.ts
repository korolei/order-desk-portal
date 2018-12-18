import {Entity} from "../../shared/models/entity";

export class InstallBase extends  Entity{
  machineNumber: number;
  dateInstalled: Date;
  customerId:number;
}
