import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';

@NgModule({
  declarations: [
    LibSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule,
    // FormsModule
  ]
})
export class ReactiveSearchModule { }
