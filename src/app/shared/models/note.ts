export interface INote {
  noteType: string;
  noteText: string;
}
export class Note {
  noteText: string;
  noteType: string;

  constructor(n:INote){
    this.noteText = n.noteText;
    this.noteType = n.noteType;
  }
}

