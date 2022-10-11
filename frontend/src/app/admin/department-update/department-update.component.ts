import { Component, OnInit } from '@angular/core';
import { Department, DepartmentCreateForm } from 'interfaces';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
})
export class DepartmentUpdateComponent implements OnInit {
  departments$ = this.service.departments$.pipe(
    map((departments) =>
      departments.map(
        (department: Department) =>
          <{ key: string; value: string }>{
            key: department._id.$oid,
            value: department.name,
          }
      )
    )
  );
  department$ = this.service.department$;
  constructor(private service: AppService, private backend: BackendService) {
    this.backend.getDepartments();
  }
  ngOnInit(): void {
    this.service.department$.next({} as Department);
  }

  onDepartmentSelected(department: string[]) {
    if (department[0]) {
      this.backend.getDepartment(department[0]);
    } else {
      this.service.department$.next({} as Department);
    }
  }

  onUpdatedDepartment(department: DepartmentCreateForm) {
    console.log(department);
    this.backend.updateDepartment(department);
  }
}
