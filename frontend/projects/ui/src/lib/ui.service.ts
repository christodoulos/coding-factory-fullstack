import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor() {}

  getError(control: FormControl) {
    if (control.errors != null) {
      const error = Object.keys(control.errors)[0];
      switch (error) {
        case 'required':
          return 'Το πεδίο είναι απαραίτητο';
        case 'email':
          return 'Δεν είναι ένα email';
        case 'minlength':
          return 'Δώστε περισσότερους χαρακτήρες';
      }
    }
    return '';
  }
}
