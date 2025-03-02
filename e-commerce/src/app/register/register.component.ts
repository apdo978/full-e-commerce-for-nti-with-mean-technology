import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string=""
  formErrorMessage: string=""

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get isFormValid(): boolean {
    return this.registerForm.valid;
  }

  onSubmit(): void {
    if (this.isFormValid) {
      const formData = this.registerForm.value;

      // إرسال البيانات إلى الـ backend
      this.http.post('http://localhost:3000/Users/InsertUserS', formData).subscribe(
        (response) => {
     this.errorMessage = response.toString()
          this.router.navigate(['/login']); // اعادة التوجيه إلى صفحة تسجيل الدخول
        },
        (error) => {
     this.errorMessage = 'Registration failed, please try again later.'; 
        }
      );
    } else {
     this.formErrorMessage = 'Please fill in all fields correctly.';
    }
  }

}
