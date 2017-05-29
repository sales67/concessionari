import {Injectable}  from '@angular/core';
import {Http,Headers,Response,RequestOptions,URLSearchParams}  from '@angular/http';
import {Observable} from 'rxjs/Observable';


@Injectable()

export class deleteModelService{
private delUrl = 'http://172.17.0.242:8080/demo/remove?id=';
private delMarcaUrl = 'http://172.17.0.242:8080/demo/getModelXmarca?marca=';

constructor(private http: Http){}
    
deleteModel(deleteId){ 
        
        //var a = this.http.delete(this.delUrl+ deleteId).map(res => res.json());
    	
       var headers = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');


       return this.http.delete(this.delUrl+ deleteId, {
           headers: headers
       })
           .map((response: Response) => {  
               console.log("Actualitzat");
           })
           .catch((error: any) => {
               if (error.status === 500 || error.status === "500") {
                   console.log("Inexistent");                   
               }
               else if (error.status === 400 || error.status === "400") {
                   console.log("Falten dades");
               }
               else {
                   return error.json();
               }
        }) 
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