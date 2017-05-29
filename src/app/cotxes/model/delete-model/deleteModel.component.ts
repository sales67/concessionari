import {Component, OnInit} from '@angular/core';
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
        
        deleteId;data;logError;getMarca;list;id;deleteId2;models;error;finished;idMarca;

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
        deleteByMarca(idMarca){
          var lista;
           this.list = this.deleteModelService.getByMarca(idMarca).subscribe(
              value => {lista = value;
                 for (var i = lista.length - 1; i >= 0; i--) {
                   var resposta = lista[i];
                   console.log("for "+lista[i].id);
                   this.deleteId = lista[i].id;
                   this.deleteModel();
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
