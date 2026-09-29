import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';

@NgModule({
  declarations: [
    DiretivaNgclassComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DiretivaNgforComponent,
    DiretivaNgifComponent,
    DiretivaNgstyleComponent,
    DiretivaNgswitchComponent,
    DiretivasCustomizadasComponent,
    ExemploNgContentComponent,
    OperadorElvisComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DiretivasModule { }
