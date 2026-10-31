import { Component, input, forwardRef, Provider } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true 
}

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
  providers: [INPUT_FIELD_VALUE_ACESSOR] // Esse TOKEN
})
export class InputFieldComponent implements ControlValueAccessor {
  classeCss = input({});
  id = input<string>("");
  label = input<string>("");
  type = input<string>("");
  placeholder = input<string>();
  control = input<AbstractControl>();
  isReadOnly = input<boolean>(false);

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: unknown) => void = () => { };
  onTouchedCb: (_: unknown) => void = () => { };

  writeValue(obj: any): void { // Resposável por settar o valor, quando fazemos campo.value
    this.value = obj;
  }
  registerOnChange(fn: any): void { // Resposável por falar com o Angular sempre que o valor mudar
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void { // Resposável por avisar o Angular sempre que o campo ganhar focus
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void { // Resposável por falar quando o campo está desabilitado
    this.isReadOnly.apply(isDisabled);
  }
}
