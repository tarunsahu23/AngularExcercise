import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../interfaces/login';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  model: Login = { userid: 'admin', password: 'admin@123' };
  loginForm !: FormGroup;
  message !: string;
  returnUrl: string = '/dashboard';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.logout();
  }

  // Convenience method to safely access form controls
  getControlValue(controlName: string): string {
    return this.loginForm.get(controlName)?.value as string;
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.getControlValue('userid') === this.model.userid && this.getControlValue('password') === this.model.password) {
        console.log('Login successful');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', this.getControlValue('userid'));
        this.router.navigate([this.returnUrl]);
      } else {
        this.message = 'Please check your userid and password';
      }
    }
  }
}
