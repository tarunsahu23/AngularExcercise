// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {

  reactiveForm !: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder,
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



        localStorage.setItem('isLoggedIn', 'true');


        // Clear the navigation history
        this.location.replaceState('/home');


        this.router.navigate(['/home']);

        // Simulate successful login
        console.log('Login successful');
        // Redirect to home page or perform other actions
      } else {
        // Handle failed login
        console.log('Authentication failed');
        alert('Authentication failed')
      }
    }
  }



}
