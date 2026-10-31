import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckbox(min = 1) {
    const validator: ValidatorFn = (formArray: AbstractControl) => {
      const totalChecked = (formArray as FormArray).controls
        .map(v => v.value)
        .reduce((total, current) => current ? total + current : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
    return validator;
  }

  static cepValidator(control: FormControl) {
    const cep: string = control.value;

    if (cep && cep !== "") {
      const validaCEP = /^[0-9]{8}$/;
      return validaCEP.test(cep) ? null : { cepInvalido: true };
    }

    return null;
  }

  static equalsTo(otherField: string) {
    const validator: ValidatorFn = (formControl: AbstractControl) => {
      if (!otherField) throw new Error("É neessário informar um campo.");

      if (!formControl.root || !(formControl.root as FormGroup).controls)
        return null;

      const field = (formControl.root as FormGroup).get(otherField);
      if (!field) throw new Error("É necessário informar um campo válido.");
      if (field.value !== formControl.value) return { equalsTo: otherField };

      return null;
    }

    return validator;
  }

  static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any) {
    const config: Record<string, string> = {
      "required": `${fieldName} é obrigatório.`,
      "minlength": `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
      "maxlength": `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
      "cepInvalido": `CEP inválido.`,
    };

    return config[validatorName];
  }
}
