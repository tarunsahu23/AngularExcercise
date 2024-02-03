// auth.guard.ts
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.checkAuthentication(event.url);
      }
    });
  }

  private checkAuthentication(url: string): void {
    if (!this.authService.isLoggedIn() && url !== '/login') {
      // If not authenticated and trying to access a protected route, redirect to login
      this.router.navigate(['/login']);
    }
  }

  canActivate(): boolean {
    return true; // This method is not used for checking authentication directly
  }
}
