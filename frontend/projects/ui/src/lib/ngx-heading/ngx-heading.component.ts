import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-heading',
  templateUrl: './ngx-heading.component.html',
})
export class NgxHeadingComponent {
  @Input() text = '';
}
