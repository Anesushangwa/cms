import { Component, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Contact }  from '../contact.model';
import { ContactService } from '../contact.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
 contacts!: Contact;
constructor(
  private contactService: ContactService,
  private router: Router,
  private route: ActivatedRoute
) {}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.contacts = this.contactService.getContact(params['id']);
  });
}

onDelete() {
  this.contactService.deleteContact(this.contacts);
  this.router.navigate(['../'], { relativeTo: this.route });
}
}
