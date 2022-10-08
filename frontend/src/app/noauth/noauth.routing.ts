import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoauthGuard } from './noauth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'register',
    component: UserRegistrationComponent,
    canActivate: [NoauthGuard],
  },
  { path: 'login', component: UserLoginComponent, canActivate: [NoauthGuard] },
  { path: '', component: WelcomeComponent, canActivate: [NoauthGuard] },
  { path: '**', component: WelcomeComponent, canActivate: [NoauthGuard] },
];

@NgModule({ imports: [RouterModule.forChild(routes)] })
export class NoauthRoutingModule {}
