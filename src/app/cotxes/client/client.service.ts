import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { sprintf } from "sprintf-js";
import { Subject } from 'rxjs/Subject';

import { Client } from './client';

@Injectable()
export class ClientService {

    url = 'http://172.17.0.161:8080/client/all';

    constructor(private http: Http) { }

    
    
    listClient(telefon) {
        var a = this.http.get('http://172.17.0.161:8080/client/idClient?telefon=' + telefon)
            .map(res => res.json())
        return a;
    }

    listClients(): Observable<Client[]> {
        return this.http.get(this.url).map((res: Response) => res.json());

    }
}
