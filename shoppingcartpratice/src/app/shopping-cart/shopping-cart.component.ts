import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit{

  Categories : string [] = [];

  Product : any[]=[];

  constructor(){}
  ngOnInit(): void {
    this.LoadAllCategories();
  }

  LoadAllCategories(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(resp => resp.json())
    .then(data => {
      data.unshift("All Categories")
      this.Categories = data;
    })
  }
  LoadAllProductCategoriesWise(url:string){
    fetch(url)
    .then(resp => resp.json())
    .then(data =>{
      this.Product = data;
    })
  }

  onCategoryChanged(e:any){
    if (e.target.value=="All Categories") {
      this.LoadAllProductCategoriesWise('https://fakestoreapi.com/products');
    } else {
      this.LoadAllProductCategoriesWise(`https://fakestoreapi.com/products/${e.target.value}`)
    }
  }

  


}
