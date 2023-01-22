import { Component } from '@angular/core';
import { Messages } from '../massages.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  messages: Messages[] = [
    new Messages(1, 'Test 1', 'hello', 'This is the first test.', 'Anesu '),
    new Messages(2, 'Test 2','hello', 'This is the second test.', 'Hazel'),
    new Messages(3, 'Test 3','hello', 'This is the third test.', 'peter'),
  ];

  onAddMessage(message: Messages) {
    this.messages.push(message);
  }
}
