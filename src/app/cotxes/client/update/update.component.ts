import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { UpdateService } from './update.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';


@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['../../cotxes.css'],
    providers: [UpdateService]
})
export class UpdateComponent implements OnInit {

    idU; dniU; nomU; cognomsU; correuU; direccioU; telefonU; updateC;

    constructor(private updateService: UpdateService) { }

    
    updateButton() {

        this.updateService.updateClient(this.idU, this.dniU, this.nomU, this.cognomsU,
            this.correuU, this.direccioU, this.telefonU)
            .subscribe(
            data => { this.updateC = data },
            () => console.log('Has modificat el client ' + this.nomU));
    }
    
    ngOnInit() {
    }

}
