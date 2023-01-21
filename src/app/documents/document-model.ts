export class Document{
    public document_id: number;
    public document_name: string;
    public description: string;
    public documentUrl:  string;
    public children_doc: string;
   
 
    constructor(document_id:number, document_name: string, description: string,documentUrl: string, children_doc: string){
     this.document_id = document_id;
     this.document_name = document_name;
     this.description =description;
     this.documentUrl = documentUrl;
     this.children_doc = children_doc;
    }

}