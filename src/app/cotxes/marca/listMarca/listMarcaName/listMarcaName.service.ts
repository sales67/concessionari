import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class ListMarcaNameService{
private listUrl = 'http://172.17.0.98:8080/cotxe/listMarcaName?name=';

constructor(private http: Http){}

getMarcaId(name) {
      var a = this.http.get(this.listUrl+name)
                .map(res => res.json())
      return a;
  }

}