import { Component, OnInit } from '@angular/core';
//import { StateService } from '../common/state.service';
import { RegistService } from './regist.service';
import { Http, Headers, Response } from '@angular/http';
import { Routes } from '@angular/router';
import { Client } from '../client';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css'],
  providers: [RegistService]
})
export class RegistComponent implements OnInit{

    dniR; nomR; cognomsR; correuR; direccioR; telefonR; registC;

    constructor(private registService: RegistService) { }
    registButton() {

        this.registService.registClient(this.dniR, this.nomR, this.cognomsR,
                                        this.correuR, this.direccioR, this.telefonR)
            .subscribe(
            data => { this.registC = data },
            () => console.log('done' + this.registC));
    }

    ngOnInit() {
    }

}
