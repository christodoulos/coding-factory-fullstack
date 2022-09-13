import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-button',
  templateUrl: './ngx-button.component.html',
})
export class NgxButtonComponent {
  @Input() label = 'Label';
}
