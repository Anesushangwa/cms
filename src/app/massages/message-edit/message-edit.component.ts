import { Component,ElementRef,
  EventEmitter,
 
  Output,
  ViewChild, } from '@angular/core';

  import {Messages} from '../massages.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {
  @Output() addMessageEvent = new EventEmitter<Messages>();
  @ViewChild('massage_sub') massage_sub!: ElementRef;
  @ViewChild('masgtex') masgtex!: ElementRef;
  @ViewChild('sender') sender!: ElementRef;
 
  currentSender: string = 'Seth';

  onSendMessage() {
    const massage_sub = this.massage_sub.nativeElement.value;
    const  masgtex = this.masgtex.nativeElement.value;
    const  sender = this.sender.nativeElement.value;
  
    const message = new Messages(1, massage_sub , masgtex,sender,this.currentSender);
    this.addMessageEvent.emit(message);
  }

  onClear() {
    this. massage_sub.nativeElement.value = '';
    this.masgtex.nativeElement.value = '';
  }

}
