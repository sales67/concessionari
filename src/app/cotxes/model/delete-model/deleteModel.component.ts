import {Component, OnInit} from '@angular/core';
//import {StateService} from '../common/state.service';
import {deleteModelService} from './deleteModel.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';

@Component({
  selector: 'deleteModel',
  templateUrl:'./deleteModel.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [deleteModelService]
})

    export class DeleteMarcaComponent{
        
        deleteId;data;logError;

    constructor(private deleteModelService: deleteModelService) { }
             
        deleteMarca(){  
            this.deleteModelService.deleteModel(this.deleteId)               
      
        }
    }
