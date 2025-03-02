import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

 apiLink = "http://localhost:3000/Products/getAllProducts"

  constructor(private _getproducts:HttpClient) {
  }
  getProducts():Observable<any>{
    return this._getproducts.get(this.apiLink)
  }

}
