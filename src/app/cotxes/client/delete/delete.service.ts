import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";

import { Client } from '../client';


@Injectable()

export class DeleteService {
    constructor(private http: Http) { }

    deleteClient(idD): Observable<Client[]> {
        var crear = "?id=" + idD;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');


        var a = this.http.delete('http://172.17.0.161:8080/client/delete'+ crear, {
            headers: headers
        })
            .map(res => res.json());
        return a;
    }

}