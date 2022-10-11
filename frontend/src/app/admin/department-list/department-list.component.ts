import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent implements OnInit {
  departments$ = this.service.departments$;
  constructor(private service: AppService, private backend: BackendService) {
    this.backend.getDepartments();
  }

  ngOnInit(): void {}
}
