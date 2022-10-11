import { Component, OnInit } from '@angular/core';
import { UserCategoryUpdateForm } from 'interfaces';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-user-category-update',
  templateUrl: './user-category-update.component.html',
})
export class UserCategoryUpdateComponent implements OnInit {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  onUpdateCategory(data: UserCategoryUpdateForm) {
    this.backend.updateUserCategory(data);
  }
}
