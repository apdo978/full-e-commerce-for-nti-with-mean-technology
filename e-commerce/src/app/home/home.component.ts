import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  orders:any=[];
  constructor(private  getorders:HttpClient,  private router: Router){
     this.getorders.get('http://localhost:3000/Products/lastOrders').subscribe(
      (res:any)=>{
        this.orders=res
        console.log(res[0].products);
        
      },
      (err)=>{alert("Please Login first ") 
         this.router.navigate(['/login']);
      }
    )
  }

}
