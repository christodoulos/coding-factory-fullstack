import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCategoryDeleteForm } from 'interfaces';

@Component({
  selector: 'lib-user-category-delete-form',
  templateUrl: './user-category-delete-form.component.html',
})
export class UserCategoryDeleteFormComponent {
  @Output() delteCategory = new EventEmitter<UserCategoryDeleteForm>();
  form = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.delteCategory.emit(this.form.value as UserCategoryDeleteForm);
    this.form.reset();
  }
}
