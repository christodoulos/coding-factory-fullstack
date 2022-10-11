import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogService } from '@ngneat/dialog';
import { NgxAlertComponent } from 'ui';
import { Department, UserCategory } from 'interfaces';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLoggedIn$ = new BehaviorSubject(this.isUserLoggedIn());
  isLoading$ = new BehaviorSubject(false);
  userCategories$ = new BehaviorSubject([] as UserCategory[]);
  departments$ = new BehaviorSubject([] as Department[]);
  department$ = new BehaviorSubject({} as Department);
  constructor(private router: Router, private dialog: DialogService) {
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
      if (helper.isTokenExpired(access_token)) {
        this.infoModal(
          'Έληξε η ισχύς του token πρόσβασης και έγινε αυτόματη έξοδος. Παρακαλώ κάντε ξανά τη διαδικασία εισόδου.'
        );
        this.logoutUser();
      }
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

  errorModal(message: string) {
    this.dialog.open(NgxAlertComponent, {
      size: 'sm',
      data: {
        type: 'error',
        message: message,
        heading: 'Κάτι δεν πήγε καλά',
      },
    });
  }

  successModal(message: string) {
    this.dialog.open(NgxAlertComponent, {
      size: 'sm',
      data: {
        type: 'success',
        message: message,
        heading: 'Επιτυχής ολοκλήρωση',
      },
    });
  }

  infoModal(message: string) {
    this.dialog.open(NgxAlertComponent, {
      size: 'sm',
      data: {
        type: 'info',
        message: message,
        heading: 'Πληροφορία από το σύστημα',
      },
    });
  }
}
