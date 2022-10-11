import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCategoryUpdateForm } from 'interfaces';

@Component({
  selector: 'lib-user-category-update-form',
  templateUrl: './user-category-update-form.component.html',
})
export class UserCategoryUpdateFormComponent {
  @Output() updateCategory = new EventEmitter<UserCategoryUpdateForm>();
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.updateCategory.emit(this.form.value as UserCategoryUpdateForm);
    this.form.reset();
  }
}
