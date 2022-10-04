import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';

import { UiModule } from 'ui';
import { UiFormsModule } from 'ui-forms';
import { UserCategoryListComponent } from './user-category-list/user-category-list.component';

@NgModule({
  declarations: [AdminDashboardComponent, UserCategoryCreateComponent, UserCategoryListComponent],
  imports: [CommonModule, AdminRoutingModule, UiModule, UiFormsModule],
})
export class AdminModule {}
