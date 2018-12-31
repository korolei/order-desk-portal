export interface IEntity{
  id: number;
}

export class Entity implements IEntity{
  id: number;
  constructor(id: number){
    this.id = id
  }
}
