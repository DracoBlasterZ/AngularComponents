import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.css']
})
export class ClientTableComponent implements OnInit {

  // Define an empty array to store clients
  clients: Client[] = [];

  // Inject the ClientService into the component's constructor
  constructor(private clientService: ClientService) {}

  // Subscribe to updates from the ClientService's client$ observable
  ngOnInit() {
    this.clientService.client$.subscribe(clients => {
      this.clients = clients;
    });
  }

}
