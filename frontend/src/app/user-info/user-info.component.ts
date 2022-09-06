import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent {
  @Input() username = '';
  @Output() userage = new EventEmitter<number>();
  age = 0;

  nameLength() {
    return this.username.length;
  }

  onClick() {
    this.userage.emit(this.age);
  }
}
