import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContactData } from 'src/app/model/ContactData';

@Injectable({
  providedIn: 'root'
})
export class ContactFormServiceService {

  // Define a ContactData variable to store form input
  private contactData: ContactData = new ContactData('','','');

  // Create a private BehaviorSubject to publish updates to the ClientData object
  private contactDataSubject = new BehaviorSubject<ContactData>(this.contactData);

  // Create a public observable to allow components to subscribe to updates
  public contactData$ = this.contactDataSubject.asObservable();

  // Method that updates the ContactData and sends to subscribers
  addContactData(contactData: ContactData) {
  this.contactData = contactData;
  this.contactDataSubject.next(this.contactData);
  }

  constructor() { }
}
