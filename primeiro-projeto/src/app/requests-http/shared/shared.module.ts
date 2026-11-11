import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    AlertComponent,
    ModalModule
  ],
})
export class SharedModule { }
