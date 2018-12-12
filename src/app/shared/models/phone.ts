import {IPhone} from "../interfaces/iphone";
import {PhoneType} from "../enums/phone-type.enum";

export class Phone implements IPhone{
  areaCode: number;
  countryCode: number;
  extension: number;
  localNumber: number;
  type: PhoneType;
}
