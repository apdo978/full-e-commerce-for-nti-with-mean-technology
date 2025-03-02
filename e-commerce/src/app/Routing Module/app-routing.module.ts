import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ProductsComponent } from '../products/products.component';
import { HomeComponent } from '../home/home.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { RegisterComponent } from '../register/register.component';
import { ProductComponent } from '../product/product.component';
import { AdminpanalComponent } from '../adminpanal/adminpanal.component';
import { UserpanalComponent } from '../userpanal/userpanal.component';
import { AdminFeaturesComponent } from '../admin-features/admin-features.component';
import { AdminOrdersComponent } from '../admin-orders/admin-orders.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},{path:'login',component:LoginComponent},
                        {path:'products',component:ProductsComponent},
                        {path:'login/Register',component:RegisterComponent}
                        , { path: 'product-details/:id', component: ProductComponent },
                        {path:'panal',component:AdminFeaturesComponent,canActivate: [AuthGuard]},
                        {path:'Account',component:UserpanalComponent},
                        {path:"Home",component:HomeComponent},
                        {path:"panal/orders",component:AdminOrdersComponent,canActivate: [AuthGuard]},
                        {path:"panal/addProduct",component:AdminpanalComponent,canActivate: [AuthGuard]},
                        {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
