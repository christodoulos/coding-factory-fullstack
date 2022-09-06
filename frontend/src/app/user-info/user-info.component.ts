import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input() username = '';
  constructor() {}

  ngOnInit(): void {}

  nameLength() {
    return this.username.length;
  }
}
