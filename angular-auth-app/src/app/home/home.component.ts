// // src/app/home/home.component.ts
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
// import { LoginComponent } from '../login/login.component';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css'],
// })
// export class HomeComponent {

//   username !: string;
//   userDetail :any;
  
//   constructor(private cookie:CookieService ,private router: Router) {
//     this.userDetail = this.cookie.get('UserDetail')
//   }
  
  
//   deleteCookie(){
//     this.cookie.deleteAll();   
//     this.userDetail = ""
//   }

//   logout() {
//     // Simulate logout
//     localStorage.removeItem('isLoggedIn');
//     localStorage.clear();

    
//     this.router.navigate(['/login']);
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  username: string | undefined;
  userDetail: any;

  constructor(private cookie: CookieService, private router: Router) {
    this.userDetail = this.cookie.get('UserDetail');
    this.username = this.extractUsername(this.userDetail);
  }

  private extractUsername(userDetail: string): string {
    // Extract username from the userDetail string (assuming it follows the format)
    const match = userDetail.match(/username\s*:-\s*([^,]*)/);
    return match ? match[1].trim() : '';
  }

  deleteCookie() {
    this.cookie.deleteAll();
    this.userDetail = '';
    this.username = '';
  }

  logout() {
    // Clear authentication-related cookies on logout
    this.deleteCookie();

    // Simulate logout
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();

    this.router.navigate(['/login']);
  }
}
