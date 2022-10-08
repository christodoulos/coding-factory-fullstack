import { Component } from '@angular/core';
import { UserCategoryCreateForm } from 'interfaces';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-user-category-create',
  templateUrl: './user-category-create.component.html',
})
export class UserCategoryCreateComponent {
  constructor(private backend: BackendService) {}

  onNewCategory(category: UserCategoryCreateForm) {
    this.backend.createUserCategory(category);
  }
}
