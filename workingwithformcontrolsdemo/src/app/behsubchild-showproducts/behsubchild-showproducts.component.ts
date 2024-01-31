import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';

@Component({
  selector: 'app-behsubchild-showproducts',
  templateUrl: './behsubchild-showproducts.component.html',
  styleUrls: ['./behsubchild-showproducts.component.css']
})
export class BehsubchildShowproductsComponent {

  constructor(private landingSer :CustomsharedService){}

  categoryWiseProduct : any = [];

  ngOninit() : void {

    this.landingSer.captureBeh.subscribe(resCategoryName => {
      if (resCategoryName != null) {
          this.landingSer.getbehCategoriesWiseProductData(resCategoryName).subscribe((data:any)=>{
              if(data){
                this.categoryWiseProduct = data;
              }
          })
      }
    })
  }
}
