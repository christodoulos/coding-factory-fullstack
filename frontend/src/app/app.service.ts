import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoggedIn$ = new BehaviorSubject(this.isUserLoggedIn());
  isLoading$ = new BehaviorSubject(false);
  constructor(private router: Router) {
    console.log('In App service');
  }

  navigate(to: string) {
    switch (to) {
      case '':
        this.router.navigate(['']);
        break;
      case 'Εγγραφή':
        this.router.navigate(['register']);
        break;
      case 'Είσοδος':
        this.router.navigate(['login']);
        break;
      case 'Έξοδος':
        this.logoutUser();
        break;
      default:
        break;
    }
  }

  isUserLoggedIn(): boolean {
    const access_token = localStorage.getItem('access_token');
    if (access_token !== null) {
      return !helper.isTokenExpired(access_token);
    }
    return false;
  }

  logoutUser(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    this.isLoggedIn$.next(this.isUserLoggedIn());
    this.router.navigate(['']);
  }

  isAdmin(): boolean {
    const access_token = localStorage.getItem('access_token');

    if (access_token) {
      return helper.decodeToken(access_token).sub.isAdmin;
    }
    return false;
  }
}
