import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-error-msg',
  standalone: false,
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent {
  control = input<AbstractControl | null>();
  label = input<string>("");

  get errorMessage() {
    const control = this.control();

    if(!control) return null;

    const errors = control.errors;
    for (const propertyName in errors) {
      if (errors[propertyName] && control.touched) {
        return FormValidations.getErrorMessage(this.label(), propertyName, errors[propertyName]);
      }
    }
    return null;
  }
}
