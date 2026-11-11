import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  standalone: false,
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent implements OnInit {
  @Input() title = "";
  @Input() msg = "";
  @Input() cancelTxt = "Cancelar";
  @Input() okTxt = "Sim";

  confirmResult!: Subject<boolean>;

  private bsModalRef: BsModalRef = inject(BsModalRef);

  ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  onClose() {
    this.confirmAndClose(false);
  }

  onConfirm() {
    this.confirmAndClose(true);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }
}
