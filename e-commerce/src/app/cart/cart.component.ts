import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DatatransferService } from '../servcies/datatransfer.service';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{
 private router = new Router()
  constructor(private products:DatatransferService,private order:HttpClient){}
  ngOnInit(): void {
    
  }

  isCardOpen = false;
  productss:any=[]
  
 toggleCard() { 
   this.productss as Array <any> ;
   this.isCardOpen = !this.isCardOpen;
    let data:any = localStorage.getItem('cart')
     this.productss  =JSON.parse(`[${data}]`) 
       this.productss =this.deduplicateAndAddQuantity( this.productss )
   
  

}
 deduplicateAndAddQuantity(items:any) {
  const uniqueItems :any= [];

  items.forEach((item:any) => {
    // البحث عن الكائن في المصفوفة الفريدة
    const existingItem = uniqueItems.find((unique:any) => unique.id === item.id);
    
    if (existingItem) {
      // إذا كان موجودًا، قم بزيادة qunt
      existingItem.qunt = (existingItem.qunt || 1) + 1;
    } else {
      // إذا لم يكن موجودًا، أضفه مع qunt = 1
      uniqueItems.push({ ...item, qunt: 1 });
    }
  });

  return uniqueItems;
}
orderfun(){
  const order = this.productss
  order.map((e:any)=>{
    e.total=e.qunt
    delete e.qunt
  })

  this.order.post('http://localhost:3000/Products/order', order).subscribe(
     (response) => {
 alert('Order placed successfully')
    this.router.navigate(['/products']);
    this.clearCard()
  },
  (error) => {
   
   alert('Error placing order:');
  }
  )

  
}

clearCard(){
  this.productss=[]
  localStorage.removeItem('cart')
}
}
