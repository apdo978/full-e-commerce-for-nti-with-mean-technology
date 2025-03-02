import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Routing Module/app-routing.module';
import { AppComponent } from './appComponant/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pip/search.pipe';
import { AuthInterceptor } from './servcies/intercepter.service';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AdminpanalComponent } from './adminpanal/adminpanal.component';
import { UserpanalComponent } from './userpanal/userpanal.component';
import { AdminFeaturesComponent } from './admin-features/admin-features.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    NotfoundComponent,
    RegisterComponent,
    SearchPipe,
    ProductComponent,
    CartComponent,
    AdminpanalComponent,
    UserpanalComponent,
    AdminFeaturesComponent,
    AdminOrdersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule 
  ],
  providers: [   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
