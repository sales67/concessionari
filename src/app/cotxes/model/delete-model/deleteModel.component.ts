﻿import {Component, OnInit} from '@angular/core';
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
        
        deleteId;data;logError;getMarca;list;id;deleteId2;models;error;finished;

    constructor(private deleteModelService: deleteModelService) { }
             
        /*deleteModel(){  
            this.deleteModelService.deleteModel(this.deleteId)               
      
        }*/
         deleteModel(){  
            this.deleteModelService.deleteModel(this.deleteId).subscribe(
                  value => this.models=value,              
                  error => this.error = true,
                  () => this.finished = true
              );
                this.error=false;
                this.finished=false;
            
                }
            
        /////// TREBALLAR EN AIXO //////////
        /*deleteByMarca(){
             var list = this.deleteModelService.deleteByMarca(this.deleteMarca);
             for (var i = list.length - 1; i >= 0; i--) {
               list[i]
             }
        }*/
        deleteByMarca(){
          var lista;
           this.list = this.deleteModelService.getByMarca(this.getMarca);
           this.list.subscribe(
              data => {lista = data;
                 for (var i = lista.length - 1; i >= 0; i--) {
                   var resposta = lista[i];
                   this.deleteModelService.deleteModel(resposta.id);
                 }
              },
              () => {console.log("complert")}
            )
           //var jsonList =this.list._body;
           //console.log(JSON.stringify(jsonList));
          
           //console.log(this.list._body);
           //console.log(JSON.parse(this.list));
           /*
           for(this.id=0;this.id < this.list.length; this.id++)
           {
             console.log("for");
           }*/
        }
    }
