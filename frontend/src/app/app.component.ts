import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  brand = 'Ανακοινώσεις';

  topMenu = ['Εγγραφή', 'Είσοδος'];

  isLoggedIn$ = this.service.isLoggedIn$;
  isLoading$ = this.service.isLoading$;

  constructor(private service: AppService) {
    console.log('In App component');
  }

  onTopSelection(selection: string) {
    this.service.navigate(selection);
  }
}
