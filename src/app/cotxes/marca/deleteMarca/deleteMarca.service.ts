import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
//import { Cotxe } from './cotxe';
//import {Model} from './model';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class DeleteMarcaService{
private delUrl = 'http://localhost:8080/cotxe/delMarca?id=';

constructor(private http: Http){}

deleteMarca(deleteId){ 
        var a = this.http.delete(this.delUrl+ deleteId);
    return a;
    }

}