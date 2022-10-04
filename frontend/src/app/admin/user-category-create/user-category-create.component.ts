import { Component, OnInit } from '@angular/core';
import { UserCategoryCreateForm } from 'interfaces';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-user-category-create',
  templateUrl: './user-category-create.component.html',
})
export class UserCategoryCreateComponent implements OnInit {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  onNewCategory(category: UserCategoryCreateForm) {
    console.log(category);
    this.backend.createUserCategory(category);
  }
}
