import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ngx-left-menu',
  templateUrl: './ngx-left-menu.component.html',
})
export class NgxLeftMenuComponent {
  @Input() menu: string[] = [
    'Left Menu Option 1',
    'Left Menu Option 2',
    'Left Menu Option 3',
  ];
  @Output() selection = new EventEmitter<string>();

  onClick(selection: string) {
    this.selection.emit(selection);
  }
}
