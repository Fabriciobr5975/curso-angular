import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

export abstract class BaseFormComponent {
  formulario!: FormGroup;

  abstract submit(): void;

  onSubmit(): void {
    if (this.formulario.valid) {
      this.submit();
    } else {
      console.log("Formulário inválido");
      // this.formulario.markAllAsDirty();
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray)
        this.verificaValidacoesForm(controle);
    });
  }

  resetar(): void {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string): boolean {
    const control = this.formulario.get(campo);
    if (!control) return false;
    return (!control.valid && (control.touched || control.dirty));
  }

  aplicaCssErro(campo: string): Record<string, boolean> {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  getCampo(campo: string): AbstractControl | null {
    return this.formulario.get(campo);
  }
}
