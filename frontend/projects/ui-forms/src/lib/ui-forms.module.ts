import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'ui';
import { InterfacesModule } from 'interfaces';

import { RegistrationFormComponent } from './registration-form/registration-form.component';


@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [CommonModule, ReactiveFormsModule, UiModule, InterfacesModule],
  exports: [RegistrationFormComponent],
})
export class UiFormsModule {}
