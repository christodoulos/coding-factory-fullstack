import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';
import { UserCategoryListComponent } from './user-category-list/user-category-list.component';

const routes: Routes = [
  { path: 'category/list', component: UserCategoryListComponent },
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
