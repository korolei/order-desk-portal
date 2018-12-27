import {Pipe, PipeTransform} from '@angular/core';
import {IAddress} from "../models/address";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: IAddress, arg?: any): string {
    return value.street + ", " + value.zip + " "
    + value.city
    + ", " + value.state + " " + value.country;
  }

}
