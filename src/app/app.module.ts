import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessageItemComponent } from './massages/message-item/message-item.component';
import { MessageEditComponent } from './massages/message-edit/message-edit.component';
import { MessageListComponent } from './massages/message-list/message-list.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DropdownDirective } from './header/dropDown.directive';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';
import {DndModule} from 'ng2-dnd';
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';

import { HttpClientModule } from '@angular/common/http';


// import { ContactServiceComponent } from './contacts/contact.service.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactItemComponent,
    DocumentsComponent,
    MessageItemComponent,
    MessageEditComponent,
    MessageListComponent,
    DocumentDetailComponent,
    DocumentItemComponent,
    DocumentListComponent,
    DropdownDirective,
    DocumentEditComponent,
    ContactsEditComponent,
    ContactsFilterPipe,
  
    // ContactServiceComponent 
   
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DndModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
