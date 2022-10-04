import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-user-category-list',
  templateUrl: './user-category-list.component.html',
})
export class UserCategoryListComponent implements OnInit {
  userCategories$ = this.service.userCategories$;
  constructor(private backend: BackendService, private service: AppService) {
    this.backend.getUserCategories();
  }

  ngOnInit(): void {}
}
