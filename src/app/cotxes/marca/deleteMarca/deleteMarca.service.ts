import {Injectable}  from '@angular/core';
import {Http,Headers}  from '@angular/http';

@Injectable()

export class DeleteMarcaService{
private delUrl = 'http://localhost:172.17.0.98/cotxe/delMarca?id=';

constructor(private http: Http){}

deleteMarca(deleteId){ 
        var a = this.http.delete(this.delUrl+ deleteId);
    }
}