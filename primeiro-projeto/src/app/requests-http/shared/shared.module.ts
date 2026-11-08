import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    AlertComponent,
    ModalModule
  ],
})
export class SharedModule { }
