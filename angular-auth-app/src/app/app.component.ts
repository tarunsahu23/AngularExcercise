import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth-app';

  islogedIn: boolean;

  constructor(private cookie: CookieService , private router: Router) {
    this.islogedIn = cookie.get('isLoggedIn') === 'true';
    if (this.islogedIn) {
    // Navigate to home page
     this.router.navigate(['/home']);
    }
  }

}

