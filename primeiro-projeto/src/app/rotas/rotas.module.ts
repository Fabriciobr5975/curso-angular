import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CursosModule,
    AlunosModule
  ]
})
export class RotasModule { }
