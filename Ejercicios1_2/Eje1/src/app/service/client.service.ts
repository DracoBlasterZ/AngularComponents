import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Define a private array to store clients
  private clients: Client[] = [];

   // Create a private BehaviorSubject to publish updates to the client array
  private clientSubject = new BehaviorSubject<Client[]>(this.clients);

  // Create a public observable to allow components to subscribe to updates to the client array
  public client$ = this.clientSubject.asObservable();

  // Add a new client to the array and publish the updated array to subscribers
  addClient(client: Client) {
    this.clients.push(client);
    this.clientSubject.next(this.clients);
  }
}
