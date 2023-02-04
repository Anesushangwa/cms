import { Component } from '@angular/core';
import { Message } from '../massages.model';

import { MassageService } from '../massage.service';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  // messages: Message[] = [
  //   new Messages(1, 'Test 1', 'hello', 'This is the first test.', 'Anesu '),
  //   new Messages(2, 'Test 2','hello', 'This is the second test.', 'Hazel'),
  //   new Messages(3, 'Test 3','hello', 'This is the third test.', 'peter'),
  // ];
  messages: Message[] = [];

  constructor(private messageService: MassageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  
}

}
