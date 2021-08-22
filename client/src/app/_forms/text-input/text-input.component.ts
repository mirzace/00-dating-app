import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.sass']
})
export class TextInputComponent implements ControlValueAccessor {

  @Input() label : string;
  @Input() type = 'text';

  // Angular will always inject this locally into the component
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
   }

  writeValue(obj: any): void {}

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
