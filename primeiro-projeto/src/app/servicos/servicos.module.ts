import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from '../cursos/cursos.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CursosModule,
    CriarCursoModule
  ],
  providers: [CursosService],
})
export class ServicosModule { }
