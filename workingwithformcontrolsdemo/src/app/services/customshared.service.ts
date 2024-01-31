import { Injectable } from '@angular/core';

import { BehaviorSubject, from } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomsharedService {
  
  userName = new BehaviorSubject('Raja Ram');

  public captureBeh = new BehaviorSubject<any>('');

  constructor(private http : HttpClient) { } 

  //receving  dropdown value from parent compoent

  setCategoryName(categoryname:any){
    this.captureBeh.next(categoryname);
  }

  getbehCategories(){
    let url = 'https://fakestoreapi.com/products/categories';
    return this.http.get(url);
  }

  getbehCategoriesWiseProductData(category:any){
    let url = 'https://fakestoreapi.com/products/category/'+category;
    return this.http.get(url);
  }


}
