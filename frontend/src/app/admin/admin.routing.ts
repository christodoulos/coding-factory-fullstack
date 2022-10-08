import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';
import { UserCategoryListComponent } from './user-category-list/user-category-list.component';

const routes: Routes = [
  {
    path: 'category/list',
    component: UserCategoryListComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'category/create',
    component: UserCategoryCreateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
