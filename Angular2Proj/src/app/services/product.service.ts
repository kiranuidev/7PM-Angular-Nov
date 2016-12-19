
import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
 export  class ProductService {
   constructor(private http: Http){
   }

   searchProducts(data):Observable<any>{
       var url="/rest/product/search";
      return this.http.post(url,data)
       .map(response=>
           response.json()
           );
   }
}  


