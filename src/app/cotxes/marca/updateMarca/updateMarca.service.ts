import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class UpdateMarcaService{
private cotxeUrl = 'http://localhost:8080/cotxe/listMarca';
private modelUrl = 'http://localhost:8080/cotxe/getModel?id=';
private marcaUrl = 'http://localhost:8080/cotxe/addMarca?id=%ld&nom=%s&idConce=%ld&pais=%s&any=%ld';

constructor(private http: Http){}

updateMarca(addId,addName,addConce,addCountry,addYear){     
        var creds = "id=" + addId +  "&name=" + addName + "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put('http://localhost:8080/cotxe/updateMarca?id='+addId+'&name='+addName+ "&idConce=" + addConce + "&pais=" + addCountry + "&any=" + addYear,creds,{
            headers:headers
        })
                    .map(res => res.json());
    return a;
    }

}