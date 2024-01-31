import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';

@Component({
  selector: 'app-behcomp4',
  templateUrl: './behcomp4.component.html',
  styleUrls: ['./behcomp4.component.css']
})
export class Behcomp4Component {

  
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
