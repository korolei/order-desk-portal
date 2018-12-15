import {Entity} from "../../shared/models/entity";
import {Note} from "../../shared/models/note";

export class CaseManagement extends  Entity{
  customerId:number;
  ticketNumber: number;
  dateOpened: Date;
  urgency: string;
  status: string;
  note: Note;
}
