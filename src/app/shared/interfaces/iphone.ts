import { PhoneType } from "../enums/phone-type.enum";

export interface IPhone {
    type?: PhoneType;
    countryCode?: number;
    areaCode: number;
    localNumber: number;
    extension?: number;
}
