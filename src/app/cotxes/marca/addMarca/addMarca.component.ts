import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';

import {MarcaService} from '../marca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import { Marca }   from '../marca';
//import {Model} from './model';

import {AddMarcaService} from './addMarca.service';


@Component({
  selector: 'addMarca',
  templateUrl:'./addMarca.component.html',
  providers: [AddMarcaService]
})

    export class AddMarcaComponent{

    //constructor(private addMarcaService: AddMarcaService) { }
           
    }