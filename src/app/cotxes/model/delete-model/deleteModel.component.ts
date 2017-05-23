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

    export class deleteModelComponent{
        
        deleteId;data;logError;deleteMarca;

    constructor(private deleteModelService: deleteModelService) { }
             
        deleteModel(){  
            this.deleteModelService.deleteModel(this.deleteId)               
      
        }
        /////// TREBALLAR EN AIXO //////////
        /*deleteByMarca(){
             var list = this.deleteModelService.deleteByMarca(this.deleteMarca);
             for (var i = list.length - 1; i >= 0; i--) {
               list[i]
             }
        }*/
    }
