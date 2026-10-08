import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

interface Curso {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-curso-detalhe',
  standalone: false,
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id!: number;
  inscricao!: Subscription;
  curso: Curso | undefined;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private cursosService: CursosService = inject(CursosService);

  // constructor(/* private route: ActivatedRoute */) {
  //   this.id = this.route.snapshot.params["id"] ?? "";
  // }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      this.id = isNaN(params["id"]) ? 0 : Number(params["id"]);
    });

    this.curso = this.cursosService.getCurso(this.id);
    if(!this.curso) this.router.navigate(["/cursos/naoEncontrado"]);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
