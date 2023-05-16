import { Component, EventEmitter, Output } from '@angular/core';
import { ContactData } from '../model/ContactData';
import { ContactFormServiceService } from '../service/contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  // Form attributes
  name: string = '';
  email: string = '';
  message: string = '';
  robotCheck: number = 0;

  // Error attributes
  nameError: string = '';
  emailError: string = '';
  messageError: string = '';
  robotCheckError: string = '';

  // Service to communicate between components
  constructor(private contactFormService: ContactFormServiceService) { };

  // Execute on form submit
  onSubmit() {
    // Reset errors
    this.nameError='';
    this.emailError='';
    this.messageError='';
    this.robotCheckError='';

    // Show errrors if fields are empty
    if (this.name == '') {
      this.nameError = "Name is required";
    }
    if (this.email == '') {
      this.emailError = "Email is required";
    }
    if (this.message == '') {
      this.messageError = "Message cannot be empty";
    }
    if (this.robotCheck != 10) {
      this.robotCheckError = "Response is invalid. Try again"
    } else {
      // Create contact data object
      const contactData = new ContactData(this.name, this.email, this.message);

      // passes data to service
      this.contactFormService.addContactData(contactData);

      // Resets form fields
      this.name='';
      this.email='';
      this.message='';
      this.robotCheck=0;
    }
  }
}
