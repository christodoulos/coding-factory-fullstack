import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

class Validation {
  static match(source: string, target: string): ValidatorFn {
    return (control: AbstractControl) => {
      const sourceControl = control.get(source);
      const targetControl = control.get(target);
      // console.log(sourceControl?.value, targetControl?.value);
      if (targetControl?.errors && !targetControl.errors['mismatch']) {
        return null;
      }
      if (sourceControl?.value !== targetControl?.value) {
        control.get(target)?.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        return null;
      }
    };
  }
}

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
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
    Validation.match('password', 'repeatPassword')
  );

  constructor() {}

  ngOnInit(): void {
    this.form.controls.password.valueChanges.subscribe((value) => {
      if (this.form.controls.repeatPassword.value === value) {
        this.form.controls.repeatPassword.setErrors(null);
      }
    });
  }

  onSubmit() {
    if (!this.form.valid) {
      // alert('Errors Detected!');
      console.log(this.form);
    } else {
      console.log(this.form.value);
    }
  }
}
