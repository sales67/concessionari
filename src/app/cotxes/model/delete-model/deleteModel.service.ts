import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {sprintf} from "sprintf-js";


@Injectable()

export class deleteModelService{
private delUrl = 'http://172.17.0.242:8080/demo/remove?id=';
private delMarcaUrl = 'http://172.17.0.242:8080/demo/getModelXmarca?marca=';

constructor(private http: Http){}
    
deleteModel(deleteId){ 
	console.log(this.delUrl+deleteId);
        var a = this.http.delete(this.delUrl+ deleteId);
    }


getByMarca(getMarca){
	var list = this.http.get(this.delMarcaUrl+ getMarca).map(res=> res.json());
			
	return list;

	/*
	var a = this.http.get(this.listUrl)
                .map(res => res.json())
      return a;
      */
	}
}