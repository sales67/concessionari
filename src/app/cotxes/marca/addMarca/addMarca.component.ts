import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {MarcaService} from 'app/cotxes/marca/marca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
import { Marca }   from 'app/cotxes/marca/marca';
import {Model} from './model';


    export class addMarcaComponent{

    constructor(private addMarcaService: AddMarcaService) { }
             
    }