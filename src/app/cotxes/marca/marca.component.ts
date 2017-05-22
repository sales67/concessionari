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

  listMarca(){
     this.marcaService.getCotxes()
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}

   listModel(){        
    this.marcaService.getModel(this.idMarca)
    .subscribe(
                data => { this.models = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}  
    addMarcaGet(){        this.marcaService.addMarcaGet(this.addName,this.addConce,this.addCountry,this.addYear)
               .subscribe(
                data => { this.addName = data;},                
                () => console.log('has afegit la marca: '+this.addName)
      );}
    addMarcaPost(){        this.marcaService.addMarcaPost(this.addName2,this.addConce2,this.addCountry2,this.addYear2)
               .subscribe(
                data => { this.addName2 = data;},    
                () => console.log('has afegit la marca: '+this.addName2)
      );}
     updateMarca(){        this.marcaService.updateMarca(this.addId3,this.addName3,this.addConce3,this.addCountry3,this.addYear3)
               .subscribe(
                data => { this.addName3 = data;},                    
                () => console.log('has actualitzat la marca: '+this.addName3)
      );}               
    }
