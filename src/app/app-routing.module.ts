import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { CartComponent } from './cart/components/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product/:id', component: ProductCardComponent},
  {path: 'checkout', component: CartComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: ErrorPageComponent}
];