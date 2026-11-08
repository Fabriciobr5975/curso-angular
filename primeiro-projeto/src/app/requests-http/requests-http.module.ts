import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosModule } from './cursos/cursos.module';
import { RequestsHttpRoutingModule } from './requests-http-routing.module';
import { RequestsHttpComponent } from './requests-http.component';
import { UnsubscribeRxjsModule } from './unsubscribe-rxjs/unsubscribe-rxjs.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    RequestsHttpComponent,
  ],
  imports: [
    CommonModule,
    CursosModule,
    RequestsHttpRoutingModule,
    UnsubscribeRxjsModule,
    SharedModule,
  ],
  exports: [
    RequestsHttpComponent
  ]
})
export class RequestsHttpModule { }
