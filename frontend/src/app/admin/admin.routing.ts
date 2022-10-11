import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './admin.guard';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { UserCategoryCreateComponent } from './user-category-create/user-category-create.component';
import { UserCategoryDeleteComponent } from './user-category-delete/user-category-delete.component';
import { UserCategoryListComponent } from './user-category-list/user-category-list.component';
import { UserCategoryUpdateComponent } from './user-category-update/user-category-update.component';

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
    path: 'category/delete',
    component: UserCategoryDeleteComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'category/update',
    component: UserCategoryUpdateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'department/create',
    component: DepartmentCreateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'department/update',
    component: DepartmentUpdateComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'department/list',
    component: DepartmentListComponent,
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
