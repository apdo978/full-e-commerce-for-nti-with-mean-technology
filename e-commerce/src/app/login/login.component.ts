import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { customEmailValidator, passwordStrengthValidator } from './../validators/validator';
import {UserService} from '../servcies/user.service'
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = new Router()
  loginState:string ='' 
  constructor(private user:UserService){}

loginForm:FormGroup = new FormGroup({
  email:new FormControl(null,[
    Validators.required,
    Validators.email,
    customEmailValidator()
]),
  password: new FormControl(null,[
    Validators.required,
    Validators.minLength(8),
  ])//intial value
})
submit(form:FormGroup){
 this.user.login(this.loginForm.value).subscribe({
  next:(res)=>{
     if (res && res.data.data) {
            this.user.storeToken(res.data.data);
             this.router.navigate(['/products']);
          }
  },
   error: (error) => {
  
         this. loginState = error.error.data.field
        }
 })

}


}
// passwordStrengthValidator()
