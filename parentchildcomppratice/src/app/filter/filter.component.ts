import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  implements OnInit{

  @Input() AllProductCategories:number=0;
  @Input() ElectronicProductCategories:number=0;
  @Input() JeweleryProductCategories:number=0;
  @Input() MensProductCategories:number=0;
  @Input() WomensProductCategories:number=0;

  Categories:string='';

  @Output() FilterClick:EventEmitter<string> = new EventEmitter<string>();

  onButtonClick(e:any){
    this.Categories = e.target.name;
    this.FilterClick.emit(this.Categories)
  }

  constructor(){}
  ngOnInit(): void {
  }
}
