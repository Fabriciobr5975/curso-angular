import { AlunosService } from './alunos.service';
import { Component, inject, OnInit } from '@angular/core';
import { Aluno } from './aluno';

@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];

  private alunosService: AlunosService = inject(AlunosService);

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }

}
