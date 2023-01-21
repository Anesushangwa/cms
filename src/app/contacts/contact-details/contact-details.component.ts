import { Component, Input} from '@angular/core';
import { Contact }  from '../contact.model';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
//   contacts: Contact[] = [
//     new Contact(1,'R.kent Jackson','jacksonk@byui.edu',208-496-3771, '../assets/image/jacksonk.jpg','null'),
//     // new Contact(2,'Rex Barzee','barzeer@byui.edu',208-496-3768,'../assets/image/barzeer.jpg','null')

// ];
@Input() contacts!: Contact;

constructor() {}
}
