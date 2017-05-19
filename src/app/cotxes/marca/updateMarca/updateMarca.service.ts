import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class UpdateMarcaService{
private updateUrl = 'http://172.17.0.98:8080/cotxe/updateMarca?id=';

constructor(private http: Http){}

updateMarca(addId,addName,addTel,addCountry,addMail){     
        var creds = "id=" + addId +  "&name=" + addName + "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put(this.updateUrl+addId+'&name='+addName+ "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail,creds,{
            headers:headers
        })
                    .map(res => res.json());
    return a;
    }

}