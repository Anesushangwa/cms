import { Component, Output, EventEmitter,OnInit,OnDestroy } from '@angular/core';
import {  Subscription } from 'rxjs';

import { Document} from '../document-model'
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent  implements OnInit, OnDestroy {
  @Output()  selectedDocumentEven: EventEmitter<Document> = new EventEmitter<Document>();
  // selectedContactEven:  = new EventEmitter<Contact>();
//   documents: Document[] = [
//     new Document(1,'Maths','example1', 'example1','null'),
//     new Document(2,'Shona','example2', 'example2','null'),
//     new Document(3,'History','example3', 'example3','null'),
//     new Document(4,'English','example4', 'example4','null'),
//     new Document(5,'Economics','example5', 'example6','null'),


// ];

Subscription!: Subscription;

documents: Document[] = [];

constructor(private documentService: DocumentService) {}
ngOnInit(): void {
  this.documents = this.documentService.getDocuments();
  this.Subscription = this.documentService. DocumentListChangeEvent.subscribe(
    (documents: Document[]) => {
      this.documents = documents;
    }
  );
}

// onSelectedDocument(document: Document) {
//   this.documentService.selectedDocumentEvent.emit(document);
// }

ngOnDestroy(): void {
  this.Subscription.unsubscribe();
}
}
