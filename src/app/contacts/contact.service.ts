import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();


  contactListChangedEvent = new Subject<Contact[]>();
  private maxContactId!: number;
  contacts: Contact [] = [];
  constructor() { 

    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact [] {
    return this.contacts.slice();

  }


  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id == id) {
        return contact;
      }
    
    }
      return null!;
  }
  deleteContact(contact: Contact) { 
    if (!contact) return;
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) return;
    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  getMaxId(): number {
    let maxId = 0;
    this.contacts.forEach((c) => {
      if (+c.id > maxId) maxId = +c.id;
    });
    return maxId;
  }

  addContact(newContact: Contact) {
    if (newContact === null || newContact === undefined) return;
    this.maxContactId++;
    newContact.id = `${this.maxContactId}`;
    this.contacts.push(newContact);
    this.contactListChangedEvent.next(this.contacts.slice());
  }

  updateContact(original: Contact, newContact: Contact) {
    if (
      newContact === null ||
      newContact === undefined ||
      original === null ||
      original === undefined
    ) {
      return;
    }
    const pos = this.contacts.indexOf(original);
    if (pos < 0) return;

    newContact.id = original.id;
    this.contacts[pos] = newContact;
    this.contactListChangedEvent.next(this.contacts.slice());
  }

}
