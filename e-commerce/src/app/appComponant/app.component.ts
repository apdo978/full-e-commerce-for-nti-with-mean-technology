import { Component, OnInit } from '@angular/core';
import {UserService} from '../servcies/user.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private user:UserService,private router:Router){}
ngOnInit(): void {
    // Subscribe to the isAuthenticated observable to check if the user is logged in
    this.user.isAuthenticated().subscribe((data) => {
      if (!data) {
        // Redirect to the login page if the user is not authenticated
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['Home']);
        // Fetch products if the user is authenticated
       
      }
    });
  }
  title = 'e-commerce';
}
