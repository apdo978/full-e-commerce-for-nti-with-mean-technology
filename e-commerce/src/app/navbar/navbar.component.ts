import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../servcies/user.service';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit ,OnChanges{
  userType: string =""
  decodedToken: any ;
 isAuth:boolean =false;
  constructor(private user:UserService ) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit(): void {
 this.user.isAuthenticated().subscribe({
  next:(data)=>{this.isAuth=data;
  
  }})
this.user._tokenSubject.subscribe((data)=>{if(data=null){this.isAuth=true}})
  
  if (!this.isAuth){
   const token = localStorage.getItem('authToken')?.toString()
   if(token != undefined)
  {this.decodedToken  = jwt_decode.jwtDecode(token)
    if(this.decodedToken.userType !=undefined){
      this.userType = "Admin"
      
    }
  }
  }
  }
  

  logout(){
    this.user.logout()
     this.isAuth=false;
  }
 
}
