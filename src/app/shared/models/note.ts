import {Entity, IEntity} from "./entity";

export interface INote extends IEntity {
  id: number;
  noteType: string;
  noteText: string;
}
export class Note extends Entity{
  noteText: string;
  noteType: string;

  constructor(n:INote){
    super(n.id);
    this.noteText = n.noteText,
      this.noteType = n.noteType
  }
}

