import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from './product/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'edu-final-app';
  counter: number=0;
  constructor(private _prodService: ProductService){}

  ngOnInit(){
    this._prodService.tokenProviderObservable$
    .subscribe(data => this.counter = data);
    console.log(this.counter);
  }
}
