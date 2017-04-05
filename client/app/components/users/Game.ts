export class Game {

  constructor(
    public _id: string,
    public name: string,
    public characters: string [],
    public platforms: string [],
    public path: string,
    public abstract: string,
    public players: number,
    public description: string
  ) {  }

  

}