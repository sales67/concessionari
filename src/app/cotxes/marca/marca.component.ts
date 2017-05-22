import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {MarcaService} from './marca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import { Marca }   from './marca';
import {Model} from './model';


@Component({
  selector: 'marca',
  templateUrl:'./marca.component.html',
  styleUrls: ['../cotxes.css'],
  providers: [MarcaService]
})


export class MarcaComponent{
    message: string;
    errorMessage:string;
    nom:any; 
    marques:Marca;
    models:Model;
    idMarca;
    addName;
    addConce;
    addCountry;
    addYear;
    idMarca2;
    addName2;
    addConce2;
    addCountry2;
    addYear2;
    addId3;
    idMarca3;
    addName3;
    addConce3;
    addCountry3;
    addYear3;
      

    constructor(private marcaService: MarcaService) { }
