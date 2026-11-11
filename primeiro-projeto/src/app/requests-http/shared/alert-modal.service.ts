import { inject, Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum AlertTypes {
  DANGER = "danger",
  SUCCESS = "success"
}

@Injectable({
  providedIn: 'root',
})
export class AlertModalService {
  private modalService: BsModalService = inject(BsModalService);

  private showAlert(message: string, type: AlertTypes, dismissTimout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent, {
      initialState: {
        type: type,
        message: message
      }
    });

    if (dismissTimout) {
      setTimeout(() => bsModalRef.hide(), dismissTimout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSucess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  showConfirm(title: string, msg: string, okText?: string, cancelText?: string) {
    const bsModalRef: BsModalRef<ConfirmModalComponent> = this.modalService.show(ConfirmModalComponent, {
      initialState: {
        title: title,
        msg: msg,
        okTxt: okText || "Sim",
        cancelTxt: cancelText || "Cancelar"
      }
    });

    return (bsModalRef.content)?.confirmResult;
  }
}
