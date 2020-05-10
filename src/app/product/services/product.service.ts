import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  counter: number = 0;
  private _tokenProviderSubject: BehaviorSubject<number>;
  public tokenProviderObservable$: Observable<number>;
  constructor(private http: HttpClient) { 
    this._tokenProviderSubject = new BehaviorSubject(0);
    this.tokenProviderObservable$ = this._tokenProviderSubject.asObservable();
  }

  getProducts(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getProduct(id): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/photos/' + id);
  }

  setCounter(){
    this._tokenProviderSubject.next(++this.counter);
   }
   getCounter(){
     return this.counter;
   }
  
}
