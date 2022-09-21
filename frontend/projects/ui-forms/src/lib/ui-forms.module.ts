import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'ui';
import { InterfacesModule } from 'interfaces';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [RegistrationFormComponent, LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule, UiModule, InterfacesModule],
  exports: [RegistrationFormComponent, LoginFormComponent],
})
export class UiFormsModule {}
