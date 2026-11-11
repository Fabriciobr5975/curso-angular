import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from '../../shared/alert-modal.service';
import { Curso } from "../curso";
import { CursosService } from '../cursos.service';
import { Cursos2Service } from '../cursos2.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: false,
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true // Preserva os espaços em branco no template html
})
export class CursosListaComponent implements OnInit {
  private service: Cursos2Service = inject(Cursos2Service);
  // protected cursos: Curso[] = [];
  protected cursos$!: Observable<Curso[]>;
  protected error$ = new Subject<boolean>();

  // protected bsModalRef: BsModalRef = inject(BsModalRef);
  private deleteModalRef: BsModalRef = inject(BsModalRef);

  @ViewChild("deleteModal") deleteModal!: TemplateRef<Component>;

  private modalService: BsModalService = inject(BsModalService);
  private alertService: AlertModalService = inject(AlertModalService);

  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private cursoSelecionado: Curso | null = null;

  ngOnInit(): void {
    // this.service.list()
    //   .subscribe(dados => this.cursos = dados);
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError();
          return EMPTY;
        })
      );

    // this.service.list()
    //   .pipe(
    //     catchError(error => EMPTY)
    //   )
    //   .subscribe({
    //     next: dados => console.log(dados),
    //     // error: error => console.error(error),
    //     complete: () => console.log("Observable completo!")
    //   });
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');

    // this.bsModalRef = this.modalService.show(AlertModalComponent, {
    //   initialState: {
    //     type: 'danger',
    //     message: 'Erro ao carregar cursos. Tente novamente mais tarde.'
    //   }
    // });

    // this.bsModalRef.content.type = "danger";
    // this.bsModalRef.content.message = "Erro ao carregar cursos. Tente novamente mais tarde.";
  }

  onEdit(id: number) {
    this.router.navigate(["editar", id], { relativeTo: this.route });
  }

  onRemove(curso: Curso) {
    this.cursoSelecionado = curso;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: "modal-sm" });
    const result$ = this.alertService.showConfirm("Confirmação", "Tem certeza que deseja remover esse curso?");
    result$?.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
      )
      .subscribe({
        next: () => this.onRefresh(),
        error: () =>
          this.alertService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.'),
      });
  }

  onConfirmDelete(): void {
    if (this.cursoSelecionado) {
      this.service.remove(this.cursoSelecionado.id)
        .subscribe({
          next: () => {
            this.onRefresh();
            this.modalService.hide();
          },
          error: () => {
            this.alertService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.');
            this.modalService.hide();
          }
        });
    }
  }

  onDeclineDelete(): void {
    this.modalService.hide();
  }
}
