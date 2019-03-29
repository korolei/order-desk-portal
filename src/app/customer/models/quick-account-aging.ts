

export class IQuickAccountAging{
  public name: string;
  public pending: string;
  public current: string;
  public d90: string;
  public d60: string;
  public d30: string;
  public total:string;
  public currency: string;
  public creditRating: string;
  public creditRatingDescr: string;
}

export class QuickAccountAgingRow{
  public agingTerm: string;
  public amount: string;

  constructor(term: string, amount:string){
    this.agingTerm = term;
    this.amount = amount;
  }
}

export class QuickAccountAging{
  public qAARows: QuickAccountAgingRow[]=[];
  public currency: string;
  public name: string;
  public creditRating: string;
  public creditRatingDescr: string;

  constructor(data: IQuickAccountAging){
    this.currency = data.currency || "";
    this.name = data.name || "";
    this.creditRating = data.creditRating || "";
    this.creditRatingDescr = data.creditRatingDescr || "";
    
    if(this.name.length > 0){
      this.qAARows.push(new QuickAccountAgingRow("Total", data.total));
      this.qAARows.push(new QuickAccountAgingRow("Current", data.current));
      this.qAARows.push(new QuickAccountAgingRow("1-30 Days", data.pending));
      this.qAARows.push(new QuickAccountAgingRow("31-60 Days", data.d30));
      this.qAARows.push(new QuickAccountAgingRow("61-90 Days", data.d60));
      this.qAARows.push(new QuickAccountAgingRow("Over 90 Days", data.d90));
    }
  }
}
