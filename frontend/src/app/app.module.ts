import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from 'ui';
import { UiFormsModule } from 'ui-forms';

import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [AppComponent, UserRegistrationComponent],
  imports: [BrowserModule, ReactiveFormsModule, UiModule, UiFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
