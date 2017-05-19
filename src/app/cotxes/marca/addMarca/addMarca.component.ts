//import {StateService} from '../common/state.service';

import {MarcaService} from '../marca.service';
import { Marca }   from '../marca';
//import {Model} from './model';

import {Component, OnInit} from '@angular/core';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import {AddMarcaService} from '../addMarca/addMarca.service';

@Component({
  selector: 'addMarca',
  templateUrl:'./addMarca.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [AddMarcaService]
})

    export class AddMarcaComponent{
        
        addName;addConce;addCountry;addYear;


    //constructor(private addMarcaService: AddMarcaService) { }
           
 constructor(private addMarcaService: AddMarcaService) { }
        
     addMarcaPost(){ this.addMarcaService.addMarcaPost(this.addName,this.addConce,this.addCountry,this.addYear)
               .subscribe(
                data => { this.addName = data;},    
                () => console.log('has afegit la marca: '+this.addName)
      );}       

    }