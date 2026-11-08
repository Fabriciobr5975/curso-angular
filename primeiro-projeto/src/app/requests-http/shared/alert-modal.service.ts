import { inject, Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = "danger",
  SUCCESS = "success"
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  private modalService: BsModalService = inject(BsModalService);

  private showAlert(message: string, type: AlertTypes) {
    this.modalService.show(AlertModalComponent, {
      initialState: {
        type: type,
        message: message
      }
    });
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSucess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS);
  }
}
