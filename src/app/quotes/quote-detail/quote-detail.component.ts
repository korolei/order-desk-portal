import {Component, OnDestroy, OnInit} from '@angular/core';
import {IQuotation, Quotation} from 'src/app/shared/models/quotation';
import {ActivatedRoute} from '@angular/router';
import {AppService} from "../../app.service";
import {AppSettings} from "../../core/app-settings";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: [
    '../../shared/styles/sale-details.css'
  ]
})
export class QuoteDetailComponent implements OnInit, OnDestroy {
  quoteId: number;
  quote: Quotation;
  private sub: any;
  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {
      this.quoteId = +params['id'];
      this.appService.getData<IQuotation>(`${AppSettings.openQuotationsApi}/${this.quoteId}`)
        .subscribe(data => this.quote = new Quotation(data))
        });
    }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
