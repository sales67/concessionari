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
    telefonClient; errorC; finishedC; errorServer; errorClient; errorBuit;
    

    constructor(private clientService: ClientService) { }

    listButton() {
        this.clientService.listClients()
            
        .subscribe(
            data => { this.clients = data; console.log(data); },)
            //() => console.log('done'))
    }

    listButtonId() {//no hem mostra els error ( retorna undefinded el data )
        this.clientService.listClient(this.telefonClient)
            .catch((error: any) => {
                if (error.status === 500 || error.status === "500") {
                    this.errorClient = true;
                }
                else if (error.status === 400) {
                    this.errorBuit = true;
                }
                else if (error.status === 0) {
                    this.errorServer = true;
                }
                else {
                    return error.json();
                }
            })
            .subscribe(
            data => {
            this.clients = data;

            console.log(this.clients);
            },
            error => {},
            () => this.finishedC = true
        );
        this.errorServer = false;
        this.errorClient = false;
        this.errorBuit = false;
        this.finishedC = false;
    }



    ngOnInit() {
        
    }

}


