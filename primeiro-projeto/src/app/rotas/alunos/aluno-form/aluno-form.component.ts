import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormCandeactivate } from '../../guards/form-candeactivate';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss',
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormCandeactivate {
  private route: ActivatedRoute = inject(ActivatedRoute)
  private alunosService: AlunosService = inject(AlunosService);
  private inscricao!: Subscription;
  aluno!: Aluno;
  formMudou = false;

  ngOnInit(): void {
    this.inscricao = this.route.paramMap.subscribe(params => {
      const id = Number(params.get("id"));
      this.aluno = this.alunosService.getAluno(id)!;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota(): boolean {

    if (this.formMudou) {
      if (confirm("Tem certeza que deseja sair desta página")) return true;
      else return false;
    }

    return true;
  }

  podeDesativar(): boolean {
    return this.podeMudarRota();
  }
}
