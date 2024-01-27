import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  
  @Input() AllProductCount:number =0;
  @Input() ElectronicProductCount:number =0;
  @Input() JewelaryProductsCount:number =0;
  @Input() MensProductsCount:number =0;
  @Input() WomensProductCount:number =0;

  CategoryName : string ='';

  @Output() FilterClick:EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(e:any){
    this.CategoryName = e.target.name;
    this.FilterClick.emit(this.CategoryName);
  }
  constructor(){};
  ngOnInit(): void {
  }
}
