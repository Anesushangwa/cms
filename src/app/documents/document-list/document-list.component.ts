import { Component, Output, EventEmitter } from '@angular/core';

import { Document} from '../document-model'

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  @Output()  selectedDocumentEven: EventEmitter<Document> = new EventEmitter<Document>();
  // selectedContactEven:  = new EventEmitter<Contact>();
  documents: Document[] = [
    new Document(1,'example1','example1', 'example1','null'),
    new Document(1,'example2','example2', 'example2','null'),
    new Document(1,'example3','example3', 'example3','null'),
    new Document(1,'example4','example4', 'example4','null'),
    new Document(1,'example5','example5', 'example6','null'),


];


ngOnInit(): void {}

onSelectedDocument(document: Document) {
  this.selectedDocumentEven.emit(document);
}
}
