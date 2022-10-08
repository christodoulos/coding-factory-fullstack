import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class NoauthGuard implements CanActivate {
  constructor(private router: Router, private service: AppService) {
    console.log('noauth GUARD');
  }

  canActivate(): boolean {
    if (this.service.isUserLoggedIn()) {
      if (this.service.isAdmin()) {
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['user']);
      }
    } else {
      this.service.isLoggedIn$.next(false);
    }
    return true;
  }
}
