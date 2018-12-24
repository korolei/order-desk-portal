import {Entity} from "../../shared/models/entity";
import {Note} from "../../shared/models/note";
import {INote} from "../../shared/interfaces/inote";

export class CaseManagement extends  Entity{
  public customerId:number;
  public ticketNumber: number;
  public dateOpened: Date;
  public urgency: string;
  public status: string;
  public note: Note;

  constructor(cm: ICaseManagement){
    super(cm.id);
    this.customerId = cm.customerId;
      this.ticketNumber = cm.ticketNumber;
      this.dateOpened = new Date(cm.dateOpened);
      this.urgency = cm.urgency;
      this.status = cm.status;
      this.note = cm.note;
  }
}

export interface ICaseManagement {
  id: number;
  customerId:number;
  ticketNumber: number;
  dateOpened: string;
  urgency: string;
  status: string;
  note: INote;
}
