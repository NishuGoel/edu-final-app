import { Injectable } from '@angular/core';
import { ExtendDataService } from './extend-data.service';

@Injectable({
  providedIn: 'root',
})
export class DataService implements ExtendDataService {
  sendData(message) {
    console.log(message);
  }
}
