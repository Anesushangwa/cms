import { Component,ElementRef,
  EventEmitter,
 
  Output,
  ViewChild, } from '@angular/core';

  import {Message} from '../massages.model';

  import { MassageService } from '../massage.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @Output() addMessageEvent = new EventEmitter<Message>();
  // @ViewChild('massage_sub') massage_sub!: ElementRef;
  // @ViewChild('masgtex') masgtex!: ElementRef;
  // @ViewChild('sender') sender!: ElementRef;
 
  // currentSender: string = 'Seth';
  @ViewChild('subject') subject!: ElementRef;
  @ViewChild('msgText') msgText!: ElementRef;

  constructor(private messageService: MassageService) {}

  onSendMessage() {
    // const massage_sub = this.massage_sub.nativeElement.value;
    // const  masgtex = this.masgtex.nativeElement.value;
    // const  sender = this.sender.nativeElement.value;
    const subject = this.subject.nativeElement.value;
    const msgText = this.msgText.nativeElement.value;
    const messages = new Message('1', subject, msgText, '5');
    this.messageService.addMessage(messages);
  
    // const message = new Message('1', massage_sub , masgtex,sender,this.currentSender);
    // this.addMessageEvent.emit(message);
  }

  onClear() {
    // this. massage_sub.nativeElement.value = '';
    // this.masgtex.nativeElement.value = '';
    this.subject.nativeElement.value = '';
    this.msgText.nativeElement.value = '';
  }

}
