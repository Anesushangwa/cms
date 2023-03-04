import { Component, EventEmitter, Output,OnDestroy,OnInit } from '@angular/core';
import { Contact }  from '../contact.model';
import {ContactService} from '../contact.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent   implements OnInit, OnDestroy  {
// contacts: Contact[] = [
//     new Contact('1','R.kent Jackson','jacksonk@byui.edu','208-496-3771', '../assets/image/jacksonk.jpg',null),
//     new Contact('2','esu Barzee','barzeer@byui.edu','208-496-3768','../assets/image/barzeer.jpg',null)

// ];

// contactP = [{contact_id:1 , name:'R.kent Jackson' ,email:'jacksonk@byui.edu', phone_Number:208-496-3771 ,imageUrl:'../assets/image/jacksonk.jpg'  ,group:'null' },

// {contact_id:1 , name:'R.kent Jackson' ,email:'jacksonk@byui.edu', phone_Number:208-496-3771 ,imageUrl:'../assets/image/jacksonk.jpg'  ,group:'null' }];
contacts: Contact[] = [];
subscription!: Subscription;
term: string = '';
@Output() selectedContactEvent = new EventEmitter<Contact>();



constructor(private contactService: ContactService){}
ngOnInit(): void {
  this.contacts = this.contactService.getContacts();
  this.subscription = this.contactService.contactListChangedEvent.subscribe(
    (contacts: Contact[]) => {
      this.contacts = contacts;
    }
  );
}

// @Output()  selectedContactEven: EventEmitter<Contact> = new EventEmitter<Contact>();




// onSelected(contact:Contact ){
//   this.contactService.contactSelectedEvent.emit(contact);

// }

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

search(value: string) {

  this.term = value;
  
  }

}
