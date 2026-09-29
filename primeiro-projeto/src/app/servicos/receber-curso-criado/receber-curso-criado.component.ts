import { Component, inject, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  standalone: false,
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.scss',
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso!: string;
  private cursoService: CursosService = inject(CursosService);


  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado,
    );
  }
}
