import {Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild} from '@angular/core';
import {OrderItem} from "../models/order-item";
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import {AppService} from "../../app.service";

@Component({
  selector: 'app-parts-search',
  templateUrl: './parts-search.component.html',
  styleUrls: ['./parts-search.component.css']
})

export class PartsSearchComponent implements OnInit{
  @Input() items: OrderItem[]=[];
  @Output() optionSelected = new EventEmitter();
  partsCtrl = new FormControl();
  filteredParts: Observable<string[]>;
  itemIds: string[]=[];
  selectedParts: string[]=[];
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild('partInput') partInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private appService: AppService) {}

  ngOnInit(){
    this.appService.onClearAllFilters.subscribe(val=> this.clearFilter());
    this.itemIds = this.items.map(o=> o.id.toString());
    this.filteredParts = this.partsCtrl.valueChanges.pipe(
      startWith(null),
      map((part: string | null) => part ? this._filter(part) : this.itemIds.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add item only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.partsCtrl.setValue(null);
    }
  }

  remove(value: string): void {
    const index = this.selectedParts.indexOf(value);

    if (index >= 0) {
      this.selectedParts.splice(index, 1);
    }
    this.optionSelected.emit(this.selectedParts);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedParts.push(event.option.value);
    this.optionSelected.emit(this.selectedParts);
    this.partInput.nativeElement.value = '';
    this.partsCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    return this.itemIds.filter(item => item.indexOf(value) === 0);
  }
  
  clearFilter(){
    this.partsCtrl.setValue(null);
    this.partInput.nativeElement.value = '';
    this.selectedParts = [];
    this.optionSelected.emit([]);
  }
}
