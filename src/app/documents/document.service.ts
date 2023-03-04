import { Injectable, EventEmitter} from '@angular/core';
import {Document} from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  selectedDocumentEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  DocumentListChangeEvent = new Subject<Document[]>();

// private documents: Document [] = [];
// private maxDocumentId: number;
//   constructor() {
//     this.documents = MOCKDOCUMENTS;
//     this.maxDocumentId = this.getMaxId();
//    }


   private documentsUrl =
   'https://cms2023-e7639-default-rtdb.firebaseio.com/documents.json';
 private documents: Document[] = [];
 private maxDocumentId!: number;

 constructor(private http: HttpClient) {}



  // getDocuments(): Document[] {
  //   return this.documents.slice();
  // }

  //#region "Firebase"
  // GET REQUEST
  getDocuments(): Document[] {
    this.http
      .get<Document[]>(this.documentsUrl)
      .subscribe((docs: Document[]) => {
        this.documents = docs;
        this.maxDocumentId = this.getMaxId();
        this.documents.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.documentChangedEvent.next(this.documents.slice());
      });

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
//   deleteDocument(document: Document) {
//     if (!document) {
//        return;
//     }
//     const pos = this.documents.indexOf(document);
//     if (pos < 0) {
//        return;
//     }
//     this.documents.splice(pos, 1);
//     this.documentChangedEvent.emit(this.documents.slice());
//  }

deleteDocument(document: Document) {
  if (!document) return;
  const pos = this.documents.indexOf(document);
  if (pos < 0) return;
  this.documents.splice(pos, 1);
  this.storeDocuments();
}


  // PUT REQUEST
  storeDocuments() {
    this.http
      .put(this.documentsUrl, JSON.stringify(this.documents), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .subscribe(() => {
        this.documents.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.documentChangedEvent.next(this.documents.slice());
      });
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



  //#region "CRUD"
  addDocument(newDoc: Document) {
    if (newDoc === null || newDoc === undefined) return;
    this.maxDocumentId++;
    newDoc.id = `${this.maxDocumentId}`;
    this.documents.push(newDoc);
    this.storeDocuments();
  }
  
  updateDocument(original: Document, newDoc: Document) {
    if (
      newDoc === null ||
      newDoc === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.documents.indexOf(original);
    if (pos < 0) return;

    newDoc.id = original.id;
    this.documents[pos] = newDoc;
    this.storeDocuments();
  }





 
  }


