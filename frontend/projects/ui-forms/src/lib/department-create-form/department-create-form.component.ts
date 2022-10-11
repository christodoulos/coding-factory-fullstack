import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentCreateForm } from 'interfaces';

@Component({
  selector: 'lib-department-create-form',
  templateUrl: './department-create-form.component.html',
})
export class DepartmentCreateFormComponent {
  @Output() newDepartment = new EventEmitter<DepartmentCreateForm>();
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    subdepartments: new FormArray([]),
  });

  get subdepartments() {
    return this.form.controls['subdepartments'] as unknown as FormArray;
  }

  onSubmit() {
    this.newDepartment.emit(this.form.value as DepartmentCreateForm);
    this.form.reset();
  }

  onAddSubdepartment() {
    this.subdepartments.push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
      })
    );
  }

  deleteSub(i: number) {
    this.form.controls.subdepartments.removeAt(i);
  }
}
