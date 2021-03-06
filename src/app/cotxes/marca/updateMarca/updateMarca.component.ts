import {Component, OnInit} from '@angular/core';
import {UpdateMarcaService} from '../updateMarca/updateMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'UpdateMarca',
  templateUrl:'./UpdateMarca.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [UpdateMarcaService]
})

    export class UpdateMarcaComponent{
        
    addId;addName;addTel;addCountry;addMail;values;errorBuit;finished;errorServer;errorId;
        

    constructor(private updateMarcaService: UpdateMarcaService) { }
                            
        updateMarca(){              this.updateMarcaService.updateMarca(this.addId,this.addName,this.addTel,this.addCountry,this.addMail)
                  .catch((error: any) => {               
               if (error.status === 0 || error.status === "0") {                   
                    this.errorServer=true;
                    }   
                else if (error.status === 400 || error.status === "400")
                    {
                        this.errorBuit = true; 
                    }
                else if (error.status === 500 || error.status === "500")
                    {
                        this.errorId = true; 
                    }
                else {                    
                   return error.json();                    
                }            
        }).subscribe(
          value => this.values=value,
          error => {},
          () => this.finished = true         
      );
        this.errorBuit=false;
        this.errorServer=false;
        this.finished=false;
        this.errorId=false;       
     }    
}

                      
    