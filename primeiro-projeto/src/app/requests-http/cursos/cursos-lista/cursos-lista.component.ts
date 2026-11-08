import { Component, inject, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalComponent } from '../../shared/alert-modal/alert-modal.component';
import { Curso } from "../curso";
import { CursosService } from '../cursos.service';
import { AlertModalService } from '../../shared/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: false,
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true // Preserva os espaços em branco no template html
})
export class CursosListaComponent implements OnInit {
  private service: CursosService = inject(CursosService);
  // protected cursos: Curso[] = [];
  protected cursos$!: Observable<Curso[]>;
  protected error$ = new Subject<boolean>();

  protected bsModalRef: BsModalRef = inject(BsModalRef);
  // private modalService: BsModalService = inject(BsModalService);
  private alertService: AlertModalService = inject(AlertModalService);

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
}
