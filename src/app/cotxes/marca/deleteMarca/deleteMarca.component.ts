import {Component, OnInit} from '@angular/core';
import {DeleteMarcaService} from '../deleteMarca/deleteMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'deleteMarca',
  templateUrl:'./deleteMarca.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [DeleteMarcaService]
})

    export class DeleteMarcaComponent{
        
        deleteId;data;logError;

    constructor(private deleteMarcaService: DeleteMarcaService) { }
             
        deleteMarca(){  
            this.deleteMarcaService.deleteMarca(this.deleteId)               
      
        }
    }