import { Component } from '@angular/core';
import { UserLoginForm } from 'interfaces';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  onCredentials(credentials: UserLoginForm) {
    console.log(credentials);
    this.backend.loginUser(credentials);
  }
}
