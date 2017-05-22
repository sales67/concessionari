import { Component, OnInit } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

@Component({
  selector: 'app-crear-eq',
  templateUrl: './crear-eq.component.html',
  styleUrls: ['./crear-eq.component.css'],
  providers: [EquipamentService]
})
export class CrearEQComponent implements OnInit {
    
    crearNom: string;
    crearCombustible: string;
    crearPotencia: string;
    crearTraccio: string;
    crearClimatitzador: boolean;
    crearLlantes17: boolean;
    crearLlantes18: boolean;
    crearLlantes19: boolean;
    crearNavegador: boolean;
    crearPintura: boolean;
    crearMulti6: boolean;
    crearMulti9: boolean;
    

    constructor( private equipamentService: EquipamentService) { }

    ngOnInit() { }
    
    crearEquipament() {
        this.equipamentService.crearEquipamentPost(this.crearNom, this.crearCombustible, parseInt(this.crearPotencia), this.crearTraccio, this.crearClimatitzador,
                                                   this.crearLlantes17, this.crearLlantes18, this.crearLlantes19, this.crearNavegador, this.crearPintura,
                                                   this.crearMulti6, this.crearMulti9)
            .subscribe(
            data => { this.crearNom = data;},
            () => console.log('has creat un nou equipament: ' + typeof this.crearMulti6)
        );
    }

}
