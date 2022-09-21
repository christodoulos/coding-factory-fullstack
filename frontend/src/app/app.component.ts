import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  brand = 'Ανακοινώσεις';

  topMenu = ['Εγγραφή', 'Είσοδος'];

  constructor(private service: AppService) {}

  onTopSelection(selection: string) {
    this.service.navigate(selection);
  }
}
