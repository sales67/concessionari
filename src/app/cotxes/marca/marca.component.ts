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
    }
