import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import { Routes, Router } from '@angular/router';
import { Equipament } from './equipament';
import { EquipamentService } from './equipament.service';

@Component({
  selector: 'app-equipament',
  templateUrl: './equipament.component.html',
  styleUrls: ['./equipament.component.css'],
  providers: [ EquipamentService ]
})
export class EquipamentComponent implements OnInit {
    
    idEq: number;
    equipament: Equipament;
    
    constructor( private equipamentService: EquipamentService) { }
    
    ngOnInit() {
        // this.conces = this.dadesService.getNouConce();
        this.equipament = this.equipamentService.equipamentBuit();
    }
    
    trobaEquipament() {
        this.equipamentService.getEq(this.idEq)
            .subscribe(
                data => { this.equipament = data; console.log(data); },
                err => console.error(err),
                () => console.log('done')
            );
    }
}
