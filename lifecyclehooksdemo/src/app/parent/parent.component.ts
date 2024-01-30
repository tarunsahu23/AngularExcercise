import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges , AfterContentInit, AfterContentChecked, ContentChild, AfterViewInit, AfterViewChecked, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges ,OnDestroy , OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  
  //this is used in ngAfterContentInit and  ngAfterContentChecked
  // @ContentChild(ChildComponent) childComponent !: ChildComponent;

  //this is used in ngAfterViewInit and ngAfterViewChecked
  @ViewChild(ChildComponent) childComponent !: ChildComponent;


  Message :any="";
  Counter :any=0;

  names : any[]=[];
  name :any;
  constructor(private cd:ChangeDetectorRef){
    console.log('Parent App constructor');
    
  }

  // onces all the template of your components view gets renderd and that's time the 
  //after view unit hooks can be used by developer


  ngAfterViewChecked(): void {
  console.log("Parent App ngAfterViewChecked");
  
  }
  ngAfterViewInit(): void {
    console.log('Parent App ngAfterViewInit');
    this.childComponent.title ="Ram Kumar Sahu"
    this.childComponent.sum=this.childComponent.add(50,40);
    this.cd.detectChanges();
  }
  ngAfterContentChecked(): void {
  
    console.log('Parent App ngAfterContentChecked');
  
  }
  ngAfterContentInit(): void {
    console.log('Parent App ngAfterContentInit');
    this.childComponent.title ="Ram Kumar Sahu"
    this.childComponent.sum=this.childComponent.add(50,40);

    }

  ngOnChanges(changes: SimpleChanges): void {
  console.log('Parent App ngonchange...');
  }
  
  ngDoCheck(): void {
    console.log('Parent App ngDoCheck');
    
  }
  ngOnInit(): void {
    console.log('parent App ngOninit');
    
  }
  ngOnDestroy(): void {
    console.log('parent App ngOnDestroy');
  }
    addName(name:string){
      this.names.push(name);
    }

}
