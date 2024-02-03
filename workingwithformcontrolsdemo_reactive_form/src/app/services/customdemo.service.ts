import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomdemoService {

  constructor(private http : HttpClient) {}

  getAllowanceTypes():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/allowancetypes');
  }
}
