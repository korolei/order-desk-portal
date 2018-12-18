import {INote} from "../interfaces/inote";
import {Entity} from "./entity";

export class Note extends Entity{
  noteText: string;
  noteType: string;

  constructor(n:INote){
    super(n.id);
    this.noteText = n.noteText,
      this.noteType = n.noteType
  }
}
