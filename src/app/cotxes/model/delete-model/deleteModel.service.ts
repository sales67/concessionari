import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class deleteModelService{
private delUrl = 'http://localhost:172.17.0.242/cotxe/remove?id=';

constructor(private http: Http){}

deleteMarca(deleteId){ 
        var a = this.http.delete(this.delUrl+ deleteId);
    }

}