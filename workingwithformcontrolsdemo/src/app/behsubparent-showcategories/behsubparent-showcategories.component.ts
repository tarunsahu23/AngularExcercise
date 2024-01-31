import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-behsubparent-showcategories',
  templateUrl: './behsubparent-showcategories.component.html',
  styleUrls: ['./behsubparent-showcategories.component.css']
})
export class BehsubparentShowcategoriesComponent {

  allCategories !: [];  //array hold categories 
  reactiveForm !: FormGroup;

  //injecting service into constructor

  constructor(private landingSer:CustomsharedService){
  }

  ngOnInit():void{
    this.reactiveForm = new FormGroup({
      behData :new FormControl()
    });
    this.getCategories();
  }
  getCategories(){
     
    this.landingSer.getbehCategories().subscribe((data:any)=>{
      if(data){
        this.allCategories = data;
      }
    })
  }
  updateInputs(){
    this.landingSer.setCategoryName(this.reactiveForm.get('behData')!.value);
  }

}
