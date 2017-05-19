import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {ListMarcaService} from '../listMarca/listMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarca',
  templateUrl:'./listMarca.component.html',
    styleUrls: ['../marca.component.css'],
  providers: [ListMarcaService]
})

    export class ListMarcaComponent{

    constructor(private listMarcaService: ListMarcaService) { }
         marques; 
        
    listMarca(){
     this.listMarcaService.getMarques()
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}
    }