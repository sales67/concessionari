import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class AddMarcaService{
private cotxeUrl = 'http://localhost:8080/cotxe/listMarca';
private modelUrl = 'http://localhost:8080/cotxe/getModel?id=';
private marcaUrl = 'http://localhost:8080/cotxe/addMarca?id=%ld&nom=%s&idConce=%ld&pais=%s&any=%ld';

constructor(private http: Http){}


addMarcaPost(addName,addConce,addCountry,addYear){     
        var creds = "nom=" + addName + "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear;
        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post('http://localhost:8080/cotxe/addMarca',creds,{
            headers:headers
        })
                    .map(res => res.json());
        return a; 
    }
}