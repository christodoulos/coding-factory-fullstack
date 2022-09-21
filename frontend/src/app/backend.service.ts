import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DialogService } from '@ngneat/dialog';
import { UserRegistrationForm, UserLoginForm, LoginSuccess } from 'interfaces';
import { NgxAlertComponent } from 'ui';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

const API = 'http://localhost:5000';
const USER_API = `${API}/user/api`;

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(
    private http: HttpClient,
    private dialog: DialogService,
    private router: Router
  ) {}

  registerUser(user: UserRegistrationForm) {
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
      },
      error: (e) => {
        const error = e.error.message;
        this.dialog.open(NgxAlertComponent, {
          size: 'sm',
          data: {
            type: 'error',
            message: error,
            heading: 'Λάθη που εντοπίστηκαν στο backend',
          },
        });
      },
    });
  }

  loginUser(user: UserLoginForm) {
    this.http.post<LoginSuccess>(`${USER_API}/login`, user).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        const whoami = helper.decodeToken(data.access_token);
        console.log(whoami);
      },
      error: (e) => {
        const error = e.error.message;
        this.dialog.open(NgxAlertComponent, {
          size: 'sm',
          data: {
            type: 'error',
            message: error,
            heading: 'Λάθη που εντοπίστηκαν στο backend',
          },
        });
      },
    });
  }
}
