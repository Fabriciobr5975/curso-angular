import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: false,
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css',
  // outputs: ["mudouValor"]
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();
  // mudouValor = output<{ novoValor: number }>();

  @ViewChild('campoInput') campoValorInput: ElementRef | undefined;

  incrementa(): void {
    if (this.campoValorInput) {
      this.campoValorInput.nativeElement.value++;
    }
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa(): void {
    if (this.campoValorInput) {
      this.campoValorInput.nativeElement.value--;
    }
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
