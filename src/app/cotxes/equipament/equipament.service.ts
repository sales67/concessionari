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
    
    myURL = 'http://172.17.0.191:8080';

    constructor(private http: Http){ }
    
    equipamentBuit(): Equipament {
        return new Equipament();
    }
    
    getEq(id) {
      var a = this.http.get(this.myURL + '/demo/unXid?id=' + id)
      .map(res => res.json())
      return a;
    }

    getEqs() {
        var a = this.http.get(this.myURL + '/demo/all')
        .map(res => res.json())
      
        return a;
    }
}
