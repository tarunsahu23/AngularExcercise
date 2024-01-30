import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchangeparentdemo',
  templateUrl: './onchangeparentdemo.component.html',
  styleUrls: ['./onchangeparentdemo.component.css']
})
export class OnchangeparentdemoComponent implements OnInit{

  UserName:string|null="Conners McGregor";  
  
  constructor(){}
   ngOnInit(): void {
   }

}
