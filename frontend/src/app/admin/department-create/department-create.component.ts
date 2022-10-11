import { Component, OnInit } from '@angular/core';
import { DepartmentCreateForm } from 'interfaces';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
})
export class DepartmentCreateComponent implements OnInit {
  constructor(private backend: BackendService) {}

  ngOnInit(): void {}

  onNewDepartment(data: DepartmentCreateForm) {
    console.log(data);
    this.backend.createDepartment(data);
  }
}
