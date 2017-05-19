import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";

import { Client } from '../client';


@Injectable()

export class UpdateService {
    constructor(private http: Http) { }

    updateClient(idU, dniU, nomU, cognomsU, correuU, direccioU, telefonU): Observable<Client[]> {
        var crear = "id=" + idU + "&dni=" + dniU + "&nom=" + nomU + "&cognoms=" +
            cognomsU + "&correu=" + correuU + "&direccio=" + direccioU + "&telefon=" + telefonU;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        var a = this.http.put('http://172.17.0.161:8080/client/put', crear, {
            headers: headers
        })
            .map(res => res.json());
        return a;
    }

}