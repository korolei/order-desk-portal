
export interface ISalesRegion{
  name: string;
  description: string;
}

export class SalesRegion{
  public code: string;
  public name: string;

  constructor(re: ISalesRegion){
    this.code = re.name;
    this.name = re.description;
  }
}
