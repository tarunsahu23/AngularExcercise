import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  MessageToChild !: string;
  ProductDetails : any ={};

  SendMessageToChild(){
    this.MessageToChild = "Hello this message from parent Components";
    this.ProductDetails = {Name:'Dell 17',Price:113000}
  }
  constructor(){}
  ngOnInit(): void {
  }

  MessageFromChild:string ='';
  ReciveMessageFromChild(e:string){
    this.MessageFromChild = e;
  }
}
