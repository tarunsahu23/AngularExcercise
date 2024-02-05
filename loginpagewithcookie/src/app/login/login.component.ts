import { Component } from '@angular/core';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  reactiveForm !: FormGroup;
  staticUsername='admin';
  staticPassword='admin';

  constructor(private fb:FormBuilder ,private appCompo:AppComponent,private router:Router){
    this.reactiveForm = this.fb.group({
      Username :["",Validators.required],
      Password :["",Validators.required],
      
    })
  }

  login(){
    debugger
    if(this.reactiveForm.valid){
      if (this.staticUsername == this.reactiveForm.value.Username) {
        if (this.staticPassword == this.reactiveForm.value.Password) {
                  this.appCompo.isLogin=true;
                  this.router.navigate(['/home']);
        }else{
          alert("please enter valid email");
        }
      }
    }    
  }
}
