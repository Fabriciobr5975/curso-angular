import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CamelCasePipe } from './camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
  ],
  imports: [
    CommonModule,
    FormsModule
],
  exports: [
    ExemplosPipesComponent
  ],
  // providers: [
  //   {
  //     provide: LOCALE_ID,
  //     useValue: "pt-BR",
  //   }
  // ]
})
export class PipesModule { }
