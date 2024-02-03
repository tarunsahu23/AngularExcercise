import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../../services/auth.service';  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  id !: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.loadUserId();
  }

  logout() {
    console.log('Logging out');
    this.authService.logout();
    this.navigateToLogin();
  }

  private loadUserId() {
    this.id = localStorage.getItem('token')!;
    // Uncomment if needed
    // console.log(this.id);
  }

  private navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
