import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/services/dataservice.service';

@Component({
  selector: 'app-testservice',
  templateUrl: './testservice.component.html',
  styleUrls: ['./testservice.component.css']
})
export class TestserviceComponent implements OnInit{

    Categories :string[]=[];
    Products :any[]=[];
      constructor(private data:DataserviceService){}
      ngOnInit(): void {
        this.data.GetCategories().subscribe(category=>this.Categories = category);
        this.data.GetProduct().subscribe(product => this.Products=product);
      }
}
