import {Component, OnInit} from '@angular/core';
import {MarcaService} from '../marca.service';
import {AddMarcaService} from './addMarca.service';



@Component({
  selector: 'addMarca',
  templateUrl:'./addMarca.component.html',
  styleUrls: ['../../cotxes.css'],
  providers: [AddMarcaService]
})

    export class AddMarcaComponent{
        
        addName;addTel;addCountry;addMail;values;error;finished;
           
 constructor(private addMarcaService: AddMarcaService) { } 
        
     addMarcaPost(){        this.addMarcaService.addMarcaPost(this.addName,this.addTel,this.addCountry,this.addMail)
               .subscribe(
          value => this.values=value,
          error => this.error = true,
          () => this.finished = true
      );
        this.error=false;
        this.finished=false;
     }
    }