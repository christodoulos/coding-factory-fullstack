import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { NgxButtonComponent } from './ngx-button/ngx-button.component';

@NgModule({
  declarations: [UiComponent, NgxButtonComponent],
  imports: [CommonModule],
  exports: [UiComponent, NgxButtonComponent],
})
export class UiModule {}
