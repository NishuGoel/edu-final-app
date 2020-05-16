import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FadedFullScreenLoaderService {
  private _fadedScreenLoaderSubject = new Subject<boolean>();
  public fadedScreenLoaderObservable$: Observable<boolean>;
  constructor() {
    this.fadedScreenLoaderObservable$ = this._fadedScreenLoaderSubject.asObservable();
  }
  public setLoadingScreenState(state: boolean) {
    this._fadedScreenLoaderSubject.next(state);
  }
}
