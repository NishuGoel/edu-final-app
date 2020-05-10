import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {
  id: number;
  productData: any;
  added: boolean
  constructor(private _activateService: ActivatedRoute, private _productService: ProductService, private _router: Router) { }

  ngOnInit(): void {
    this.id = +this._activateService.snapshot.paramMap.get('id');
    this._getProduct();
  }

  private _getProduct() {
    this._productService.getProduct(this.id)
      .subscribe(data => {
        this.productData = data;
        console.log(data);
      })
  }

  add(){
    this.added = true;
    this._productService.setCounter();
  }

  explore(){
    this._router.navigate(['/products'])
  }
}
