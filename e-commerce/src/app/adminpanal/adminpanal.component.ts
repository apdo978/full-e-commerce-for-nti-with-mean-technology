import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-adminpanal',
  standalone: false,
  
  templateUrl: './adminpanal.component.html',
  styleUrl: './adminpanal.component.css'
})
export class AdminpanalComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder,private http: HttpClient) {
this.productForm = this.fb.group({
  ObjectId: [
    '', 
    [Validators.required, Validators.pattern('^[a-fA-F0-9]{24}$')], // تحقق من 24 حرفًا/رقمًا مثل ObjectId
  ],
  id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  title: ['', [Validators.required, Validators.minLength(3)]],
  price: ['', [Validators.required, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]],
  description: ['', [Validators.required, Validators.maxLength(200)]],
  category: ['', Validators.required],
  imageUrl: ['', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg))')]],
  rating: this.fb.group({
    rate: ['', [Validators.required, Validators.pattern('^[0-5](\.[0-9])?$')]],
    count: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  }),
});
  }

onSubmit() {
  if (this.productForm.valid) {
    console.log(this.productForm.value);
    
    this.http.post('http://localhost:3000/Products/insertProduct', this.productForm.value)
      .subscribe(response => {
        console.log('Product added successfully:', response);
      });
  }}
}
