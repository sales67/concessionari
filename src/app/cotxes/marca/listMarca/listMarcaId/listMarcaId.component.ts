import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {ListMarcaIdService} from './listMarcaId.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'listMarcaId',
  templateUrl:'./listMarcaId.component.html',
  styleUrls: ['../../../cotxes.css'],
  providers: [ListMarcaIdService]
})

    export class ListMarcaIdComponent{

    constructor(private listMarcaIdService: ListMarcaIdService) { }
         marques; 
         id;
    listMarcaId(){
     this.listMarcaIdService.getMarcaId(this.id)
                .subscribe(
                data => { this.marques = data;console.log(data);},
                err => console.error(err),
                () => console.log('done')
      );}
    }