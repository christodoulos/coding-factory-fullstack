import { Component, Input, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  @Input() users: Person[] = [];
  constructor() {}

  ngOnInit(): void {}
}
