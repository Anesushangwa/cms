import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from  '@angular/router';
import { DocumentsComponent } from './app/documents/documents.component';
import { DocumentListComponent } from './app/documents/document-list/document-list.component';
import { ContactsComponent } from './app/contacts/contacts.component';

const appRoutes:  Routes =[
  //directed to  difult option
   { path: '', redirectTo: '/documents'

},
{path: 'documents', component: DocumentsComponent},
{path: 'messages', component: DocumentListComponent },
{path: 'contacts', component: ContactsComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   [RouterModule.forRoot(appRoutes)]
  ]
})
export class AppRoutingModule { }
