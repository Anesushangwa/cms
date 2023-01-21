import { Component } from '@angular/core';
import { Contact }  from './contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  // the ! used  remove an error on selectedContact and you may use ? it may work
  selectedContact!: Contact;

}
