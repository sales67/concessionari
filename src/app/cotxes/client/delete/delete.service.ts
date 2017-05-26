import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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


        return this.http.delete('http://172.17.0.161:8080/client/delete'+ crear, {
            headers: headers
        })
            .map((response: Response) => {  
                console.log("Client Eliminat");
                return response;
            })
            .catch((error: any) => {
                if (error.status === 500 || error.status === "500") {
                    var a = "Client Inexistent";
                    console.log(a);
                    return a;  
                }
                else if (error.status === 400 || error.status === "400") {
                    console.log("Falten dades");
                }
                else {
                    return error.json();
                }
            });
    }

}