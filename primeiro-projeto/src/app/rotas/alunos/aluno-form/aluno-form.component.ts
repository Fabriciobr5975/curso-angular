import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss',
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  private route: ActivatedRoute = inject(ActivatedRoute)
  private alunosService: AlunosService = inject(AlunosService);
  private inscricao!: Subscription;
  aluno!: Aluno;

  ngOnInit(): void {
    this.inscricao = this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.aluno = this.alunosService.getAluno(id)!;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
