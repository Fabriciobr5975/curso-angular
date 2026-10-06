import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from './cursos.service';

interface Cursos {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: Cursos[] = [];
  pagina!: number;
  inscricao!: Subscription;

  private route: ActivatedRoute = inject(ActivatedRoute);
  private cursosService: CursosService = inject(CursosService);
  private router: Router = inject(Router);

  proximaPagina(): void {
    // this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { 'pagina': ++this.pagina }});
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      queryParam => this.pagina = queryParam["pagina"]);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
