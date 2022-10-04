import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from 'ui';
import { UiFormsModule } from 'ui-forms';

import { NoauthRoutingModule } from './noauth.routing';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NoauthRoutingModule,
    UiModule,
    UiFormsModule,
  ],
})
export class NoauthModule {}
