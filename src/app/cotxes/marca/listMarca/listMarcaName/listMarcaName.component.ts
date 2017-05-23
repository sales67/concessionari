import {Component, OnInit} from '@angular/core';
import {ListMarcaNameService} from './listMarcaName.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarcaName',
  templateUrl:'./listMarcaName.component.html',
  styleUrls: ['../../../cotxes.css'],
  providers: [ListMarcaNameService]
})

    export class ListMarcaNameComponent{

    constructor(private listMarcaNameService: ListMarcaNameService) { }
         marques; 
         name;
    listMarcaName(){
     this.listMarcaNameService.getMarcaId(this.name)
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}
    }