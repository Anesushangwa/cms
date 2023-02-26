// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from  '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MessageListComponent } from './massages/message-list/message-list.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

const appRoutes:  Routes =[
  //directed to  difult option
   { path: '', redirectTo: '/documents', pathMatch: 'full'},
{path: 'documents', component: DocumentsComponent,
children: [
  { path: 'new', component: DocumentEditComponent },
  { path: ':id', component: DocumentDetailComponent },
  { path: ':id/edit', component: DocumentEditComponent },
],},
{path: 'messages', component: MessageListComponent },
{path: 'contacts', component: ContactsComponent,

children: [
  { path: 'new', component: ContactsEditComponent },
  { path: ':id', component: ContactDetailsComponent },
  { path: ':id/edit', component: ContactsEditComponent },
],}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   [RouterModule.forRoot(appRoutes)]
  ],
  // imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
