import {Entity, IEntity} from "../../shared/models/entity";

export class InstallBase{
  serialNumber: string;
  dateInstalled: Date;
  configuration: string;
  topItem: string;
  topItemDescr: string;

  constructor(ib: IInstallBase){
      this.dateInstalled = new Date(ib.dateInstalled);
      this.serialNumber = ib.serialNumber;
      this.topItem = ib.topItem ? ib.topItem.trim() : '';
      this.topItemDescr = ib.topItemDescr ? ib.topItemDescr.trim() : '';
      this.configuration = ib.configuration;
  }
}

export interface IInstallBase{
  serialNumber: string;
  dateInstalled: string;
  configuration: string;
  topItem: string;
  topItemDescr: string;
}
