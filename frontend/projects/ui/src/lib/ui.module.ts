import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiComponent } from './ui.component';
import { NgxButtonComponent } from './ngx-button/ngx-button.component';
import { NgxTopbarComponent } from './ngx-topbar/ngx-topbar.component';
import { NgxLeftMenuComponent } from './ngx-left-menu/ngx-left-menu.component';
import { NgxInputComponent } from './ngx-input/ngx-input.component';
import { NgxSelectComponent } from './ngx-select/ngx-select.component';
import { NgxHeadingComponent } from './ngx-heading/ngx-heading.component';

@NgModule({
  declarations: [
    UiComponent,
    NgxButtonComponent,
    NgxTopbarComponent,
    NgxLeftMenuComponent,
    NgxInputComponent,
    NgxSelectComponent,
    NgxHeadingComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    UiComponent,
    NgxButtonComponent,
    NgxTopbarComponent,
    NgxLeftMenuComponent,
    NgxInputComponent,
    NgxSelectComponent,
    NgxHeadingComponent,
  ],
})
export class UiModule {}
