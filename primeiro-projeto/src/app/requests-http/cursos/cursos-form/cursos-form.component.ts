import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  standalone: false,
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss',
})
export class CursosFormComponent {
  protected form: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);

  protected submitted = false;

  constructor() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) console.log("submit");
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }
}
