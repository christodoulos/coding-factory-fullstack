import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';

const routes: Routes = [
  { path: 'category/create', component: UserCategoryCreateComponent },
  {
    path: '',
    component: AdminDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
