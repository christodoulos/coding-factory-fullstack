import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'ui';
import { InterfacesModule } from 'interfaces';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserCategoryCreateFormComponent } from './user-category-create-form/user-category-create-form.component';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
    UserCategoryCreateFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, UiModule, InterfacesModule],
  exports: [
    RegistrationFormComponent,
    LoginFormComponent,
    UserCategoryCreateFormComponent,
  ],
})
export class UiFormsModule {}
