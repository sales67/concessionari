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

    constructor( private equipamentService: EquipamentService) { }

    ngOnInit() { }
    
    delEq() {
        this.equipamentService.esborrarEq(this.idEq2)
        .subscribe(
            data => { this.idEq2 = data;},
            () => console.log('has esborrat equipament: ' + this.idEq2)
        );
    }
    
    /*delConce() {
        this.dadesService.esborrarConce(this.idConce)
        .subscribe(
            data => { this.idConce = data;},
            () => console.log('has esborrat el concessionari: ' + this.idConce)
        );
    }*/

}
