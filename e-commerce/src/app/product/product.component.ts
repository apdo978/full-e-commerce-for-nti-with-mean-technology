import { Component, OnInit } from '@angular/core';
import { DatatransferService } from '../servcies/datatransfer.service';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-product',
  standalone: false,
  
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  product:any = {}
constructor(private getproduct:DatatransferService){
  
}
  ngOnInit(): void {
this.getproduct.getToken().subscribe((value)=>{this.product = value
})
  }
  addTocart(value:Products){
    this.getproduct.updateCart(value)
  }
}
