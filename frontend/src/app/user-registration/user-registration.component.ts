import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

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
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent {
  form = new FormGroup(
    {
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
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

  onSubmit() {
    if (!this.form.valid) {
      alert('Errors Detected!');
      console.log(this.form);
    } else {
      console.log(this.form.value);
    }
  }

  controlError(controlName: string) {
    const control = this.form.get(controlName);
    if (control) if (control.errors) return control.errors;
    return null;
  }
}
