import { Injectable } from '@angular/core';
import { Http, Headers, Response }  from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";
import { Subject } from 'rxjs/Subject';

import { Equipament } from './equipament';

@Injectable()
export class EquipamentService {
    
    constructor(private http: Http){ }
    
    equipamentBuit(): Equipament {
        return new Equipament(
            
        );
    }
    
    /*public id: number;
    public name: string;
    public combustible: string;
    public potencia: number;
    public traccio: string;
    public climatitzador: boolean;
    public llantes17: boolean;
    public llantes18: boolean;
    public llantes19: boolean;
    public navegador: boolean;
    public pintura: boolean;
    public multimedia6: boolean;
    public multimedia9: boolean;*/

    
    getEq(id) {
      var a = this.http.get('http://localhost:8080/demo/unXid?id=' + id)
      .map(res => res.json())
      return a;
    }

}
