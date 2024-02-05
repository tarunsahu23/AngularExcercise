// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
  
//   private isAuthenticated: boolean = false;

//   login(username: string, password: string): boolean {
    
//     this.isAuthenticated = username === 'admin' && password === 'admin';
//     return this.isAuthenticated;

//   }

//   logout(): void {
//     this.isAuthenticated = false;
//   }

//   isLoggedIn(): boolean {
//     return this.isAuthenticated;
//   }

  
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    // Example: Check if username and password match expected values
    this.isAuthenticated = username === 'admin' && password === 'admin';
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
