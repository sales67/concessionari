import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {DeleteMarcaService} from '../deleteMarca/deleteMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'deleteMarca',
  templateUrl:'./deleteMarca.component.html',
  providers: [DeleteMarcaService]
})

    export class DeleteMarcaComponent{

    constructor(private deleteMarcaService: DeleteMarcaService) { }
             
    }