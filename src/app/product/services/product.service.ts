import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  counter: number = 0;
  products: Array<{}> = [];
  private _tokenProviderSubject: BehaviorSubject<any>;
  public tokenProviderObservable$: Observable<any>;
  constructor(private http: HttpClient) {
    this._tokenProviderSubject = new BehaviorSubject(0);
    this.tokenProviderObservable$ = this._tokenProviderSubject.asObservable();
  }

  getProducts() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  getProduct(id): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }

  setCounter(id) {
    id === null ? (this.counter = 0) : (this.counter = this.counter + 1);
    this.getProduct(id).subscribe((data) => {
      this.products.push(data);
    });
    this._tokenProviderSubject.next(this.counter);
  }
  //  getCounter(){
  //    return this.counter;
  //  }
}
