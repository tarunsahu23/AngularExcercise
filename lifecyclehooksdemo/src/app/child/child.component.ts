import { Component ,OnChanges,OnDestroy,OnInit,DoCheck, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges ,OnDestroy , OnInit ,DoCheck {

  //Value and primativetype type of input properties ngOnchange work in background
  @Input() Message:any;
  @Input() Counter:any;

  //refrences type of input properties ngDoCkecks which will do work for  use in background
  @Input() names !:any[];
  
  title :string="";
  sum :any=0;

  
  
  
  constructor(){
    console.log('Child App Constructor..');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child App ngOnChanges..');
    console.log(changes);
    
    for(let i=1 ; i <= this.Counter;i++){
      console.log(this.Message);
    }
    
  }
  ngDoCheck(): void {
    console.log('Child App ngDocheck');
    
  }
  ngOnDestroy(): void {
    console.log('Child App ngOnDestory');
  }
  ngOnInit(): void {

    console.log('Child App ngOnInit');
    this.title ="Ram sahu";
  }
  add(a:number,b:number){
    return(a+b);
  }


}
