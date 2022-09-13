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

  onSelection(selection: string) {
    alert(selection);
  }
}
