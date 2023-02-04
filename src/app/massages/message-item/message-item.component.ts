import { Component, Input } from '@angular/core';
import {Message} from '../massages.model';

import { Contact } from 'src/app/contacts/contact.model';

import {ContactService} from '../../contacts/contact.service'
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() messages!: Message;


  messageSender!: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
     const contact: Contact = this.contactService.getContact(this.messages.sender);
     this.messageSender = contact.name;
  }
}
