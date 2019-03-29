

export class CaseManagement{
  public ticketNumber: number;
  public dateOpened: Date;
  public urgency: string;
  public status: string;
  public notes: string;

  constructor(cm: ICaseManagement){
    this.ticketNumber = cm.ticketNumber;
    this.dateOpened = new Date(cm.dateOpened);
    this.urgency = cm.urgency;
    this.status = cm.status;
    this.notes = cm.notes;
  }
}

export interface ICaseManagement{
  ticketNumber: number;
  dateOpened: string;
  urgency: string;
  status: string;
  notes: string;
}
