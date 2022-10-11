import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department, DepartmentCreateForm, SubDepartment } from 'interfaces';

@Component({
  selector: 'lib-department-update-form',
  templateUrl: './department-update-form.component.html',
})
export class DepartmentUpdateFormComponent implements OnChanges {
  @Output() updatedDepartment = new EventEmitter<DepartmentCreateForm>();
  @Input() department: Department | undefined | null;
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    subdepartments: new FormArray([]),
  });
  constructor() {}

  get subdepartments() {
    return this.form.controls['subdepartments'] as unknown as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const department = changes['department'].currentValue;
    if (department) {
      this.form = new FormGroup({
        id: new FormControl(department._id.$oid),
        name: new FormControl(department.name),
        subdepartments: new FormArray(
          department.subdepartments.map((subdepartment: SubDepartment) => {
            return new FormGroup({
              id: new FormControl(subdepartment.id.$oid),
              name: new FormControl(subdepartment.name),
            });
          })
        ),
      });
    }
  }

  deleteSub(i: number) {
    this.form.controls.subdepartments.removeAt(i);
  }

  onSubmit() {
    this.updatedDepartment.emit(this.form.value as DepartmentCreateForm);
    this.form.controls.subdepartments.clear();
    this.form.reset();
  }

  onAddSubdepartment() {
    this.subdepartments.push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
      })
    );
  }
}
