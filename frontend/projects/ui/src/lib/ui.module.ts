import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { NgxButtonComponent } from './ngx-button/ngx-button.component';
import { NgxTopbarComponent } from './ngx-topbar/ngx-topbar.component';
import { NgxLeftMenuComponent } from './ngx-left-menu/ngx-left-menu.component';
import { NgxInputComponent } from './ngx-input/ngx-input.component';

@NgModule({
  declarations: [
    UiComponent,
    NgxButtonComponent,
    NgxTopbarComponent,
    NgxLeftMenuComponent,
    NgxInputComponent,
  ],
  imports: [CommonModule],
  exports: [
    UiComponent,
    NgxButtonComponent,
    NgxTopbarComponent,
    NgxLeftMenuComponent,
  ],
})
export class UiModule {}
