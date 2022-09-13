import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { NgxButtonComponent } from './ngx-button/ngx-button.component';
import { NgxTopbarComponent } from './ngx-topbar/ngx-topbar.component';

@NgModule({
  declarations: [UiComponent, NgxButtonComponent, NgxTopbarComponent],
  imports: [CommonModule],
  exports: [UiComponent, NgxButtonComponent, NgxTopbarComponent],
})
export class UiModule {}
