import { Component, OnInit } from '@angular/core';
import { UserCategoryDeleteForm } from 'interfaces';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-user-category-delete',
  templateUrl: './user-category-delete.component.html',
})
export class UserCategoryDeleteComponent implements OnInit {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  onDeleteCategory(data: UserCategoryDeleteForm) {
    this.backend.deleteUserCategory(data);
  }
}
