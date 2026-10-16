import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    DataFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FormulariosModule { }
