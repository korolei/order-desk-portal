import {Entity, IEntity} from "../../shared/models/entity";
import {INote, Note} from "../../shared/models/note";

export class CaseManagement extends  Entity{
  public contact_id:number;
  public ticketNumber: number;
  public dateOpened: Date;
  public urgency: string;
  public status: string;
  public note: Note;

  constructor(cm: ICaseManagement){
    super(cm.id);
    this.contact_id = cm.contact_id;
    this.ticketNumber = cm.ticketNumber;
    this.dateOpened = new Date(cm.dateOpened);
    this.urgency = cm.urgency;
    this.status = cm.status;
    this.note = cm.note;
  }
}

export interface ICaseManagement extends IEntity{
  contact_id:number;
  ticketNumber: number;
  dateOpened: string;
  urgency: string;
  status: string;
  note: INote;
}
