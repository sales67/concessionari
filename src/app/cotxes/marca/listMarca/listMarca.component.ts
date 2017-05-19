import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {ListMarcaService} from '../listMarca/listMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarca',
  templateUrl:'./listMarca.component.html',
  providers: [ListMarcaService]
})

    export class ListMarcaComponent{

    constructor(private listMarcaService: ListMarcaService) { }
             
    }