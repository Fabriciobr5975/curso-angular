import { Component, inject } from '@angular/core';
import { Curso } from "../curso";
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: false,
  templateUrl: './cursos-lista.component.html',
  styleUrl: './cursos-lista.component.scss',
  preserveWhitespaces: true // Preserva os espaços em branco no template html
})
export class CursosListaComponent {
  private service: CursosService = inject(CursosService);
  protected cursos: Curso[] = [];

  constructor() {
    this.service.list()
      .subscribe(dados => this.cursos = dados)
  }
}
