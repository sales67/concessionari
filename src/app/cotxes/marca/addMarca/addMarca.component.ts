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
        
        addName;addTel;addCountry;addMail;
           
 constructor(private addMarcaService: AddMarcaService) { } 
        
     addMarcaPost(){        this.addMarcaService.addMarcaPost(this.addName,this.addTel,this.addCountry,this.addMail)
               .subscribe(
                data => { this.addName = data;},    
                () => console.log('has afegit la marca: '+this.addName)
      );}       

    }