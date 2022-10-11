import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'ui';
import { InterfacesModule } from 'interfaces';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserCategoryCreateFormComponent } from './user-category-create-form/user-category-create-form.component';
import { UserCategoryDeleteFormComponent } from './user-category-delete-form/user-category-delete-form.component';
import { UserCategoryUpdateFormComponent } from './user-category-update-form/user-category-update-form.component';
import { DepartmentCreateFormComponent } from './department-create-form/department-create-form.component';
import { DepartmentSelectFormComponent } from './department-select-form/department-select-form.component';
import { DepartmentUpdateFormComponent } from './department-update-form/department-update-form.component';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    LoginFormComponent,
    UserCategoryCreateFormComponent,
    UserCategoryDeleteFormComponent,
    UserCategoryUpdateFormComponent,
    DepartmentCreateFormComponent,
    DepartmentSelectFormComponent,
    DepartmentUpdateFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, UiModule, InterfacesModule],
  exports: [
    RegistrationFormComponent,
    LoginFormComponent,
    UserCategoryCreateFormComponent,
    UserCategoryDeleteFormComponent,
    UserCategoryUpdateFormComponent,
    DepartmentCreateFormComponent,
    DepartmentSelectFormComponent,
    DepartmentUpdateFormComponent,
  ],
})
export class UiFormsModule {}
