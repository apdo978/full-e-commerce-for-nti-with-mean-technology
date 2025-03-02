import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../servcies/get-products.service';
import { Products } from '../interfaces/products';
import {UserService} from '../servcies/user.service'
import { Router } from '@angular/router'; 
import { DatatransferService } from '../servcies/datatransfer.service';
@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
   arr:Products[] = []
constructor(private _getproducts:GetProductsService,private user:UserService,  private router: Router,private data:DatatransferService){
  
}
searchTerm:string = '';
getAllProducts (): void {
  this._getproducts.getProducts().subscribe({
    next:(data)=>{ console.log();this.arr = data.data.data },
    error:(err)=>{console.log(err)
    },
    //complete:()=>{}//finally
  })
}
ngOnInit(): void {
    // Subscribe to the isAuthenticated observable to check if the user is logged in
    this.user.isAuthenticated().subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        // Redirect to the login page if the user is not authenticated
        this.router.navigate(['/login']);
      } else {
      this.getAllProducts ()
       
      }
    });
  }
  showDetails(product:Products){
this.data.updateToken(product)
  this.router.navigate(['/product-details',product.id]);
  }
}
