import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { AlertModalService } from './../../shared/alert-modal.service';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-form',
  standalone: false,
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss',
})
export class CursosFormComponent implements OnInit {
  protected form: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  protected submitted = false;

  private service: Cursos2Service = inject(Cursos2Service);
  private modal: AlertModalService = inject(AlertModalService);

  private location: Location = inject(Location);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const curso: Curso = this.route.snapshot.data["curso"];
    this.form = this.fb.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log("submit");

      let msgSuccess = "Curso criado com sucesso!";
      let msgError = "Erro ao criar curso, tente novamente!";

      if (this.form.value.id) {
        msgSuccess = "Curso atualizado com sucesso!";
        msgError = "Erro ao atualizar curso, tente novamente!";
      }

      this.service.save(this.form.value)
        .subscribe({
          next: () => {
            this.modal.showAlertSucess(msgSuccess);
            this.location.back();
          },
          error: () => this.modal.showAlertDanger(msgError),
        });

      // if (this.form.value.id) {
      //   this.service.save(this.form.value)
      //     .subscribe({
      //       next: () => {
      //         this.modal.showAlertSucess("Curso atualizado com sucesso!");
      //         this.location.back();
      //       },
      //       error: () => this.modal.showAlertDanger("Erro ao atualizar curso, tente novamente!"),
      //     });
      // } else {
      //   this.service.save(this.form.value)
      //     .subscribe({
      //       next: () => {
      //         this.modal.showAlertSucess("Curso criado com sucesso!");
      //         this.location.back();
      //       },
      //       error: () => this.modal.showAlertDanger("Erro ao criar curso, tente novamente!"),
      //       complete: () => console.log("Request completo."),
      //     });
      // }
    }
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  ngOnInit(): void {
    // this.route.params.subscribe({
    //   next: params => {
    //     const id = Number.parseInt(params["id"]);
    //     const curso$ = this.service.loadById(id);
    //     curso$.subscribe(curso => this.updateForm(curso));
    //   },
    // });

    // this.route.params
    //   .pipe(
    //     map(params => Number.parseInt(params["id"])),
    //     switchMap(id => this.service.loadById(id))
    //   )
    //   .subscribe({ next: curso => this.updateForm(curso) });
    console.log("OnInit");
  }

  // private updateForm(curso: Curso) {
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }
}
