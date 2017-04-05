export class User {

  constructor(
    public _id: string,
    public name: string,
    public username: string,
    public password: string,
    public email: string,
    public valid : boolean,
    public timezone : number,
    public age : number,
  ) {  }

  

}