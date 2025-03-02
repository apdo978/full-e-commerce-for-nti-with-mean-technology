import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    let isAuthenticated:any = localStorage.getItem('authToken'); 
    if (isAuthenticated!==undefined){
      isAuthenticated  = jwt_decode.jwtDecode(isAuthenticated)
        if(isAuthenticated.userType !=undefined){
   return true; }  else {
      this.router.navigate(['/login']); 
      return false
    }}  else {
      this.router.navigate(['/login']); 
      return false
    }
  
}
}
