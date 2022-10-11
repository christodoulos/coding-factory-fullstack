import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-department-select-form',
  templateUrl: './department-select-form.component.html',
})
export class DepartmentSelectFormComponent implements OnInit {
  @Input() departments: { key: string; value: string }[] | null = [];
  @Output() departmentSelected = new EventEmitter<string[]>();

  form = new FormGroup({
    department: new FormControl([]),
  });
  constructor() {}

  ngOnInit(): void {
    this.form.controls.department.valueChanges.subscribe((value) => {
      this.departmentSelected.emit(value as string[]);
    });
  }
}
