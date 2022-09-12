import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'register', component: UserRegistrationComponent },
  { path: 'user-info', component: UserContainerComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
