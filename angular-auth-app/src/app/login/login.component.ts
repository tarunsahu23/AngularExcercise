// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../service/auth.service';
// import { Location } from '@angular/common';
// import { CookieService } from 'ngx-cookie-service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })

// export class LoginComponent {

//   reactiveForm !: FormGroup;

//   constructor(private cookie: CookieService, private router: Router, private formBuilder: FormBuilder,
//     private authService: AuthService, private location: Location
//   ) {
    
//     this.reactiveForm = this.formBuilder.group({
//       username: ['', [Validators.required, Validators.minLength(5)]],
//       password: ['', [Validators.required, Validators.minLength(5)]],
//     });
//   }

//   login() {
//     if (this.reactiveForm.valid) {
//       const username = this.reactiveForm.get('username')?.value;
//       const password = this.reactiveForm.get('password')?.value;

//       const isAuthenticated = this.authService.login(username, password);

//       if (isAuthenticated) {
//         // Set a cookie to remember user details (if needed)
//         this.cookie.set("UserDetail", "username :-" + username + ",password :-" + password);

//         // Set a cookie to indicate successful login
//         this.cookie.set("isLoggedIn", "true");

//         // Set a flag in localStorage (as done in AuthService)
//         localStorage.setItem('isLoggedIn', 'true');

//         // Clear the navigation history
//         this.location.replaceState('/home');
        
//         // Navigate to home page
//         this.router.navigate(['/home']);

//         // Simulate successful login
//         console.log('Login successful');
//       } else {
//         // Handle failed login
//         console.log('Authentication failed');
//         alert('Authentication failed');
//       }
//     }
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  reactiveForm !: FormGroup;

  constructor(private cookie: CookieService, private router: Router, private formBuilder: FormBuilder,
    private authService: AuthService, private location: Location
  ) {
    
    this.reactiveForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  login() {
    if (this.reactiveForm.valid) {
      const username = this.reactiveForm.get('username')?.value;
      const password = this.reactiveForm.get('password')?.value;

      const isAuthenticated = this.authService.login(username, password);

      if (isAuthenticated) {
        // Set a cookie to remember user details (if needed)
        this.cookie.set("UserDetail", "username :-" + username + ",password :-" + password);

        // Set a cookie to indicate successful login
        this.cookie.set("isLoggedIn", "true");

        // Set a flag in localStorage (as done in AuthService)
        sessionStorage.setItem('isLoggedIn', 'true');
        

        
        // this.location.replaceState('/home');
        
        // Navigate to home page
        this.router.navigate(['/home']);

        // Simulate successful login
        console.log('Login successful');
      } else {
        // Handle failed login
        console.log('Authentication failed');
        alert('Authentication failed');
      }
    }
  }
}
