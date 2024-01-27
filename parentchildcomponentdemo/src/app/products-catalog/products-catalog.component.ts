import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrls: ['./products-catalog.component.css']
})
export class ProductsCatalogComponent implements OnInit{

  Products:any[] = [];
  AllProductCount:number=0;
  ElectronicProductCount:number =0;
  JewelaryProductsCount:number =0;
  MensProductsCount:number =0;
  WomensProductCount:number =0;

  constructor(){}
  ngOnInit(): void {
    this.LoadProduct(`https://fakestoreapi.com/products`);
  }
  LoadProduct(url:string){
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
      this.Products = data;
      this.AllProductCount = data.length;
      this.ElectronicProductCount = data.filter(function(products:any){
        return products.category =="electronics";
      }).length;
      this.JewelaryProductsCount = data.filter(function(products:any){
        return products.category =="jewelery";
      }).length;
      this.MensProductsCount = data.filter(function(products:any){
        return products.category =="men's clothing";
      }).length;
      this.WomensProductCount = data.filter(function(products:any){
        return products.category =="women's clothing";
      }).length;
    })
  }

  FilterChanged(category:string){
    if (category=="all") {
        this.LoadProduct(`https://fakestoreapi.com/products`);      
    }else{
      fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(resp => resp.json())
      .then( data =>{
        this.Products =  data; 
      })
    }
  }
}
