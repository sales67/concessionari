import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
<<<<<<< HEAD
import {MarcaService} from '../marca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import { Marca }   from '../marca';
//import {Model} from './model';
=======
import {AddMarcaService} from '../addMarca/addMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
>>>>>>> 5f52f909119bc9337bac3604e639b9ce5917c9d3

@Component({
  selector: 'addMarca',
  templateUrl:'./addMarca.component.html',
  providers: [AddMarcaService]
})

    export class AddMarcaComponent{

    /*constructor(private addMarcaService: AddMarcaService) { }
     */        
    }