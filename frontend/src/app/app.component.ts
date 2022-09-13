import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';

  menu = ['Menu1', 'Menu2', 'menu3'];

  onClicked() {
    alert('Button Clicked');
  }

  onTopSelection(selection: string) {
    alert(selection);
  }

  onLeftSelection(selection: string) {
    alert(selection);
  }
}
