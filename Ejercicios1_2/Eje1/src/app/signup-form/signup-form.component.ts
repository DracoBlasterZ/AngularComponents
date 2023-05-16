import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  // Define public properties to store form input values
  public name: string = '';
  public cif: string = '';
  public address: string = '';
  public group: number = 0;

  // Inject the ClientService into the component's constructor
  constructor(private clientService: ClientService) { }

  // Define an onSubmit method to handle form submissions
  onSubmit() {
    // Validate form input values
    if (this.name == '') {
      window.alert("Name cannot be empty!");
    } else if (this.cif == '') {
      window.alert("CIF cannot be empty!");
    } else if (this.address == '') {
      window.alert("Address cannot be empty!");
    } else if (this.group <= 0) {
      window.alert("Group cannot be 0 or negative!");
    } else {
      // Create a new Client object with the input values
      const newClient = new Client(this.name, this.cif, this.address, this.group);

      // Add the new client to the clientService
      this.clientService.addClient(newClient);

      // Reset form input values
      this.name = '';
      this.cif = '';
      this.address = '';
      this.group = 0;
    }
  }

}
