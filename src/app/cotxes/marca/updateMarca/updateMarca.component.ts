import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {UpdateMarcaService} from '../updateMarca/updateMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'UpdateMarca',
  templateUrl:'./UpdateMarca.component.html',
  providers: [UpdateMarcaService]
})

    export class UpdateMarcaComponent{

    constructor(private updateMarcaService: UpdateMarcaService) { }
             
    }