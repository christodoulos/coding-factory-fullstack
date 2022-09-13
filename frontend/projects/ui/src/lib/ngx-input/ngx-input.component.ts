import { Component, Input, ViewChild } from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { UiService } from '../ui.service';

@Component({
  selector: 'lib-ngx-input',
  templateUrl: './ngx-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NgxInputComponent,
      multi: true,
    },
  ],
})
export class NgxInputComponent implements ControlValueAccessor {
  @Input() label = 'Input Label';
  @Input() type = 'text';
  @Input() required = false;
  @Input() formControlName = '';
  @ViewChild(FormControlDirective) formControlDirective:
    | FormControlDirective
    | undefined;
  formControl!: FormControl;

  constructor(
    private service: UiService,
    private controlContainer: ControlContainer
  ) {}

  getError(control: FormControl) {
    return this.service.getError(control);
  }

  get control() {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  writeValue(obj: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.writeValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnChange(fn);
    }
  }

  registerOnTouched(fn: any): void {
    if (this.formControlDirective?.valueAccessor) {
      this.formControlDirective.valueAccessor.registerOnTouched(fn);
    }
  }
}
