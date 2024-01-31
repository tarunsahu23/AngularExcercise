import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-cookiesdemo',
  templateUrl: './cookiesdemo.component.html',
  styleUrls: ['./cookiesdemo.component.css']
})
export class CookiesdemoComponent {

  userName : string ='';
  getAllCookies : any =[];

  constructor(private cookiesservice:CookieService){
    this.cookiesservice.set('Name','Ramesh sahu');
    this.cookiesservice.set('Age','35');
    this.cookiesservice.set('Place','Goa');

  }

}
