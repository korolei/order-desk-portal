import {ISaleItem} from "./isale-item";

export interface IQuote extends ISaleItem {
  quotedOn?: Date;
}
