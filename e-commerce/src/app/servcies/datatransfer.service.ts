import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService implements OnInit {
   private _productSubject = new BehaviorSubject<object | null>(null);
   private _Cart = new BehaviorSubject<object | null>(null);
  constructor() { }
  ngOnInit(): void {

  }
  updateToken(value:object){
    return this._productSubject.next(value)
  }
  getToken(): Observable<object | null> {
    return this._productSubject.asObservable();
  }
  updateCart(value:Products){
    let stor:any = localStorage.getItem('cart')
    if(stor!== null){
     localStorage.setItem('cart',stor+","+JSON.stringify(value))
    }else{ localStorage.setItem('cart', JSON.stringify(value))
    }
     return
  }
  
}
