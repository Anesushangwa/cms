import { Injectable, EventEmitter} from '@angular/core';
import {Document} from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  selectedDocumentEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  DocumentListChangeEvent = new Subject<Document[]>();

private documents: Document [] = [];
private maxDocumentId: number;
  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
   }



  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.documents) {
      if (document.id == id) {
        return document;
      }
    
    }
      return null!;
  }
  // deleteDocument(document: Document) {
  //   if (!document) return;
  //   const pos = this.documents.indexOf(document);
  //   if (pos < 0) return;
  //   this.documents.splice(pos, 1);
  //   this.documentChangedEvent.emit(this.documents.slice());
  // }
  deleteDocument(document: Document) {
    if (!document) {
       return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
       return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
 }

   getMaxId(): number {
  let maxId = 0;

  for (const document of this.documents) {
    const currentId = Number(document.id);

    if (currentId > maxId) {
      maxId = currentId;
    }
  }

  return maxId;
}



addDocument(newDocument: Document) {
  if (!newDocument) {
    return;
  }

  this.maxDocumentId++;
  newDocument.id = `${this.maxDocumentId}`;
  this.documents.push(newDocument);

  const documentsListClone = this.documents.slice();
  this. DocumentListChangeEvent.next(documentsListClone);
}

updateDocument(original: Document,  newDocument: Document) {
  if (
    newDocument === null ||
    newDocument === undefined ||
    original === null ||
    original === undefined
  ) {
    return;
  }
  const pos = this.documents.indexOf(original);
  if (pos < 0) return;

  newDocument.id = original.id;
  this.documents[pos] =  newDocument;
  this.DocumentListChangeEvent.next(this.documents.slice());
}





 
  }


