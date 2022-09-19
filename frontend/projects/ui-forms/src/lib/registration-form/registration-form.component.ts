import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserRegistrationForm } from 'interfaces';
import { omit } from 'lodash-es';

function matchValidator(source: string, target: string): ValidatorFn {
  return (control: AbstractControl) => {
    const sourceControl = control.get(source);
    const targetControl = control.get(target);
    if (sourceControl?.value !== targetControl?.value) {
      return { mismatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'lib-registration-form',
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  @Input() userCategories: { key: string; value: string }[] | undefined;
  @Output() userRegistration = new EventEmitter<UserRegistrationForm>();

  form = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      name: new FormGroup({
        givenName: new FormControl('', [Validators.required]),
        surName: new FormControl('', [Validators.required]),
      }),
      category: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    matchValidator('password', 'repeatPassword')
  );

  get eachControlValid() {
    for (const [_, control] of Object.entries(this.form.controls)) {
      if (control['status'] === 'INVALID') return false;
    }
    return true;
  }

  onSubmit() {
    const formValue = omit(this.form.value, 'repeatPassword');
    const category = formValue.category![0];
    const user = { ...formValue, category };
    this.userRegistration.emit(user as UserRegistrationForm);
  }
}
