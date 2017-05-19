import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {AddMarcaService} from '../addMarca/addMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'addMarca',
  templateUrl:'./addMarca.component.html',
  providers: [AddMarcaService]
})

    export class AddMarcaComponent{

    constructor(private addMarcaService: AddMarcaService) { }
             
    }