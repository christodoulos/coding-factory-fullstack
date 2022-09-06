import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  username = '';
  users: Person[] = [];

  onUserAge(age: number) {
    this.users.push({ name: this.username, age: age });
    console.log(this.users);
  }
}
