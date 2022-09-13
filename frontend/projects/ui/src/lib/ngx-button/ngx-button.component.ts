import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ngx-button',
  templateUrl: './ngx-button.component.html',
})
export class NgxButtonComponent {
  @Input() label = 'Label';
  @Input() notAllowed = false;
  @Output() clicked = new EventEmitter<boolean>();

  onClick() {
    this.clicked.emit(true);
  }
}
