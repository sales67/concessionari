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
        return new Equipament(
            // 0,'','',0,'', false, false, false, false, false, false, false, false  
        );
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

    esborrarEq(id) {
        var a = this.http.delete(this.myURL + '/demo/del?id=' + id)
        .map(res => res.json())
      
        return a;
    }

    modEq(id, parametre, valor) {
        
        var creds = 'id=' + id + '&parametre=' + parametre + '&valor=' + valor;
        
        var headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*'); 
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.put(this.myURL + '/demo/put?id=' + id + '&parametre=' + parametre + '&valor=' + valor, creds, {
            headers:headers
        }).map(res => res.json());
      
        return a;
    }

    crearEquipamentPost(nom, combustible, potencia, traccio, clima, llantes17, llantes18, llantes19, navegador, pintura, multi6, multi9, preu) {
        
        var creds = "name=" + nom + "&combustible=" + combustible + "&potencia=" + potencia + "&traccio=" + traccio + "&climatitzador=" + clima +
                     "&llantes17=" + llantes17 + "&llantes18=" + llantes18 + "&llantes19=" + llantes19 + "&navegador=" + navegador +
                     "&pintura=" + pintura  + "&multimedia6=" + multi6  + "&multimedia9=" + multi9 + "&preu=" + preu;
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(this.myURL + '/demo/add?', creds, {
            headers:headers
        }).map(res => res.json());
        
        return a;
    }

    /*crearEquipamentPost2(nom, combustible, potencia, traccio, clima) {
        
        var creds = "name=" + nom + "&combustible=" + combustible + "&potencia=" + potencia + "&traccio=" + traccio + "&climatitzador=" + clima;
        
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(this.myURL + '/demo/add2?', creds, {
            headers:headers
        }).map(res => res.json());
        
        return a;
    }*/
}