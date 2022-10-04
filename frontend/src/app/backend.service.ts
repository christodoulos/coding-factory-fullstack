import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import {
  UserRegistrationForm,
  UserLoginForm,
  LoginSuccess,
  UserCategoryCreateForm,
  UserCategory,
} from 'interfaces';
import { NgxAlertComponent } from 'ui';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppService } from './app.service';

const helper = new JwtHelperService();

const API = 'http://localhost:5000';
const USER_API = `${API}/user/api`;
const USER_CATEGORY_API = `${API}/user/category`;

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private dialog: DialogService,
    private router: Router,
    private service: AppService
  ) {
    console.log('In Backend service');
  }

  registerUser(user: UserRegistrationForm) {
    // this.service.isLoading$.next(true);
    this.http.post(`${USER_API}/register`, user).subscribe({
      next: (data) => {
        console.log(data);
        this.dialog.open(NgxAlertComponent, {
          size: 'sm',
          data: {
            type: 'success',
            message:
              'Η εγγραφή σας ήταν επιτυχής. Μπορείτε να πραγματοποιήσετε διαδικασία εισόδου με το όνομα χρήστη και το μυστικό κωδικό σας.',
            heading: 'Επιτυχής εγγραφή χρήστη',
          },
        });
        this.router.navigate(['login']);
        // this.service.isLoading$.next(false);
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  loginUser(user: UserLoginForm) {
    // this.service.isLoading$.next(true);
    this.http.post<LoginSuccess>(`${USER_API}/login`, user).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        const whoami = helper.decodeToken(data.access_token);
        console.log(whoami.sub);
        localStorage.setItem('user', JSON.stringify(whoami.sub));
        this.service.isLoggedIn$.next(true);
        // this.service.isLoading$.next(false);
        if (this.service.isAdmin()) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['user']);
        }
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  // User Category Endpoints

  createUserCategory(data: UserCategoryCreateForm) {
    this.http.post<UserCategory>(USER_CATEGORY_API, data).subscribe({
      next: (data) => {
        console.log(data.name);
        this.dialog.open(NgxAlertComponent, {
          size: 'sm',
          data: {
            type: 'success',
            message: `H nea kathgoria ${data.name} dhmiourgithike`,
            heading: 'Επιτυχής δημιουγία κατηγορίας χρήστη',
          },
        });
      },
      error: (e) => {
        const error = e.error.message;
        this.service.errorModal(error);
      },
    });
  }

  getUserCategories() {
    this.http.get<UserCategory[]>(USER_CATEGORY_API).subscribe((data) => {
      console.log(data);
      this.service.userCategories$.next(data);
    });
  }
}
