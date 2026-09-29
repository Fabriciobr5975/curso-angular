import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursosModule } from '../cursos/cursos.module';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CursosModule,
    CriarCursoModule
  ],
  // providers: [CursosService],
  providers: [LogService],
})
export class ServicosModule { }
