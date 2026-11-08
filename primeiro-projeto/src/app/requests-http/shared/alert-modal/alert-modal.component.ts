import { Component, inject, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  standalone: false,
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss',
})
export class AlertModalComponent {
  @Input() type = "success";
  @Input() message = "";
  bsModalRef: BsModalRef = inject(BsModalRef);

  onClose(): void {
    this.bsModalRef.hide();
  }
}
