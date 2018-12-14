import {Urgency} from "../../shared/enums/urgency.enum";
import {CaseManagementStatus} from "../../shared/enums/case-management-status.enum";
import {Entity} from "../../shared/models/entity";

export class CaseManagement extends  Entity{
  customerId:number;
  ticketNumber: number;
  dateOpened: Date;
  urgency: Urgency;
  status: CaseManagementStatus;
}
