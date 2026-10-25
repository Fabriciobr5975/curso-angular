import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    TemplateFormComponent,
    DataFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class FormulariosModule { }
