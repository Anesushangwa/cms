export class Contact {
   public contact_id: number;
   public name: string;
   public email: string;
   public phone_Number: number;
   public imageUrl:  string;
   public group: string;

   constructor(contact:number, name: string, email: string, phone_number: number,imagUrl: string,group: string){
    this.contact_id = contact;
    this.name = name;
    this.email = email;
    this.phone_Number = phone_number;
    this.imageUrl = imagUrl;
    this.group = group;
   
   }
}

