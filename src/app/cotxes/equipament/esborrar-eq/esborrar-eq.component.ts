import { Component, OnInit } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

@Component({
  selector: 'app-esborrar-eq',
  templateUrl: './esborrar-eq.component.html',
  styleUrls: ['./esborrar-eq.component.css'],
  providers: [EquipamentService]
})
export class EsborrarEQComponent implements OnInit {
    
    idEq2: number;
    missatge: string;
    errors: string;
    result: string;

    constructor( private equipamentService: EquipamentService) { }

    ngOnInit() { }
    
    delEq() {
        this.equipamentService.esborrarEq(this.idEq2)
        .subscribe(
            data => { this.idEq2 = data; console.log(data); },
            error => { this.errors = "No s'ha pogut esborrar l'equipament " + this.idEq2 }
            // () => {this.missatge = "S'ha esborrat l'equipament " + this.idEq2;}
            // error => this.errors = "No s'ha pogut esborrar l'equipament " + this.idEq2
        );
    }
}
