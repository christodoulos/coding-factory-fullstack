import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  brand = 'Announcements';

  selections = [
    { key: '1', value: 'Option 1' },
    { key: '2', value: 'Option 2' },
    { key: '3', value: 'Option 3' },
  ];

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    selection: new FormControl('', [Validators.required]),
  });

  onClicked() {
    alert('Button Clicked');
  }

  onTopSelection(selection: string) {
    alert(selection);
  }

  onLeftSelection(selection: string) {
    alert(selection);
  }

  onSubmit() {
    alert(
      `Name: ${this.form.controls.name.value}, Email: ${this.form.controls.email.value}, Selection: ${this.form.controls.selection.value}`
    );
  }
}
