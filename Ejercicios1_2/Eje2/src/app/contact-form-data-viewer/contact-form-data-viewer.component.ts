import { Component, Input, OnInit } from '@angular/core';
import { ContactData } from '../model/ContactData';
import { ContactFormServiceService } from '../service/contact-form.service';


@Component({
  selector: 'app-contact-form-data-viewer',
  templateUrl: './contact-form-data-viewer.component.html',
  styleUrls: ['./contact-form-data-viewer.component.css']
})
export class ContactFormDataViewerComponent implements OnInit {

  // Create ContactData object to get information
  contactData: ContactData = new ContactData('','','');

  // Get contact form service
  constructor(private contactFormService: ContactFormServiceService) { };

  ngOnInit() {
    // Subscribes to service
    this.contactFormService.contactData$.subscribe(contactData => {
      // updates contact data with new contact data received
      this.contactData = contactData;
    });
  }

}
