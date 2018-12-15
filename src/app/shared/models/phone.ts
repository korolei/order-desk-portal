import {IPhone} from "../interfaces/iphone";

export class Phone implements IPhone{
  areaCode: string;
  countryCode: string;
  extension: string;
  localNumber: string;
  type: string;
}
