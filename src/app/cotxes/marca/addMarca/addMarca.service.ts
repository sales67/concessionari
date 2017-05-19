import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class AddMarcaService{
private addUrl = 'http://172.17.0.98:8080/cotxe/addMarca';


constructor(private http: Http){}



addMarcaPost(addName,addTel,addCountry,addMail){     
        var creds = "nom=" + addName + "&telefon=" + addTel + "&pais=" + addCountry + "&correu=" + addMail;

        
          var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        var a = this.http.post(this.addUrl,creds,{
            headers:headers
        })
                    .map(res => res.json());
        return a; 
    }
}