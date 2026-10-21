import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class FormulariosModule { }
