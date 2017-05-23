import {Injectable}  from '@angular/core';
import {Http,Headers,RequestOptions}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class updateModelService{
private updateUrl = 'http://172.17.0.242:8080/demo/update?id=';

constructor(private http: Http){}

updateModel(addId,addName,addMarca){
    
        var creds = "id=" + addId +  "&name=" + addName + "&marca=" + addMarca;
        
        var headers = new Headers();       
        headers.append('Access-Control-Allow-Origin', '*');       

        var a = this.http.put(this.updateUrl+addId+'&name='+addName+ "&marca=" + addMarca,creds,{
            headers:headers
        })
                    .map(res => res.json());
    return a;
    }

}