import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ToysService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number, seller:string) {
    return this.httpClient.post(environment.apiUrl + 'youssefproduct/createProduct', {'name':name, 'price':price, 'seller':seller});
  }

  getProducts(){
    return this.httpClient.get(environment.apiUrl + 'youssefproduct/getProducts');
  }

  updateProduct(id:object, name:string, price:number, seller:string) {
    return this.httpClient.patch(environment.apiUrl + 'youssefproduct/updateProduct/'+id,{'name':name, 'price':price, 'seller':seller });
  }

  deleteProduct(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'youssefproduct/deleteProduct/'+id);
  }
}
