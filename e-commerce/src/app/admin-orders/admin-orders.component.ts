import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  standalone: false,
  
  templateUrl: './admin-orders.component.html',
  styleUrl: './admin-orders.component.css'
})
export class AdminOrdersComponent {
   orders:any= [];
  constructor(private  getorders:HttpClient){
    this.getorders.get('http://localhost:3000/admins/customersOrders').subscribe(
      (res)=>{this.orders=res},
      (err)=>{this.orders=[{err:err}] }
    )
  }

}
