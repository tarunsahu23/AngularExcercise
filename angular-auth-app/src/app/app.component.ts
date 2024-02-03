import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth-app';

  islogedIn: boolean;

  constructor() {
    this.islogedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (this.islogedIn) {
      localStorage.removeItem('isLoggedIn');
      localStorage.clear()
    }
  }

}

