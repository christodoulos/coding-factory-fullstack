import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ngx-button',
  templateUrl: './ngx-button.component.html',
})
export class NgxButtonComponent {
  @Input() label = 'Label';
  @Input() notAllowed = false;
  @Output() clicked = new EventEmitter();

  onClick() {
    if (!this.notAllowed) this.clicked.emit();
  }
}
