import {Entity} from "../../shared/models/entity";
import {AccountAgingTerm} from "../../shared/enums/account-aging-term.enum";

export class QuickAccountAging extends Entity{
  agingTerm: AccountAgingTerm;
  amount: number;
}
