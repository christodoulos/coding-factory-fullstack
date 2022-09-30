import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { UiModule } from 'ui';
import { UiFormsModule } from 'ui-forms';

@NgModule({
  declarations: [AdminDashboardComponent],
  imports: [CommonModule, AdminRoutingModule, UiModule, UiFormsModule],
})
export class AdminModule {}
