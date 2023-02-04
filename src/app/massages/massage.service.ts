import { Injectable, EventEmitter } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Message } from './massages.model'
@Injectable({
  providedIn: 'root'
})
export class MassageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  private messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    for (let massage of this.messages) {
      if (massage.id == id) {
        return massage;
      }
    
    }
      return null!;
  }
  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }
  }

 


