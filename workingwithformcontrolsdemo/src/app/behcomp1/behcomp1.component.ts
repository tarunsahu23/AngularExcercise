import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';
@Component({
  selector: 'app-behcomp1',
  templateUrl: './behcomp1.component.html',
  styleUrls: ['./behcomp1.component.css']
})
export class Behcomp1Component {

  userName:any
  constructor(private _sharedservice:CustomsharedService){

      this._sharedservice.userName.subscribe((uname)=>{
        this.userName = uname;  
        //subcribe and get return value.        
      })
  }

  updateUserName(uname:any){
    
    
    this._sharedservice.userName.next(uname.value)


    //pass value to behavirol subject , we subcribe onces and when
    //ever you want to without subcribing, you want to pass the using "next()".
  }

}
//whenever a component has to wants read the behavioral subject value,it has to
//subscrib to that and then getting value from shared service
//---->behaveral subject is username-->variable(uname)-->save in userName
//now we are pass some data and recevie data
//it used cross component communication