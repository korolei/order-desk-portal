import {Component, OnInit} from '@angular/core';
import {IQuotation, Quotation} from 'src/app/shared/models/quotation';
import {AppSettings} from "../../core/app-settings";
import {AppService} from "../../app.service";

// @ts-ignore
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styles: []
})
export class QuotesComponent implements OnInit {
  quotes: Quotation[];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getData<IQuotation[]>(AppSettings.openQuotationsApi)
      .subscribe(data => {this.quotes = (data as IQuotation[])
        .map(item => new Quotation(item as IQuotation));
      });
  }
}
