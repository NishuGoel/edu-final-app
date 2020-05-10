import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: any;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._getProductList();
  }

  private _getProductList() {
    this._productService.getProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data
    })
  }
}
