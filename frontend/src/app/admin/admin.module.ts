import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';

import { UiModule } from 'ui';
import { UiFormsModule } from 'ui-forms';
import { UserCategoryListComponent } from './user-category-list/user-category-list.component';
import { UserCategoryDeleteComponent } from './user-category-delete/user-category-delete.component';
import { UserCategoryUpdateComponent } from './user-category-update/user-category-update.component';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [AdminDashboardComponent, UserCategoryCreateComponent, UserCategoryListComponent, UserCategoryDeleteComponent, UserCategoryUpdateComponent, DepartmentCreateComponent, DepartmentUpdateComponent, DepartmentListComponent],
  imports: [CommonModule, AdminRoutingModule, UiModule, UiFormsModule],
})
export class AdminModule {}
