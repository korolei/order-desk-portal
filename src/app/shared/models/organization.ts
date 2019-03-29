import {Entity, IEntity} from "./entity";
import { ILocation, Location } from "./location";

export interface IOrganization extends IEntity {
  id: number;
  bpName: string;
  bpNumber: string;
  locations: ILocation[];
}

export class Organization extends Entity{
  bp_number: string;
  bp_name: string;
  locations: Location[];

  constructor(org: IOrganization){
    super(org.id || 0);
    this.bp_name = org.bpName || "";
    this.bp_number = org.bpNumber || "";
    this.locations = org.locations ? org.locations.map(a=> new Location(a)) : [];
  }
}


