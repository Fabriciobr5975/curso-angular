import { Component, inject, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  standalone: false,
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss',
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  private cursoService: CursosService = inject(CursosService);

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }
}
