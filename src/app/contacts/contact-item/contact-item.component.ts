import { Component, Input } from '@angular/core';
import { Contact }  from '../contact.model';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
//   contacts: Contact[] = [
//     new Contact(1,'R.kent Jackson','jacksonk@byui.edu',208-496-3771, '../assets/image/jacksonk.jpg','null'),
//     new Contact(2,'Anesu Barzee','barzeer@byui.edu',208-496-3768,'../assets/image/barzeer.jpg','null')

// ];
  @Input() contacts!: Contact ;
 
 
}
