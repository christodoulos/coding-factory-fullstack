import { Component } from '@angular/core';
import { UserLoginForm } from 'interfaces';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  constructor(private backend: BackendService) {}

  onCredentials(credentials: UserLoginForm) {
    this.backend.loginUser(credentials);
  }
}
