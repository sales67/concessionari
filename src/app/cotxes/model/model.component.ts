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

  ngOnInit() {
  }

}
