// export class Messages {

//     public massage_id: number;
//     public massage_sub: string;
//     public masgtex: string;
//     public text: string;
//     public sender: string;

//     constructor(massage_id:number, massage_sub: string, masgtex:string,text:string,sender:string,){
//         this.massage_id = massage_id;
//         this.massage_sub = massage_sub;
//         this.masgtex = masgtex;
//         this.text = text;
//         this.sender = sender;

//     }
// }
export class Message {
    constructor(
      public id: string,
      public subject: string,
      public msgText: string,
      public sender: string
    ) {}
  }
  