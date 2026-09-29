import { Component, inject, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos-servico',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  // cursoService: CursosService = inject(CursosService);
  private cursosService: CursosService = inject(CursosService);

  constructor(/* private cursosService: CursosService */) {
    // this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    CursosService.criouNovoCurso.subscribe(
      {
        next: (curso: string) => this.cursos.push(curso),
      }
    );
  }
}
