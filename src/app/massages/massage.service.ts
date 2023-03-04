import { Injectable, EventEmitter } from '@angular/core';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './massages.model'
@Injectable({
  providedIn: 'root'
})
export class MassageService {
  messageChangedEvent = new EventEmitter<Message[]>();
  // private messages: Message[] = [];

  // constructor() {
  //   this.messages = MOCKMESSAGES;
  // }

  private messagesUrl =
    'https://cms2023-e7639-default-rtdb.firebaseio.com/messages.json';
  private messages: Message[] = [];
  private maxMessageId!: number;

  constructor(private http: HttpClient) {}


  // getMessage(id: string): Message {
  //   for (let massage of this.messages) {
  //     if (massage.id == id) {
  //       return massage;
  //     }
    
  //   }
  //     return null!;
  // }

    // GET REQUEST
    getMessage(): Message[] {
      this.http.get<Message[]>(this.messagesUrl).subscribe((msgs: Message[]) => {
        this.messages = msgs;
        this.maxMessageId = this.getMaxId();
        this.messages.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.messageChangedEvent.next(this.messages.slice());
      });
  
      return this.messages.slice();
    }

    
  getMessages(): Message[] {
    return this.messages.slice();
  }

  
 //#region "CRUD"
 addMessage(newMessage: Message) {
  if (newMessage === null || newMessage === undefined) return;
  this.maxMessageId++;
  newMessage.id = `${this.maxMessageId}`;
  this.messages.push(newMessage);
  this.storeMessages();
}

  // PUT REQUEST
  storeMessages() {
    this.http
      .put(this.messagesUrl, JSON.stringify(this.messages), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .subscribe(() => {
        this.messages.sort((a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        this.messageChangedEvent.next(this.messages.slice());
      });
  }

    //#region "Helpers"
    getMaxId(): number {
      let maxId = 0;
      this.messages.forEach((m) => {
        if (+m.id > maxId) maxId = +m.id;
      });
      return maxId;
    }
  }

 


