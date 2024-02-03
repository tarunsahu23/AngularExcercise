// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  username !: string;
  
  constructor(private router: Router) {}

  logout() {
    // Simulate logout
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();

    
    this.router.navigate(['/login']);
  }
}
