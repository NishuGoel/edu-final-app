import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { ShopProductComponent } from './shop-product/shop-product.component';


@NgModule({
  declarations: [ProductListComponent, ProductCardComponent, ShopProductComponent],
  imports: [
    CommonModule, FormsModule, BrowserModule
  ],
  exports: [ProductListComponent, ProductCardComponent]
})
export class ProductModule { }
