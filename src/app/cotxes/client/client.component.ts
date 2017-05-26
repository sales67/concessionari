import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../marca/marca.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Client } from './client';
import { ClientService } from './client.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['../cotxes.css'],
  providers: [ClientService]
})

export class ClientComponent implements OnInit {

    id;
    clients;//es la variable del for
    telefonClient;
    

    constructor(private clientService: ClientService) { }

    listButton() {
        this.clientService.listClients().subscribe(
            data => { this.clients = data; console.log(data); },
            () => console.log('done'));
    }

    listButtonId() {
        this.clientService.listClient(this.telefonClient).subscribe(
            data => { this.clients = data; console.log(data); },
            err => console.error(err),
            () => console.log('done'));
    }



    ngOnInit() {
        
    }

}


