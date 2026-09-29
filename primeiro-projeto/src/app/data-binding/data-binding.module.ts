import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    InputPropertyComponent,
    OutputPropertyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DataBindingModule { }
