import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

import { DeleteMarcaComponent } from '../../marca/deleteMarca/deleteMarca.component';

@Component({
  selector: 'app-esborrar-eq',
  templateUrl: './esborrar-eq.component.html',
  styleUrls: ['./esborrar-eq.component.css'],
  providers: [EquipamentService]
})
//export class EsborrarEQComponent implements OnInit {
export class EsborrarEQComponent implements AfterViewInit {
    
    idEq2: number;
    idModel: number;
    missatge_del: string;
    error_del: string;
    missatge_del_model: string;
    error_del_model: string;
    result: string;

    constructor( private equipamentService: EquipamentService) { }

    @ViewChild(DeleteMarcaComponent) funcions: DeleteMarcaComponent;
    
    // ngOnInit() { }
    ngAfterViewInit() {
        this.funcions.deleteMarca(11);
    }
    
    delEq() {
        this.equipamentService.esborrarEq(this.idEq2)
        .subscribe(
            data => { this.idEq2 = data; },
            error => { this.error_del = "No s'ha pogut esborrar l'equipament " + this.idEq2; },
            // suc => { this.missatge = "S'ha esborrat l'equipament " + this.idEq2; },
            () => { this.missatge_del = ""; this.error_del = ""; }
        );
    }
    
    delEqModel(model) {
        model = model || this.idModel;
        // this.equipamentService.esborraEqXidModel(this.idModel)
        this.equipamentService.esborraEqXidModel(model)
        .subscribe(
            data => { this.idModel = data; },
            error => { this.error_del_model = "No s'han pogut esborrar els equipaments del model " + this.idModel; },
            // suc => { this.missatge = "S'ha esborrat l'equipament " + this.idEq2; },
            () => { this.missatge_del_model = ""; this.error_del_model = ""; }
        );
    }
}
