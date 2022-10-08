import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private service: AppService) {
    console.log('admin GUARD');
  }

  canActivate(): boolean {
    if (!this.service.isUserLoggedIn()) {
      this.router.navigate(['login']);
      // this.service.logoutUser();
    } else {
      if (!this.service.isAdmin()) {
        this.router.navigate(['user']);
      }
    }
    return this.service.isAdmin();
  }
}
