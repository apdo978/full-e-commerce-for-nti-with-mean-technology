import { Component } from '@angular/core';
import { UserService } from '../servcies/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as  jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-userpanal',
  standalone: false,
  
  templateUrl: './userpanal.component.html',
  styleUrl: './userpanal.component.css'
})
export class UserpanalComponent {
    userForm!: FormGroup;
    data:string|null= localStorage.getItem('authToken')
    userData:any = jwt_decode.jwtDecode(this.data!)
  errorMessage: string = '';

  constructor(private user:UserService,     private fb: FormBuilder,  private http: HttpClient,  private router: Router){
      
    
        
    this.userForm = this.fb.group({
      name: [this.userData.name, [Validators.required, Validators.minLength(3)]],
      email: [this.userData.email, [Validators.required, Validators.email]],
            newemail: ['', [Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
             newPAssword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    // Subscribe to the isAuthenticated observable to check if the user is logged in
    this.user.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        // Redirect to the login page if the user is not authenticated
        this.router.navigate(['/login']);
      } 
    });
    
  }
 
    get newPAssword() {
    return this.userForm.get('newPAssword');
  }
  
   onSubmit(): void {
     console.log(this.userForm.value);
     
     if (this.userForm.valid) {
       const updatedData = this.userForm.value;
       

      this.http.patch('http://localhost:3000/Users/EditUsers', updatedData).subscribe(
        (response) => {
          alert('User data updated successfully');
        },
        (error) => {
        
          console.log(error);
          
          this.errorMessage = 'Error updating user data'+error.error.data.data;
        }
      );
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  }


}
