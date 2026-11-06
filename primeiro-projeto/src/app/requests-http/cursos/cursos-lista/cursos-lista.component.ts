import { Component, inject, OnInit } from '@angular/core';
import { EMPTY, Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Curso } from "../curso";
import { CursosService } from '../cursos.service';

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
          this.error$.next(true);
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
}
