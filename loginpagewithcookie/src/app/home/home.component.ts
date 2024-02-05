import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router , private appcompo:AppComponent){}
  logout(){
    this.appcompo.isLogin=false;
    this.router.navigate(["login"]);
  }
}
