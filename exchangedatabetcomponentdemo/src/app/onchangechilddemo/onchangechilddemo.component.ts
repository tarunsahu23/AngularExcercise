import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchangechilddemo',
  templateUrl: './onchangechilddemo.component.html',
  styleUrls: ['./onchangechilddemo.component.css']
})
export class OnchangechilddemoComponent implements OnInit ,OnChanges{

  @Input() UsernNameFromParentCompo:string|null= null;

  OldValue:string|null=null;
  NewValue:string|null=null;
  Message:string|null=null;

    constructor(){}
    ngOnChanges(changes: SimpleChanges): void {
      for(var property in changes){
        let change = changes[property];
        this.OldValue = change.previousValue;
        this.NewValue = change.currentValue;
      }

      if (this.NewValue==this.OldValue) {
        this.Message="No Changes were Detected.";
      }else{
        this.Message="Changes were Detected.";
      }


    };
    ngOnInit(): void {}
}
