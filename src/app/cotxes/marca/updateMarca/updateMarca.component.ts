import {Component, OnInit} from '@angular/core';
import {UpdateMarcaService} from '../updateMarca/updateMarca.service';
import {Http, Headers,Response} from '@angular/http';
import {Routes,Router} from '@angular/router';


@Component({
  selector: 'UpdateMarca',
  templateUrl:'./UpdateMarca.component.html',
 styleUrls: ['../marca.component.css'],
  providers: [UpdateMarcaService]
})

    export class UpdateMarcaComponent{
        
    addId;addName;addConce;addCountry;addYear;

    constructor(private updateMarcaService: UpdateMarcaService) { }
            
                
        updateMarca(){        this.updateMarcaService.updateMarca(this.addId,this.addName,this.addConce,this.addCountry,this.addYear)
               .subscribe(
                data => { this.addName = data;},                    
                () => console.log('has actualitzat la marca: '+this.addName)
      );}        
  
    }
    