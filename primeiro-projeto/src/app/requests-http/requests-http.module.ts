import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosModule } from './cursos/cursos.module';
import { RequestsHttpRoutingModule } from './requests-http-routing.module';
import { RequestsHttpComponent } from './requests-http.component';


@NgModule({
  declarations: [
    RequestsHttpComponent,
  ],
  imports: [
    CommonModule,
    CursosModule,
    RequestsHttpRoutingModule
  ],
  exports: [
    RequestsHttpComponent
  ]
})
export class RequestsHttpModule { }
