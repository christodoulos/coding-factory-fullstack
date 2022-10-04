import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCategoryCreateForm } from 'interfaces';

@Component({
  selector: 'lib-user-category-create-form',
  templateUrl: './user-category-create-form.component.html',
})
export class UserCategoryCreateFormComponent {
  @Output() newCategory = new EventEmitter<UserCategoryCreateForm>();
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.newCategory.emit(this.form.value as UserCategoryCreateForm);
    this.form.reset();
  }
}
