
import { Entity } from "./entity";
import { Address, IAddress } from "./address";

export class ILocation extends Entity {
    public id:number;
    public address: IAddress;
}

export class Location extends Entity{
    public id: number;
    public address:Address;

    constructor(loc: ILocation) {
        super(loc.id);
        this.address = loc.address ? new Address(loc.address) : null;
    }

    public toString(): string{
        return this.address ? (
            this.address.street + ', ' + 
            this.address.city + ', ' + 
            this.address.state + ' ' + 
            this.address.zip + ' ' + 
            this.address.country +
         ' | Id #:' + this.id)
    .trim().replace(', ,', ',') : "N/A";
    }
}