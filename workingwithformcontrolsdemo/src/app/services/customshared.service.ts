import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomsharedService {
  
  userName = new BehaviorSubject('Raja Ram');
  constructor() { } 
}
