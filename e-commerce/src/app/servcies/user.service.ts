import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject, map, catchError, of } from 'rxjs';
import {user} from '../interfaces/User'
import { GetProductsService } from './get-products.service';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
 _tokenSubject = new BehaviorSubject<string | null>(null);

apiUrl = 'http://localhost:3000/Users/login'
  constructor(private _logInserv:HttpClient,private _getproducts:GetProductsService) { }


  login(credentials:user):Observable<any>{
return this._logInserv.post(this.apiUrl, credentials)
  }
    ngOnInit(): void {
   const token = localStorage.getItem('authToken')
   if(token?.length!= undefined){
     this._tokenSubject.next(token); 
   }
  }

  logout(): void {
    this.clearToken();
    localStorage.removeItem('authToken');
    localStorage.removeItem('cart');
  }
   storeToken(token: string): void {
    this._tokenSubject.next(token); 
    localStorage.setItem('authToken', token); 
  }
showtokenobject (){
  return this._tokenSubject.value
}
    clearToken(): void {
    this._tokenSubject.next(null);
  }
 isAuthenticated(): Observable<boolean> {
  const token = this.getTokenFromLocalStorage();

  if (token?.length !== undefined) {
    // Return the observable that checks if the user is authenticated
    return this._getproducts.getProducts().pipe(
      map(() => true),        // If the request is successful, return true
      catchError(() => of(false))  // If there's an error (e.g., token is invalid), return false
    );
  } else {
    return of(false);  // If there's no token, return false immediately
  }
}
  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('authToken');
  }

  
}
