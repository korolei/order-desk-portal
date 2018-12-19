import {Injectable} from '@angular/core';
import {IItem} from '../shared/interfaces/iitem';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
   items: IItem[] =
   [
  //   {
  //     id:1,
  //     hpn: 1,
  //     name: 'one',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: ['note #1','note #2']
  //   },
  //   {
  //     id:2,
  //     hpn: 2,
  //     name: 'two',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: ['']
  //   },
  //   {
  //     id:3,
  //     hpn: 3,
  //     name: 'three',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id: 4,
  //     hpn: 4,
  //     name: 'four',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id: 5,
  //     hpn: 5,
  //     name: 'five',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id: 6,
  //     hpn: 6,
  //     name: 'six',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id: 7,
  //     hpn: 7,
  //     name: 'seven',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id:8,
  //     hpn: 8,
  //     name: 'eight',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id:9,
  //     hpn: 9,
  //     name: 'nine',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   },
  //   {
  //     id: 10,
  //     hpn: 10,
  //     name: 'ten',
  //     configuration: '',
  //     qty: 1,
  //     price: 87.9,
  //     discount: 0.1,
  //     total: 79.1,
  //     leadTime: 15,
  //     warehouse: '',
  //     rushOrder: false,
  //     systemDown: false,
  //     notes: []
  //   }
   ];

  constructor() { }

  getItems() : Observable<IItem[]>
  {
    return of(this.items);
  }

  getItem(idx: number): IItem{ return this.items[idx];}
}
