import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';

@Component({
  selector: 'app-behmaincompo',
  templateUrl: './behmaincompo.component.html',
  styleUrls: ['./behmaincompo.component.css']
})
export class BehmaincompoComponent {
  userName:any;
  constructor(private _sharedservice:CustomsharedService){

    this._sharedservice.userName.subscribe((uname)=>{
      this.userName = uname;  
      //subcribe and get return value.        
    })
}
}
