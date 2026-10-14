import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: false,
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss',
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private alunosService: AlunosService = inject(AlunosService);
  private inscricao!: Subscription;
  aluno: Aluno | undefined;

  editarContato(): void {
    this.router.navigate(["/alunos", this.aluno?.id, "editar"]);
    // this.router.navigateByUrl(`/alunos/${this.aluno?.id}/editar`);
  }

  ngOnInit(): void {
    // this.inscricao = this.route.paramMap.subscribe(params => {
    //   const id = Number(params.get("id"));
    //   this.aluno = this.alunosService.getAluno(id);
    // });

    console.log("ngOnInit: AlunoDetalheComponent");

    this.inscricao = this.route.data.subscribe(
      (data) => {
        console.log("Recebendo o obj Aluno do resolver");
        this.aluno = data["aluno"];
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
