import { Component, OnInit } from '@angular/core';
import { UserCategoryCreateForm } from 'interfaces';

@Component({
  selector: 'app-user-category-create',
  templateUrl: './user-category-create.component.html',
})
export class UserCategoryCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onNewCategory(category: UserCategoryCreateForm) {
    console.log(category);
  }
}
