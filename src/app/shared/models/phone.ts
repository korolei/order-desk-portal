import {IPhone} from "../interfaces/iphone";
import {Entity} from "./entity";

export class Phone extends Entity{
  areaCode: string;
  countryCode: string;
  extension: string;
  localNumber: string;
  type: string;

  constructor(phone: IPhone){
    super(phone.id);
    this.areaCode = phone.areaCode,
      this.countryCode = phone.countryCode,
      this.extension = phone.extension,
      this.localNumber = phone.localNumber,
      this.type = phone.type
  }
}
