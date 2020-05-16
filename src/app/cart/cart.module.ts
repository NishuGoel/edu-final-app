import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule, ProductModule
  ],
  exports: [CartComponent]
})
export class CartModule { }
