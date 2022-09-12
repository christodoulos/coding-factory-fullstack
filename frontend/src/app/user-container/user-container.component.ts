import { Component } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent {
  username = '';
  users: Person[] = [];

  onUserAge(age: number) {
    this.users.push({ name: this.username, age: age });
    console.log(this.users);
  }
}
