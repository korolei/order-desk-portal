import {INote} from "../interfaces/inote";
import {Entity} from "./entity";

export class Note extends Entity implements INote{
  noteText: string;
  noteType: string;
}
