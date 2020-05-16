import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  ordered: boolean;
  products: any;
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.products;
    this._subscribeToProducts();
  }
  complete(){
    this.ordered = true;
  }

  private _subscribeToProducts (){
    this._productService.tokenProviderObservable$
    .subscribe((data)=> {
      console.log(data);
      this._getProd(data.id);
    })
  }

  private _getProd(id){
    this._productService.getProduct(id)
    .subscribe((data)=> {
      console.log(data);
      this._productService.products.push(data);
      debugger;
      this.products = this._productService.products;
    })
  }
}
