import { Component, OnInit } from '@angular/core';
import {ModelService} from './model.service';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  providers: [ModelService]
})
export class ModelComponent implements OnInit {
	test = "Si es veu aixo, funciona";
  constructor(private modelService: ModelService) { }

  addName;
  addMarca;
  addMarcaPost(){        this.modelService.addModelPost(this.addName,this.addMarca)
               .subscribe(
                data => { this.addName = data;},    
                () => console.log('has afegit la marca: '+this.addName)
      );} 
  ngOnInit() {
  }

}
