import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class ListMarcaAllService{
private listUrl = 'http://172.17.0.98:8080/cotxe/listMarca';

constructor(private http: Http){}

getMarques() {
      var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
  }

}