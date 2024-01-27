import { Component, EventEmitter, Input, OnInit ,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
    

  // input decorator used

    @Input() MessageFromParent:string | null="wating for message from parent compoent..."
    @Input() ProductDetails : any ={'Name':'','Price':0};

  // output decorator used

  @Output() ChildCompoEventClick:EventEmitter<any> = new EventEmitter<any>();

  MessageToParent:string = 'Hello ! from child Componet';

  SendMessageToParent(){
    this.ChildCompoEventClick.emit(this.MessageFromParent);
  }

    constructor(){}
    ngOnInit(): void {
    }
}

