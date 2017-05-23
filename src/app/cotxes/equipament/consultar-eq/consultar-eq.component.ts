import { Component, OnInit } from '@angular/core';
import { Equipament } from '../equipament';
import { EquipamentService } from '../equipament.service';

@Component({
  selector: 'app-consultar-eq',
  templateUrl: './consultar-eq.component.html',
  styleUrls: ['./consultar-eq.component.css'],
  providers: [EquipamentService]
})
export class ConsultarEQComponent implements OnInit {

    idEq: number;
    equipament: Equipament;
    public equipaments: Array<Equipament> = [];
    public equipaments2: Array<Equipament> = [];
    errors: string;
    
    idModel;
    nomModel: string;
    marcaImodel: Array<String> = [];
    
    constructor( private equipamentService: EquipamentService) { }
    
    ngOnInit() {
        this.equipament = this.equipamentService.equipamentBuit();
    }
    
    trobaEquipament() {
        let idModel = this.equipamentService.getIdModel(this.idEq);
        
        console.log("id model: " + idModel)
        
        this.equipamentService.getEq(this.idEq)
            .subscribe(
                // data => { this.equipaments = data; this.nomModel = this.equipamentService.funcioJaume(data[0].model); }, 
                data => { this.equipaments = data; this.marcaImodel = this.equipamentService.funcioJaume(data[0].model); }, // data => { this.equipament = data; console.log(data); },

                err => {console.error(err); this.errors = "S'ha produit un error, prova amb un altre ID.";},
                () => {console.log('done'); this.errors = "";}
            );
    }
    
    trobaEquipaments() {
        this.equipamentService.getEqs()
                .subscribe(
                    data => { this.equipaments2 = data; console.log(data); },
                    err => console.error(err),
                    () => console.log('done')
        );
    }
    
    trobaIdModel() {
        this.equipamentService.getIdModel(this.idEq)
            .subscribe(
                data => { this.equipaments = data; console.log(data); }, // data => { this.equipament = data; console.log(data); },
                err => {console.error(err); this.errors = "S'ha produit un error, prova amb un altre ID.";},
                () => {console.log('done'); this.errors = "";}
            );
    }
    
    trobaMarcaImodel() {
        
    }
}
