import { Component ,OnChanges,OnInit,DoCheck,OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges ,OnDestroy , OnInit ,DoCheck  {
  
  isVisible : boolean=true;

  //Constructor is the place where mostly you try to inject the any dependency 
  //services that component requires.
  constructor(){
    console.log('App component Constructor..');
    
  }
  //ngOnchange is excuted for only component which has got input properties
  ngOnChanges(changes: SimpleChanges): void {
    console.log('App component ngOnChange...');
    
  }

  //ngOninit ,basically you will be creating you initializing your member variable of your component maybe getting some data from Api and store in variable member.
  ngOnInit(): void {
    console.log('App component ngOninit..');
    
  }  
  ngDoCheck(): void {
    console.log('App component ngDoCheck...');
    
  }
  ngOnDestroy(): void {
    console.log('App component ngOnDestroy...');
    
  }   

  //ngOnDestroy used to remove component from dom
  showhide(){
    this.isVisible = !this.isVisible;
  }

  title = 'lifecyclehooksdemo';

}
