import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcompo',
  templateUrl: './parentcompo.component.html',
  styleUrls: ['./parentcompo.component.css']
})
export class ParentcompoComponent implements OnInit {

Products : any[] = [];
AllProductCategories:number=0;
ElectronicProductCategories:number=0;
JeweleryProductCategories:number=0;
MensProductCategories:number=0;
WomensProductCategories:number=0;

LoadOnPage(url:string){
  fetch(url)
  .then(resp => resp.json())
  .then(data =>{
    this.Products = data;
    this.AllProductCategories = data.length;
    this.ElectronicProductCategories = data.filter(function (product:any) {
      return product.category=="electronics";
    }).length
    this.JeweleryProductCategories = data.filter(function (product:any) {
      return product.category =="jewelery";
    }).length
    this.MensProductCategories = data.filter(function (product:any) {
      return product.category =="men's clothing";
    }).length
    this.WomensProductCategories = data.filter(function (product:any) {
      return product.category =="women's clothing";
    }).length
  })  
}

FilterChanged(catagory:string){
  
   if (catagory =="All") {
    this.LoadOnPage(`https://fakestoreapi.com/products`);
   } else {
    fetch(`https://fakestoreapi.com/products/category/${catagory}`)
    .then(resp => resp.json())
    .then(data => {
      this.Products = data;
    })
  }
}

constructor (){};
ngOnInit(): void {
}
}
