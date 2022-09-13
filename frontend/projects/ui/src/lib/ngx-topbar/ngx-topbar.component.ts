import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-ngx-topbar',
  templateUrl: './ngx-topbar.component.html',
})
export class NgxTopbarComponent {
  @Input() brand = 'Application Name';
  @Input() menu: string[] = ['TopOption1', 'TopOption2', 'TopOption3'];
}
