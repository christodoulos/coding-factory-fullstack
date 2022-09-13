import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ngx-topbar',
  templateUrl: './ngx-topbar.component.html',
})
export class NgxTopbarComponent {
  @Input() brand = 'Application Name';
  @Input() menu: string[] = ['TopOption1', 'TopOption2', 'TopOption3'];
  @Output() selection = new EventEmitter<string>();

  onClick(item: string) {
    this.selection.emit(item);
  }
}
