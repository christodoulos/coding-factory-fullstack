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
  selector: 'lib-ngx-select',
  templateUrl: './ngx-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NgxSelectComponent,
      multi: true,
    },
  ],
})
export class NgxSelectComponent implements ControlValueAccessor {
  @Input() label = 'Select Label';
  @Input() prompt = '';
  @Input() selections: { key: string; value: string }[] = [];
  @Input() required = false;
  @Input() multiple = false;
  @Input() formControlName = '';
  @ViewChild(FormControlDirective) formControlDirective:
    | FormControlDirective
    | undefined;
  formControl!: FormControl;

  constructor(
    private service: UiService,
    private controlContainer: ControlContainer
  ) {}

  onChange(event: any) {
    if (!event.target.options.selectedIndex)
      this.control.setErrors({ required: true });
  }

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
