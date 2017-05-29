import {Component, OnInit} from '@angular/core';
import {DeleteMarcaService} from '../deleteMarca/deleteMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';
//import {deleteModelComponent} from '../../model/delete-model/deleteModel.component';

@Component({
  selector: 'deleteMarca',
  templateUrl:'./deleteMarca.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [DeleteMarcaService]
})

    export class DeleteMarcaComponent{
        
        deleteId;data;logError;marques;error;finished;

    constructor(private deleteMarcaService: DeleteMarcaService) { }
     

        deleteMarca(){  
            this.deleteMarcaService.deleteMarca(this.deleteId)          
    .subscribe(
          value => this.marques=value,              
          error => this.error = true,
          () => this.finished = true
      );
        this.error=false;
        this.finished=false; 
            
        }  
        
    }