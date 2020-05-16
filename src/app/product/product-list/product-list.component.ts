import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FadedFullScreenLoaderService } from '../services/faded-full-screen-loader.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: any;
  constructor(private _productService: ProductService, private _fadedLoadedService: FadedFullScreenLoaderService) { }

  ngOnInit(): void {
    this._fadedLoadedService.setLoadingScreenState(true);
    this._getProductList();
  }

  private _getProductList() {
    this._productService.getProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data;
      this._fadedLoadedService.setLoadingScreenState(false);
    })
  }
}
