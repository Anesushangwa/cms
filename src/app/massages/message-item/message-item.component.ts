import { Component, Input } from '@angular/core';
import {Messages} from '../massages.model'
@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {
  @Input() messages!: Messages;
}
